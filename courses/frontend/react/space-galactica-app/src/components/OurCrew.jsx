import styles from "./OurCrew.module.css";
import { CrewCard } from "./CrewCard";

const crew = [
    {
        id: 1,
        alt: "Sarah-Vega",
        src: "/crew/image-anousheh-ansari.png",
        name: "Captain Sarah Vega",
        summary:
            "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    },
    {
        id: 2,
        alt: "Leo-Redding",
        src: "/crew/image-douglas-hurley.png",
        name: "Dr. Leo Redding",
        summary:
            "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    },
    {
        id: 3,
        alt: "Alex-Santos",
        src: "/crew/image-mark-shuttleworth.png",
        name: "Mission Specialist Alex Santos",
        summary:
            "As a mission specialist, Alex's job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    },
    {
        id: 4,
        alt: "Michael-Patel",
        src: "/crew/image-victor-glover.png",
        name: "Crew Member Michael Patel",
        summary:
            "Michael brings a unique blend of technical skills and customer service experience to the team. He's always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
    },
];

export const OurCrew = () => {
    // 🧑🏽‍🚀 Task - Week 1
    // Create the "Our Crew section".
    // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
    // Use the pictures from /public/crew.
    // Some inspiration ideas can be found in /data/inspiration_about_us.
    return (
        <div className={styles.crewCardsContainer}>
            {crew.map((member) => (
                <CrewCard key={member.id} {...member} />
            ))}
        </div>
    );
};
