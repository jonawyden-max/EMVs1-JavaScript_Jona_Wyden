
function addieren(a, b) {
    const h3 = document.createElement("h3");

    h3.textContent = "Die Summe von " + a + " + " + b + " = " + (a + b) + ".";

    document.body.appendChild(h3);
}

addieren(5, 3);
addieren(7, 10);
addieren(3, 4);