import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
import { SocialMediaItem } from "./SocialMediaItem";

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
            {/* 🧑🏽‍🚀 Task - Week 2 */}
            {/* Create a new list for the Pages. */}
            {/* We need to use the <Link /> component here. */}
            {/* <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li> <Link/> </li>
          ...
        </ul>
      </div> */}
            {/* Docs for the Link: https://reactrouter.com/api/components/Link#link. */}

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
