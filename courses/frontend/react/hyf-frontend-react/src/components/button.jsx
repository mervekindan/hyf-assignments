export function Button({ text, onClick }) {
    return (
        <button className="btn-primary" onClick={handleClick}>
            {text}
        </button>
    );
}

function handleClick() {
    console.log("Button is clicked");
}
