import "./card.css";

export function Card({ title, description, imageUrl }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imageUrl} alt="a picture" />
        </div>
    );
}
