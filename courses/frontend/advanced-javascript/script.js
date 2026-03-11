import { movies } from "./movies.js";
console.log(movies);

const shortTitleBtn = document.querySelector(".short-button");
const longTitleBtn = document.querySelector(".long-button");
const eightiesBtn = document.querySelector(".eighties-button");
const GoodMoviesBtn = document.querySelector(".good-button");
const AverageMoviesBtn = document.querySelector(".average-button");
const badMoviesBtn = document.querySelector(".bad-button");
const resultDiv = document.querySelector(".results");
const seeMoreBtn = document.querySelector(".see-more-button");

shortTitleBtn.addEventListener("click", () => {
    const shortTitles = movies
        .filter((movie) => movie.title.length <= 10)
        .map((movie) => movie.title);
    resultDiv.textContent = shortTitles.join(", ");
});

longTitleBtn.addEventListener("click", () => {
    const longTitles = movies
        .filter((movie) => movie.title.length > 18)
        .map((movie) => movie.title);
    resultDiv.textContent = longTitles.join(", ");
});

eightiesBtn.addEventListener("click", () => {
    const eighties = movies.filter(
        (movie) => movie.year <= 1989 && movie.year >= 1980,
    );
    resultDiv.innerHTML = `<b>${eighties.length}</b> movies were made from 1980 to 1989`;
});

const moviesWithTag = movies.map((movie) => {
    let tag;
    if (movie.rating >= 7) {
        tag = "Good";
    } else if (movie.rating >= 4) {
        tag = "Average";
    } else {
        tag = "Bad";
    }

    return { ...movie, tag };
});

function renderByTag(tag) {
    const filtered = moviesWithTag.filter((movie) => movie.tag === tag);

    resultDiv.innerHTML = filtered
        .map((movie) => `<p>${movie.title} (${movie.rating})</p>`)
        .join("");
}

GoodMoviesBtn.addEventListener("click", () => renderByTag("Good"));
AverageMoviesBtn.addEventListener("click", () => renderByTag("Average"));
badMoviesBtn.addEventListener("click", () => renderByTag("Bad"));
