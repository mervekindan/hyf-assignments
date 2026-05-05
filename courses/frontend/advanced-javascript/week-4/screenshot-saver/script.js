import { RAPID_API_KEY, CRUDCRUD_URL } from "./secret.js";
const crudUrl = `${CRUDCRUD_URL}/screenshots`;

let currentScreenshot = null;

const ssButton = document.getElementById("screenshot-button");
ssButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const userInput = document.getElementById("link-input").value;
    const encodedURL = encodeURIComponent(userInput);

    const url = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodedURL}&width=1920&height=1080`;
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": RAPID_API_KEY,
            "x-rapidapi-host": "website-screenshot6.p.rapidapi.com",
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const preview = document.querySelector(".preview-container");
        preview.innerHTML = "";

        const img = document.createElement("img");
        img.src = result.screenshotUrl;

        currentScreenshot = {
            url: userInput,
            screenshot: result.screenshotUrl,
        };

        preview.appendChild(img);
    } catch (error) {
        console.error(error);
    }
});

class Screenshot {
    constructor(url, screenshot) {
        this._id = null;
        this.url = url;
        this.screenshot = screenshot;
    }

    render() {
        const div = document.createElement("div");
        div.className = "screenshot-item";

        const img = document.createElement("img");
        const p = document.createElement("p");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", async () => {
            try {
                if (!this._id) {
                    console.error("Cannot delete: no _id for this screenshot");
                    return;
                }

                await fetch(`${CRUDCRUD_URL}/screenshots/${this._id}`, {
                    method: "DELETE",
                });

                div.remove();
            } catch (error) {
                console.error("Error deleting screenshot:", error);
            }
        });

        img.src = this.screenshot;
        p.textContent = this.url;

        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(deleteButton);

        return div;
    }
}

const saveButton = document.getElementById("save-button");
const savedList = document.getElementById("saved-list");

saveButton.addEventListener("click", async () => {
    if (!currentScreenshot) {
        return;
    }

    const screenshot = new Screenshot(
        currentScreenshot.url,
        currentScreenshot.screenshot,
    );

    savedList.appendChild(screenshot.render());

    try {
        const response = await fetch(`${CRUDCRUD_URL}/screenshots`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                url: currentScreenshot.url,
                screenshot: currentScreenshot.screenshot,
            }),
        });
        const result = await response.json();
        screenshot._id = result._id;
    } catch (error) {
        console.error(error);
    }
});

async function loadSavedScreenshots() {
    try {
        const response = await fetch(`${CRUDCRUD_URL}/screenshots`);
        const savedScreenshots = await response.json();

        savedList.innerHTML = "";

        savedScreenshots.forEach((item) => {
            const screenshot = new Screenshot(item.url, item.screenshot);
            screenshot._id = item._id;
            savedList.appendChild(screenshot.render());
        });
    } catch (error) {
        console.error("Error loading saved screenshots:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadSavedScreenshots();
});
