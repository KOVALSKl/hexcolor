
let btn = document.getElementById("change-color");
let body = document.getElementById("wrapper");
let span = document.getElementById("colorCode");

btn.addEventListener("click", () => {
    span.innerHTML = `linear-gradient(${getRandomDegrees()}, ${getRandomColor()}, ${getRandomColor()})`;
    body.style.background = span.innerHTML;
});

function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function getRandomDegrees() {
    let rand = Math.round(-0.5 + Math.random() * 181);
    return ((rand % 2 == 0) ? rand : -rand).toString() + "deg";
}