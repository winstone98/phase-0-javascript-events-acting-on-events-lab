// Your code here
const dodger = document.getElementById("dodger");

// This function moves the dodger left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// This function moves the dodger right
function moveDodgerRight() {
    const leftNum = dodger.style.left.replace("px", "");
    const left = parseInt(leftNum, 10);

    if (left <= 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

// Adds the eventlistener for the keydown events to the DOM
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }

    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});