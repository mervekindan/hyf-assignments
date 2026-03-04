// This script changes the background color to a random HSL value when the button is clicked.
document.addEventListener("DOMContentLoaded", () => {
    const profilePhoto = document.querySelector(".profile-photo");

    if (!profilePhoto) return;

    function pickRandomBackground() {
        const h = Math.floor(Math.random() * 360);
        const s = 70; // Saturation
        const l = 60; // Lightness
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    function changeBackgroundAutomatically() {
        const color = pickRandomBackground();
        profilePhoto.style.backgroundColor = color;
    }

    // Change the background every 5 seconds
    setInterval(changeBackgroundAutomatically, 2000);
});
