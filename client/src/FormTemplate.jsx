import { useState, useRef } from 'react';

import BackButton from "./BackButton";
import NextButton from "./NextButton";

import Page1 from "./Page1";
import Page2 from "./Page2";

export default function FormTemplate() {
    const [currentPage, setCurrentPage] = useState(1);

    const renderPage = () => {
        switch (currentPage) {
            case 1:
                return <Page1 />;
            case 2:
                return <Page2 />;
            default:
                return <Page1 />;
        }
    };

    const handleNext = () => {
        if (currentPage < 4) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <section id="form">
            <button class="form-back-button">
                <span class="left-arrow">←</span>
                Monitoring & References Template Generator
            </button>

            <div class="steps">
                <div>Detail Program Kerja</div>
                <div>Pilih Template</div>
                <div>Membuat Template</div>
                <div>Download Template</div>
            </div>

            <div class="form-contents">
                {renderPage()}
            </div>

            <div class="form-buttons">
                <BackButton insertText={"Kembali"} onClick={handleBack}
                    className={currentPage === 1 ? "hidden-button" : ""} />
                <NextButton insertText={"Lanjutkan"} onClick={handleNext}
                    className={currentPage === 4 ? "hidden-button" : ""} />
            </div>
        </section>
    );
}