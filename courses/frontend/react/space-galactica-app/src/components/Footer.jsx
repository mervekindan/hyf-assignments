import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { SocialMediaItem } from "./SocialMediaItem";
import { PageLink } from "./PageLink";

export const Footer = () => {
    const { pathname } = useLocation();

    return (
        <footer className={pathname !== "/" ? styles.footer : styles.hidden}>
            <div className={styles.footerDescription}>
                <h3>Galactica</h3>
                <p>
                    Explore the universe and beyond. Your journey to the stars
                    starts here.
                </p>
                <p>&copy; 2024 Galactica. All rights reserved.</p>
            </div>

            <div className={styles.pages}>
                <h3>Pages</h3>
                <ul className={styles.footerList}>
                    <li>
                        <PageLink to="/" title="Home" />
                    </li>
                    <li>
                        <PageLink to="/about_us" title="About Us" />
                    </li>
                    <li>
                        <PageLink to="/destination" title="Destination" />
                    </li>
                    <li>
                        <PageLink
                            to="/nasa_collaboration"
                            title="Nasa Collaboration"
                        />
                    </li>
                </ul>
            </div>

            <div className={styles.footerLinks}>
                <h3>Follow us</h3>
                <ul className={styles.footerList}>
                    <SocialMediaItem
                        url="https://facebook.com"
                        title="Facebook"
                        icon="../../socialmedia/Facebook.png"
                    />
                    <SocialMediaItem
                        url="https://instagram.com"
                        title="Instagram"
                        icon="../../socialmedia/Instagram.png"
                    />
                    <SocialMediaItem
                        url="https://tiktok.com"
                        title="Tiktok"
                        icon="../../socialmedia/Tiktok.png"
                    />
                    <SocialMediaItem
                        url="https://linkedin.com"
                        title="LinkedIn"
                        icon="../../socialmedia/LinkedIn.png"
                    />
                    <SocialMediaItem
                        url="https://google.com"
                        title="On the streets at night"
                        icon="../../socialmedia/Google.png"
                    />
                </ul>
            </div>
        </footer>
    );
};
