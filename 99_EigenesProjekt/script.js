let position = 0;
let geschwindigkeit = 9;
const maxPosition = 10000;

function bewegen() {
    // Bewegung
    position -= geschwindigkeit;

    // Welt bewegen
    document.getElementById("welt").style.left =
        position + "px";

    // Ladefortschritt berechnen
    let fortschritt = Math.min(
        (Math.abs(position) / maxPosition) * 100,
        100
    );

    // Ladebalken aktualisieren
    document.getElementById("ladebalken").style.width =
        fortschritt + "%";

    // Prozentanzeige aktualisieren
    document.getElementById("prozent").textContent =
        Math.floor(fortschritt) + "%";

    // Stoppen bei 100 %
    if (Math.abs(position) >= maxPosition) {
        position = -maxPosition;
        return;
    }

    requestAnimationFrame(bewegen);
}

bewegen();



const player = document.getElementById("player");

let jumping = false;

function jump() {
    if (jumping) return;

    jumping = true;

    player.classList.remove("jump");

    // Animation neu starten
    void player.offsetWidth;

    player.classList.add("jump");
}

// Sobald die Animation beendet ist, wieder springen erlauben
player.addEventListener("animationend", () => {
    jumping = false;
    player.classList.remove("jump");
});

// Leertaste und Pfeil nach oben
document.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.code === "ArrowUp") {
        event.preventDefault();
        jump();
    }
});

// Linke Maustaste
document.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
        jump();
    }
});
