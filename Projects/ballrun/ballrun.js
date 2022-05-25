var ball = document.querySelector("#ball");
var left = 0;
var top_2 = 0;

function move() {
left = left + 50;
  ball.style.left = left + "px";
top_2 = top_2 + 50;
  ball.style.top = top_2 + "px";
}
