import React, { useState, useEffect } from 'react';
import logoBSLC from '../assets/BSLC-logo.png'; 

function TemplateCard({ eventName, isSelected, onSelect }) {
    return (
        <label className="template-card">
            <input type="radio" name="template" checked={isSelected} onChange={onSelect} />
            <div className="card-content">
                <img src={logoBSLC} alt="BSLC Logo" className="logo" />
                <div className="template-name">{eventName}</div>
            </div>
        </label>
    );
}

export default function Page2({ formData, onDataChange }) {
    const [templates, setTemplates] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/api/templates')
            .then(res => {
                if (!res.ok) throw new Error('Gagal mengambil data template.');
                return res.json();
            })
            .then(data => setTemplates(data))
            .catch(err => {
                console.error(err);
                setError('Tidak dapat memuat template. Pastikan server backend berjalan.');
            });
    }, []);

    const handleTemplateSelect = (templateName) => {
        onDataChange({ selectedTemplate: templateName });
    };

    if (error) {
        return <div><p style={{ color: 'red' }}>{error}</p></div>;
    }

    return (
        <div>
            <h2>Pilihlah satu template yang ingin digunakan</h2>
            <div className="template-container">
                <div className='template-content'>
                    {templates.length > 0 ? (
                        templates.map(templateName => (
                            <TemplateCard
                                key={templateName}
                                eventName={templateName}
                                isSelected={formData.selectedTemplate === templateName}
                                onSelect={() => handleTemplateSelect(templateName)}
                            />
                        ))
                    ) : (
                        <p>Memuat template atau tidak ada template yang tersedia...</p>
                    )}
                </div>
            </div>
        </div>
    );
}