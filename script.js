const answer = prompt("Quantos blocos de desenho você quer?");

const randomizeRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const container = document.querySelector("#container");

for (let i = 0; i < answer; i++) {
    const corAtual = randomizeRGB();
    const div = document.createElement("div");
    div.classList.add("quadrado")

    div.addEventListener("mouseover", function(e) { // mouseover significa:avise quando o mouse entrar nesse elemento
        console.log("Tentando pintar com:", randomizeRGB());
        e.target.style.backgroundColor = corAtual;
    })

    container.appendChild(div);
}

