import logoBSLC from '../assets/BSLC-logo.png';

export default function Page2() {
    const templates = [
        {}
    ];

    return (
        <div>
            <h2>Pilihlah satu template yang ingin digunakan</h2>
            <div class="template-container">
                <div className='template-content'>
                    <TemplateCard eventName={"Event A 2024"} />
                    <TemplateCard eventName={"Event A 2023"} />
                    <TemplateCard eventName={"Event A 2025"} />
                </div>

                <div className='template-content'>
                    <TemplateCard eventName={"Event A 2024"} />
                    <TemplateCard eventName={"Event A 2023"} />
                    <TemplateCard eventName={"Event A 2025"} />
                </div>
            </div>
        </div>
    );
}

function TemplateCard({ eventName }) {
    return (
        <label class="template-card">
            <input type="radio" name="template" />
            <div class="card-content">
                <img src={logoBSLC} alt="BSLC Logo" class="logo" />
                <div class="template-name">{ eventName }</div>
            </div>
        </label>
    );
}