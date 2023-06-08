const counterEl = document.querySelector(".counter");

const barEl = document.querySelector(".loading-bar-front");

const h1El = document.querySelector("h1");

let idx = 0;

updateNum();

function updateNum() {
    counterEl.innerText = idx + "%";
    barEl.style.width = idx + "%";
    idx++;
    if (idx < 101) {
        setTimeout(updateNum, 60);
        barEl.style.background = "rgb(4, 131, 64)";
        if (idx > 60) {
            barEl.style.background = "rgb(131, 106, 4)";
        }
        if (idx > 93) {
            barEl.style.background = "red";
        }
    } else {
        barEl.style.background = "red";
        h1El.innerText = "Done!";
    }
}
