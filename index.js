// Your code here
const dodger = document.getElementById("dodger");

//moveDodgerLeft function
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

// A function TO move dodger to the right
function moveDodgerRight() {
    const rightNumber = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumber, 10);

    if (left <= 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

//  keydown event handler to handle doger direction change
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }

    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});