import styles from "./PartnerLogo.module.css";

export function PartnerLogo({ alt, src }) {
    return <img className={styles.partnerLogo} alt={alt} src={src} />;
}
