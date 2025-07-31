export default function Page2() {
    const templates = [
        {}
    ];

    return (
        <div>
            <h2>Pilihlah satu template yang ingin digunakan</h2>
            <div class="template-container">
                <label class="template-card">
                    <input type="radio" name="template" />
                    <div class="card-content">
                        <img src="../assets/BSLC-logo.png" alt="BSLC Logo" class="logo" />
                        <div class="template-name">BSLC Event A 2024</div>
                    </div>
                </label>
                <label class="template-card">
                    <input type="radio" name="template" />
                    <div class="card-content">
                        <img src="../assets/BSLC-logo.png" alt="BSLC Logo" class="logo" />
                        <div class="template-name">BSLC Event A 2024</div>
                    </div>
                </label>
                <label class="template-card">
                    <input type="radio" name="template" />
                    <div class="card-content">
                        <img src="../assets/BSLC-logo.png" alt="BSLC Logo" class="logo" />
                        <div class="template-name">BSLC Event A 2024</div>
                    </div>
                </label>
            </div>
        </div>
    );
}