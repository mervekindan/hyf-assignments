import { movies } from "./movies.js";

const shortTitleBtn = document.querySelector(".short-button");
const longTitleBtn = document.querySelector(".long-button");
const goodMoviesBtn = document.querySelector(".good-button");
const averageMoviesBtn = document.querySelector(".average-button");
const badMoviesBtn = document.querySelector(".bad-button");
const ratingsBtn = document.querySelector(".rating-above-6");
const duplicatedWordsBtn = document.querySelector(".duplicated-words");
const eightiesBtn = document.querySelector(".eighties-button");
const keywordsBtn = document.querySelector(".keywords-button");
const resultDiv = document.querySelector(".results");
const seeMoreBtn = document.querySelector(".see-more-button");

let currentMovies = [];
let visibleCount = 20;
const step = 20;

function renderMovies() {
    const moviesToShow = currentMovies.slice(visibleCount - step, visibleCount);

    resultDiv.innerHTML += moviesToShow
        .map(
            (movie) =>
                `<div class="card">
                <h3>${movie.title}</h3>
                <p><b>Rating:</b> ${movie.rating}</p>
                <p><b>Year:</b> ${movie.year}</p>
                ${movie.tag ? `<p><b>Tag:</b> ${movie.tag}</p>` : ""}
                </div>`,
        )
        .join("");

    seeMoreBtn.style.display =
        visibleCount >= currentMovies.length ? "none" : "block";
}

function showMovies(movieArray) {
    currentMovies = movieArray;
    visibleCount = step;
    resultDiv.innerHTML = "";
    renderMovies();
}

seeMoreBtn.addEventListener("click", () => {
    visibleCount += step;
    renderMovies();
});

shortTitleBtn.addEventListener("click", () => {
    const shortTitles = movies.filter((movie) => movie.title.length <= 10);
    showMovies(shortTitles);
});

longTitleBtn.addEventListener("click", () => {
    const longTitles = movies.filter((movie) => movie.title.length > 18);
    showMovies(longTitles);
});

eightiesBtn.addEventListener("click", () => {
    const eighties = movies.filter(
        (movie) => movie.year >= 1980 && movie.year <= 1989,
    );
    resultDiv.innerHTML = `<div class="info-message"><p><b>${eighties.length}</b> movies were made from 1980 to 1989</p></div>`;
    seeMoreBtn.style.display = "none";
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
    showMovies(filtered);
}

goodMoviesBtn.addEventListener("click", () => renderByTag("Good"));
averageMoviesBtn.addEventListener("click", () => renderByTag("Average"));
badMoviesBtn.addEventListener("click", () => renderByTag("Bad"));

//Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.
ratingsBtn.addEventListener("click", () => {
    const highlyRatedMovies = movies.filter((movie) => movie.rating > 6);
    showMovies(highlyRatedMovies);
});

keywordsBtn.addEventListener("click", () => {
    const moviesWithKeywords = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes("surfer") ||
            movie.title.toLowerCase().includes("alien") ||
            movie.title.toLowerCase().includes("benjamin"),
    );
    resultDiv.innerHTML = `
  <div class="info-message">
    <p><b>${moviesWithKeywords.length}</b> movies contain <b>"Surfer", "Alien"</b> or <b>"Benjamin"</b> in the title</p>
  </div>
`;
    seeMoreBtn.style.display = "none";
});

duplicatedWordsBtn.addEventListener("click", () => {
    const duplicatedWordMovies = movies.filter((movie) => {
        const words = movie.title.toLowerCase().split(" ");

        return words.some(
            (word) => words.indexOf(word) !== words.lastIndexOf(word),
        );
    });

    showMovies(duplicatedWordMovies);
});
