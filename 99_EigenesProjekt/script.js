let position = 0;
let geschwindigkeit = 3;

function bewegen() {
    position -= geschwindigkeit;

    document.getElementById("welt").style.left =
        position + "px";

    requestAnimationFrame(bewegen);
}

bewegen();