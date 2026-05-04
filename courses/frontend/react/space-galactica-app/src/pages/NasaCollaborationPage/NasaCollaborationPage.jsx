import React, { useState, useEffect } from "react";
import styles from "./NasaCollaborationPage.module.css";
import { API_KEY } from "./apikey";
import { RoverPhoto } from "./RoverPhoto";

const NASA_URLs = {
    astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
    marsRoverPhoto: `https://rovers.nebulum.one/api/v1//rovers/perseverance/photos?earth_date=2025-11-06`,
};

export const NasaCollaboration = () => {
    const [dailyImg, setDailyImg] = useState({});
    const [roverPhoto, setRoverPhoto] = useState({});
    const [dailyImgError, setDailyImgError] = useState(null);
    const [roverImgError, setRoverImgError] = useState(null);

    useEffect(() => {
        const fetchDailyImg = async () => {
            try {
                const response = await fetch(NASA_URLs.astronomyPicOfTheDay);

                if (!response.ok) {
                    throw new Error("Failed to fetch image");
                }

                const data = await response.json();
                setDailyImg(data);
            } catch (err) {
                setDailyImgError(err.message);
            }
        };

        fetchDailyImg();
    }, []);

    useEffect(() => {
        const fetchRoverPhotos = async () => {
            try {
                const response = await fetch(NASA_URLs.marsRoverPhoto);

                if (!response.ok) {
                    throw new Error("Failed to fetch rover photos");
                }

                const data = await response.json();
                setRoverPhoto(data);
            } catch (err) {
                setRoverImgError(err.message);
            }
        };

        fetchRoverPhotos();
    }, []);

    return (
        <div className="fullBGpicture">
            <main className="mainContent">
                <h1>Collaboration with NASA</h1>
                <section className="card">
                    <h2>Astronomy Picture of the day</h2>
                    {dailyImgError ? (
                        <p>Error: {dailyImgError}</p>
                    ) : dailyImg ? (
                        <>
                            <h3>{dailyImg.title}</h3>
                            <p>{dailyImg.explanation}</p>

                            {dailyImg.media_type === "video" ? (
                                <video
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    className={styles.nasaPicOfTheDayImg}
                                >
                                    <source
                                        src={dailyImg.url}
                                        type="video/mp4"
                                    />
                                </video>
                            ) : (
                                <img
                                    className={styles.nasaPicOfTheDayImg}
                                    src={dailyImg.url}
                                    alt={dailyImg.title}
                                />
                            )}
                        </>
                    ) : (
                        <p>Loading daily image...</p>
                    )}
                </section>

                <section className="card">
                    <h2>Rover Photos</h2>
                    {roverImgError ? (
                        <p>Error: {roverImgError}</p>
                    ) : roverPhoto?.photos?.length ? (
                        <div className={styles.roverGrid}>
                            {roverPhoto.photos.slice(0, 4).map((photo) => {
                                return (
                                    <RoverPhoto
                                        key={photo.id}
                                        src={photo.img_src}
                                        date={photo.earth_date}
                                        roverName={photo.rover.name}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <p>Loading rover photos...</p>
                    )}
                </section>
            </main>
        </div>
    );
};

export default NasaCollaboration;
