import { useState } from 'react';

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
            case 3:
                return <Page1 />;
            case 4:
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
            <button className="form-back-button">
                <span className="left-arrow">←</span>
                Monitoring & References Template Generator
            </button>

            <div className="steps">
                <div className="steps-active">Detail Program Kerja</div>
                <div className={currentPage >= 2 ? "steps-active" : ""}>Pilih Template</div>
                <div className={currentPage >= 3 ? "steps-active" : ""}>Membuat Template</div>
                <div className={currentPage >= 4 ? "steps-active" : ""}>Download Template</div>
            </div>

            <div className="form-contents">
                {renderPage()}
            </div>

            <div className="form-buttons">
                <BackButton insertText={"Kembali"} onClick={handleBack}
                    className={currentPage === 1 ? "hidden-button" : ""} />
                <NextButton insertText={"Lanjutkan"} onClick={handleNext}
                    className={currentPage === 4 ? "hidden-button" : ""} />
            </div>
        </section>
    );
}