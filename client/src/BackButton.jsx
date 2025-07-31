export default function BackButton({ insertText, onClick, className }) {
    return <button onClick={onClick} className={`start-button ${className}`}><span class="left-arrow">←</span>{ insertText }</button>
}