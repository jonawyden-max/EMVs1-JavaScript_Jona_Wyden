function Raumschiff(name, modell) {
    this.name = name;
    this.modell = modell;
}

let enterprise = new Raumschiff("U.S.S. Enterprise", "NCC-1701");
let voyager = new Raumschiff("U.S.S. Voyager", "NCC-74656");


let p = document.createElement("p");
p.textContent = enterprise.name + ", Modell: " + enterprise.modell;
document.body.appendChild(p);

p = document.createElement("p");
p.textContent = enterprise.name + ", Modell: " + enterprise.modell;
document.body.appendChild(p);
