import styles from "./CrewCard.module.css";

export function CrewCard({ alt, src, name, summary }) {
    return (
        <div className={styles.crewCard}>
            <img className={styles.crewImg} alt={alt} src={src} />
            <div className={styles.textContent}>
                <h5 className={styles.name}>{name}</h5>
                <p className={styles.summary}>{summary}</p>
            </div>
        </div>
    );
}
