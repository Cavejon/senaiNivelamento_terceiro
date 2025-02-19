// Seleciona o título
const title = document.getElementById("animated-title");
const text = title.innerText;
title.innerText = ""; // Limpa o título original

// Divide cada letra em um <span>
text.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.innerText = letter;
    span.classList.add("letter");
    span.style.animationDelay = `${index * 0.1}s`; // Adiciona atraso progressivo
    title.appendChild(span);
});

