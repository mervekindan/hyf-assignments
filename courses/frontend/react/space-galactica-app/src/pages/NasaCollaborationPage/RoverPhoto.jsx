import styles from "./NasaCollaborationPage.module.css";

export function RoverPhoto({ src, date, roverName }) {
    return (
        <div className={styles.roverPic}>
            <p>Date: {date}</p>
            <p>{roverName}</p>
            <img className={styles.roverImg} src={src} alt={roverName} />
        </div>
    );
}
