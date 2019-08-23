var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "10px Arial";
ctx.textAlign = "center";

canvas.addEventListener("keyup", onKeyUp);
canvas.addEventListener("keydown", onKeyDown);
canvas.addEventListener("click", function (event) { console.log(event); });

function onKeyDown(event) {
    event.stopPropagation();
    event.preventDefault();
    return false;
}

function onKeyUp(event) {
    console.log(event);
    event.stopPropagation();
    event.preventDefault();
    switch (event.key) {
        case "Enter":
            // drawRectangle();
            return false;
        default:
            return false;
    }
}

// function drawRectangle() {
//     ctx.beginPath();
//     ctx.arc(x, y, 8, 0, .5 * Math.PI);
//     ctx.arc(x, y, 8, 0, .5 * Math.PI);
//     ctx.arc(x, y, 8, 0, .5 * Math.PI);
//     ctx.arc(x, y, 8, 0, .5 * Math.PI);
//     var gradient = ctx.createRadialGradient(x, y, 2, x, y, 8);
//     gradient.addColorStop(0, "white");
//     gradient.addColorStop(1, "black");
//     ctx.fillStyle = gradient;
//     ctx.fill();
// }

//todo: how to get line number from grep?
