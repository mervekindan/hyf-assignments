import styles from "./SocialMediaItem.module.css";

export function SocialMediaItem({ url, title, icon }) {
    return (
        <li className={styles.item}>
            <a href={url} className={styles.link}>
                <img src={icon} alt={title} className={styles.icon} />
                {title}
            </a>
        </li>
    );
}
