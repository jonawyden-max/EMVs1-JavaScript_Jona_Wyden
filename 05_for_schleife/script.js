for (let i = 0; i < 10; i++) {
    const h6 = document.createElement("h6");

    h6.textContent = "Durchlauf: " + (i + 1);

    document.body.appendChild(h6);
    
    console.log("Durchlauf:" + (i+1));
    
}