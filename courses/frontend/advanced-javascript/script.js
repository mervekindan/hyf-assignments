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
// const seeMoreBtn = document.querySelector(".see-more-button");

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
        (movie) => movie.year >= 1980 && movie.year <= 1989,
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

goodMoviesBtn.addEventListener("click", () => renderByTag("Good"));
averageMoviesBtn.addEventListener("click", () => renderByTag("Average"));
badMoviesBtn.addEventListener("click", () => renderByTag("Bad"));

//Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.
ratingsBtn.addEventListener("click", () => {
    const highlyRatedMovies = movies
        .filter((movie) => movie.rating > 6)
        .map((movie) => movie.rating);

    resultDiv.textContent = highlyRatedMovies;
});

keywordsBtn.addEventListener("click", () => {
    const moviesWithKeywords = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes("surfer") ||
            movie.title.toLowerCase().includes("alien") ||
            movie.title.toLowerCase().includes("benjamin"),
    );
    resultDiv.innerHTML = `<b>${moviesWithKeywords.length}</b> movies contains <b>"Surfer", "Alien"</b> or <b>"Benjamin"</b> keywords in the title`;
});

duplicatedWordsBtn.addEventListener("click", () => {
    const duplicatedWordMovies = movies.filter((movie) => {
        const words = movie.title.toLowerCase().split(" ");

        return words.some(
            (word) => words.indexOf(word) !== words.lastIndexOf(word),
        );
    });

    resultDiv.textContent = duplicatedWordMovies
        .map((movie) => movie.title)
        .join(", ");
});
