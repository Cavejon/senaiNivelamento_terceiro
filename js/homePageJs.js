const title = document.getElementById("animated-title");
const text = title.innerText;
title.innerText = "";


text.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.innerText = letter;
    span.classList.add("letter");
    span.style.animationDelay = `${index * 0.1}s`;
    title.appendChild(span);
});

