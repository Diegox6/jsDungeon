// ## INIT GAME ##

var canvas = document.getElementById("frame");

canvas.width = 1000;
canvas.height = canvas.width/8*5;

var width = canvas.width;
var height = canvas.height;

var canvasX = canvas.getBoundingClientRect().left;
var canvasY = canvas.getBoundingClientRect().top;
window.addEventListener("resize", function(e) {
  canvasX = canvas.getBoundingClientRect().left;
  canvasY = canvas.getBoundingClientRect().top;
});

var g = this.canvas.getContext("2d");
var interval = setInterval(update, 20);

var p = new Player(100, 100);

// ## UPDATE AND RENDER

function update() {
  p.update();

  render();
}

function render() {
  background("#CCC");
  p.show();

  g.strokeStyle = "#F00";

  g.beginPath();
  g.moveTo(p.x, p.y);
  g.lineTo(mouse.x, mouse.y);
  g.stroke();

  g.fillStyle = "#444"
  g.font = "10px Consolas";
  g.fillText("KeyPressed: " + (keys.length > 0 ? keys : "none"), 5, 10);
  g.fillText("MouseClick: " + (mouse.click != -1 ? mouse.click : "none"), 5, 20);
}

// ## BACKGROUND METHOD ##

function background(c) {
  this.g.fillStyle = c;
  this.g.fillRect(0, 0, this.width, this.height);
}
