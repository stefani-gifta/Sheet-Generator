import BackButton from "./BackButton";
import NextButton from "./NextButton";

export default function FormTemplate() {
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

            <div class="form-buttons">
                <BackButton insertText={"Kembali"}/>
                <NextButton insertText={"Lanjutkan"}/>
            </div>
        </section>
    );
}