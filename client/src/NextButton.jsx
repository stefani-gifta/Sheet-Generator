export default function NextButton({ insertText, onClick, className }) {
    return <button onClick={onClick} className={`start-button ${className}`}>{ insertText }<span class="right-arrow">→</span></button>
}