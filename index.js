var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.font = "10px Arial";
ctx.textAlign = "center";

canvas.addEventListener("keyup", onKeyUp);
canvas.addEventListener("click", function (event) { console.log(event); });

function onKeyUp(event) {
    console.log(event);
}
