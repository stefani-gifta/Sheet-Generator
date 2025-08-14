import React, { useState } from 'react';

import BackButton from "./BackButton";
import NextButton from "./NextButton";

import Page1 from "./Page1";
import Page2 from "./Page2";
import MakeTemplatePage from "./Page 3/MakeTemplatePage";
import DownloadTemplatePage from "./Page 4/DownloadTemplatePage";

export default function FormTemplate({ onClick }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        programTitle: '',
        divisions: [],
        selectedTemplate: '',
    });

    const handleDataChange = (newData) => {
        setFormData(prev => ({ ...prev, ...newData }));
    };

    const generateFile = async () => {
        if (!formData.programTitle || formData.divisions.length === 0 || !formData.selectedTemplate) {
            alert("Harap lengkapi Judul Program Kerja, pilih Divisi, dan pilih Template sebelum melanjutkan.");
            return;
        }

        setIsLoading(true);
        setCurrentPage(3); 

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    programTitle: formData.programTitle,
                    divisions: formData.divisions,
                    templateName: formData.selectedTemplate,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Gagal membuat file di server.');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${formData.programTitle}.xlsx`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
            
            setCurrentPage(4);

        } catch (error) {
            console.error('Error:', error);
            alert(`Terjadi kesalahan: ${error.message}`);
            setCurrentPage(2);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNext = () => {
        if (currentPage === 2) {
            generateFile();
        } else if (currentPage < 4) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    const resetForm = () => {
        setFormData({
            programTitle: '',
            divisions: [],
            selectedTemplate: '',
        });
        setCurrentPage(1);
    }

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return <Page1 formData={formData} onDataChange={handleDataChange} />;
            case 2:
                return <Page2 formData={formData} onDataChange={handleDataChange} />;
            case 3:
                return <MakeTemplatePage />;
            case 4:
                return <DownloadTemplatePage onMakeAgain={resetForm} programTitle={formData.programTitle} />;
            default:
                return <Page1 formData={formData} onDataChange={handleDataChange} />;
        }
    };

    return (
        <section id="form">
            <button className="form-back-button" onClick={onClick} >
                <span className="left-arrow">←</span>
                Monitoring & References Template Generator
            </button>
            <div className="steps">
                <div className={currentPage >= 1 ? "steps-active" : ""}>Detail Program Kerja</div>
                <div className={currentPage >= 2 ? "steps-active" : ""}>Pilih Template</div>
                <div className={currentPage >= 3 ? "steps-active" : ""}>Membuat Template</div>
                <div className={currentPage >= 4 ? "steps-active" : ""}>Download Template</div>
            </div>
            <div className="form-contents">
                {renderPage()}
            </div>
            <div className="form-buttons">
                <BackButton 
                    insertText={"Kembali"} 
                    onClick={handleBack}
                    className={currentPage === 1 || currentPage === 4 || isLoading ? "hidden-button" : ""}
                />
                <NextButton 
                    insertText={"Lanjutkan"} 
                    onClick={handleNext}
                    className={currentPage === 3 || currentPage === 4 ? "hidden-button" : ""} 
                />
            </div>
        </section>
    );
}