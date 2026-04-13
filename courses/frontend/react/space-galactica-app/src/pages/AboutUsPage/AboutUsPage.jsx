import styles from "./AboutUsPage.module.css";
import { ValueCard } from "../../components/ValueCard.jsx";
import { PartnerLogo } from "../../components/PartnerLogo";
// 🧑🏽‍🚀 Task - Week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files in this folder.
// Import and use the components from the newly created files.

const values = [
    {
        id: 0.1,
        title: "Exploration:",
        description:
            "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible.",
    },
    {
        id: 0.2,
        title: "Innovation:",
        description:
            "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available.",
    },
    {
        id: 0.3,
        title: "Sustainability:",
        description:
            "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe.",
    },
    {
        id: 0.4,
        title: "Community:",
        description:
            "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars.",
    },
];

const OurValues = () => {
    // 🧑🏽‍🚀 Task - Week 1
    // Create the "Our Values" section.
    // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
    // Some inspiration ideas can be found in /data/inspiration_about_us.
    return (
        <div className={styles.valueCardContainer}>
            {values.map((value) => (
                <ValueCard id={value.id} {...value} />
            ))}
        </div>
    );
};

const OurCrew = () => {
    // 🧑🏽‍🚀 Task - Week 1
    // Create the "Our Crew section".
    // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
    // Use the pictures from /public/crew.
    // Some inspiration ideas can be found in /data/inspiration_about_us.
    return <p> ADD OUR CREW HERE </p>;
};

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

const OurPartners = () => {
    // 🧑🏽‍🚀 Task - Week 1
    // Create the "Our Partners section".
    // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
    // Use the pictures from /public/business_partners.
    // Some inspiration ideas can be found in /data/inspiration_about_us.
    return (
        <div className={styles.partnerLogosContainer}>
            {partners.map((partner) => (
                <PartnerLogo key={partner.id} {...partner} />
            ))}
        </div>
    );
};

export const Crew = () => {
    return (
        <div className="fullBGpicture">
            <main className="mainContent">
                <h1>About us</h1>
                <section className="card">
                    <h2>Our Mission</h2>
                    <p>
                        At Galactica, our mission is to unlock the wonders of
                        the universe for everyone. We believe that space is the
                        final frontier and that the opportunity to explore it
                        should be within everyone’s reach. Our journeys are
                        designed to inspire, educate, and provide a
                        once-in-a-lifetime experience that transcends the
                        ordinary.
                    </p>
                </section>
                <section className="card">
                    <h2>Our Values</h2>
                    <OurValues />
                </section>
                <section className="card">
                    <h2>The crew</h2>
                    <OurCrew />
                </section>
                <section className="card">
                    <h2>Our Partners</h2>
                    <OurPartners />
                </section>

                {/* 🧑🏽‍🚀 Task - Week 1 */}
                {/* Use the "OurPartners" component here. */}
            </main>
        </div>
    );
};

export default Crew;
