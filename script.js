const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("quadrado")

    div.addEventListener("mouseover", function(e) { // mouseover significa:avise quando o mouse entrar nesse elemento
        e.target.style.backgroundColor = "black";
    })

    container.appendChild(div);
}