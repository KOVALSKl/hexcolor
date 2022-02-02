
let btn = document.getElementById("change-color");
let body = document.getElementById("wrapper");
let span = document.getElementById("colorCode");

btn.addEventListener("click", () => {
    span.innerHTML = `linear-gradient(-60deg, ${getRandomColor()}, ${getRandomColor()})`;
    body.style.background = span.innerHTML;
});

function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}
