import styles from "./OurPartners.module.css";
import { PartnerLogo } from "./PartnerLogo";

const partners = [
    {
        id: 1,
        alt: "alphabet-logo",
        src: "/business_partners/alphabet-logo.png",
    },
    { id: 2, alt: "amazon-logo", src: "/business_partners/amazon_logo.png" },
    { id: 3, alt: "cbc-logo", src: "/business_partners/CBC_Logo_White.png" },
    {
        id: 4,
        alt: "microsoft-logo",
        src: "/business_partners/Microsoft-Logo-white.png",
    },
    { id: 5, alt: "nyu-logo", src: "/business_partners/nyu-logo.png" },
    {
        id: 6,
        alt: "queens-logo",
        src: "/business_partners/QueensLogo_white.png",
    },
    { id: 7, alt: "samsung-logo", src: "/business_partners/samsung-logo.png" },
    { id: 8, alt: "sodexo-logo", src: "/business_partners/sodexo-logo.png" },
];

export const OurPartners = () => {
    return (
        <div className={styles.partnerLogosContainer}>
            {partners.map((partner) => (
                <PartnerLogo key={partner.id} {...partner} />
            ))}
        </div>
    );
};
