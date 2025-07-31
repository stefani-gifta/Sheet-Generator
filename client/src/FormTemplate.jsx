import BackButton from "./BackButton";
import NextButton from "./NextButton";

import Page1 from "./Page1";
import Page2 from "./Page2";

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

            <div class="form-contents">
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
            </div>

            <div class="form-buttons">
                <BackButton insertText={"Kembali"} />
                <NextButton insertText={"Lanjutkan"} />
            </div>
        </section>
    );
}

function Page3() {

}

function Page4() {

}