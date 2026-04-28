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

    useEffect(() => {
        const fetchRoverPhotos = async () => {
            const roverPhotoResponse = await fetch(
                NASA_URLs.marsRoverPhoto,
            ).then((response) => response.json());
            setRoverPhoto(roverPhotoResponse);
        };

        const fetchDailyImg = async () => {
            const dailyImgResponse = await fetch(
                NASA_URLs.astronomyPicOfTheDay,
            ).then((response) => response.json());
            setDailyImg(dailyImgResponse);
        };

        fetchRoverPhotos();
        fetchDailyImg();
    }, []);

    return (
        <div className="fullBGpicture">
            <main className="mainContent">
                <h1>Collaboration with NASA</h1>
                <section className="card">
                    <h2>Astronomy Picture of the day</h2>
                    {dailyImg?.url ? (
                        <>
                            <h3>{dailyImg.title}</h3>
                            <p>{dailyImg.explanation}</p>
                            <img
                                className={styles.nasaPicOfTheDayImg}
                                src={dailyImg.url}
                                alt={dailyImg.title}
                            />
                        </>
                    ) : (
                        <p>Loading daily image...</p>
                    )}
                </section>

                <section className="card">
                    <h2>Rover Photos</h2>
                    {roverPhoto?.photos?.length ? (
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
