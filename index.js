let hovers = [];

function countHovers (ev) {
    let idx = parseInt(ev.target.id);
    if (typeof(hovers[idx]) === "number") {
        hovers[idx]++;
    } else {
        hovers[idx] = 1;
    }
    console.log(`Entering ${idx} ${hovers[idx]} times`);
}

function showCounter () {
    console.log(hovers);
}

function main () {
    console.log("Starting...");

    const body = document.querySelector("body");
    const elements = Array.from(body.querySelectorAll("*"));

    for (let idx in elements) {
        elements[idx].id = idx;
        elements[idx].addEventListener("pointerenter",countHovers);
    }

    const button = document.createElement("button");
    button.innerText = "Show counter"
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.addEventListener("click",showCounter);
    body.appendChild(button);
}

window.addEventListener("load", main);