require('dotenv').config();
const express = require('express');
const cors = require('cors');
const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
    console.log(`Server exceljs berjalan di http://localhost:${PORT}`);
});

app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/api/templates', (req, res) => {
    const templatesDirectory = path.join(__dirname, 'templates');
    if (!fs.existsSync(templatesDirectory)) {
        return res.status(500).json({ message: "Direktori template tidak ditemukan di server." });
    }
    fs.readdir(templatesDirectory, (err, files) => {
        if (err) {
            return res.status(500).send("Server error saat membaca direktori template.");
        }
        const excelFiles = files.filter(file => path.extname(file).toLowerCase() === '.xlsx');
        res.json(excelFiles);
    });
});

app.post('/api/generate', async (req, res) => {
    const { programTitle, divisions, templateName } = req.body;

    if (!programTitle || !divisions || !Array.isArray(divisions) || divisions.length === 0 || !templateName) {
        return res.status(400).json({ message: "Input tidak lengkap." });
    }

    const templatePath = path.join(__dirname, 'templates', templateName);

    try {
        const templateWorkbook = new ExcelJS.Workbook();
        await templateWorkbook.xlsx.readFile(templatePath);

        const newWorkbook = new ExcelJS.Workbook();

        const sheetNameMap = {
            'acara': 'Acara',
            'perkap': 'Perkap',
            'pubdok': 'Pubdok',
            'design': 'Design & Dokumentasi'
        };

        divisions.forEach(divValue => {
            const sheetName = sheetNameMap[divValue] || divValue;
            const templateSheet = templateWorkbook.getWorksheet(sheetName);

            if (templateSheet) {
                const newSheet = newWorkbook.addWorksheet(sheetName);
                templateSheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
                    const newRow = newSheet.getRow(rowNumber);
                    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
                        const newCell = newRow.getCell(colNumber);
                        newCell.value = cell.value;
                        newCell.style = { ...cell.style };
                    });
                });
                
                templateSheet.columns.forEach((column, index) => {
                    newSheet.columns[index].width = column.width;
                });
                const merges = templateSheet.model.merges || [];
                merges.forEach(merge => {
                    newSheet.mergeCells(merge);
                });

            } else {
                console.warn(`Peringatan: Sheet "${sheetName}" tidak ditemukan di template.`);
            }
        });

        if (newWorkbook.worksheets.length === 0) {
            return res.status(400).json({ message: "Tidak ada divisi yang cocok dengan sheet di template." });
        }

        const buffer = await newWorkbook.xlsx.writeBuffer();
        
        const outputFileName = `${programTitle}.xlsx`;
        res.setHeader('Content-Disposition', `attachment; filename="${outputFileName}"`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(Buffer.from(buffer));

    } catch (error) {
        console.error("Error generating file with exceljs:", error);
        res.status(500).send("Gagal memproses file.");
    }
});