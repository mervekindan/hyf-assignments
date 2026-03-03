document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("colorBtn");
    if (!btn) return;

    function pickRandomBackground() {
        // Pick a random hue, use warm saturation and relatively light lightness
        const h = Math.floor(Math.random() * 360);
        const s = 70; // percent
        const l = 60; // percent (light enough so black text remains readable)
        return `hsl(${h} ${s}% ${l}%)`;
    }

    btn.addEventListener("click", () => {
        const color = pickRandomBackground();
        document.body.style.backgroundColor = color;
        // Keep text readable by choosing dark text for our chosen lightness
        document.body.style.color = "#111";
    });
});
