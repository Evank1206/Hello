let la  = document.querySelector("p").addEventListener("click", () => {
    document.querySelector("p").style.display = "none";
    let lal = document.createElement("h4");
    // lal.setAttribute("id", "h3");
    let lala = document.createTextNode("HELLO!");
    lal.appendChild(lala)
    document.getElementById("box4").appendChild(lal)
    document.getElementById("box4").style.backgroundColor = "white"
    document.getElementById("box4").style.boxShadow = "10px 10px 10px green";
    document.getElementById("box3").style.backgroundColor = "orange"
})
