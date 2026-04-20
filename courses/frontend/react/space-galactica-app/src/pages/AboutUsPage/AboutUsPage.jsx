import { OurValues } from "../../components/OurValues";
import { OurCrew } from "../../components/OurCrew";
import { OurPartners } from "../../components/OurPartners";

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
                    <p>
                        Our crew is the heart and soul of Galactica. We are a
                        diverse team of seasoned space explorers, engineers, and
                        visionaries who are united by a common goal: to make
                        space travel accessible and exciting for all.
                    </p>
                    <OurCrew />
                </section>
                <section className="card">
                    <h2>Our Partners</h2>
                    <p>
                        We collaborate with some of the most respected names in
                        the space and technology industries to make every
                        journey extraordinary.
                    </p>
                    <OurPartners />
                </section>
            </main>
        </div>
    );
};

export default Crew;
