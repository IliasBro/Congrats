const confettiContainer = document.getElementById("confetti-container");
const button = document.getElementById("confettiButton");

// Erste Ladung Konfetti direkt beim Laden
window.addEventListener("load", () => {
    spawnConfetti(120);
});

// Weitere Konfetti bei Button-Klick
button.addEventListener("click", () => {
    spawnConfetti(160);
});

function spawnConfetti(amount) {
    for (let i = 0; i < amount; i++) {
        const piece = document.createElement("div");
        piece.classList.add("confetti-piece");

        // Zufällige horizontale Position
        const left = Math.random() * 100;
        piece.style.left = left + "vw";

        // Zufällige Verzögerung, Dauer und „Seitwärtsbewegung“
        const delay = Math.random() * 0.8;
        const duration = 2 + Math.random() * 1.5;
        const xMove = (Math.random() * 40 - 20) + "vw";

        piece.style.animationDelay = delay + "s";
        piece.style.animationDuration = duration + "s";
        piece.style.setProperty("--x-move", xMove);

        confettiContainer.appendChild(piece);

        // Nach der Animation wieder entfernen
        setTimeout(() => {
            piece.remove();
        }, (delay + duration) * 1000);
    }
}