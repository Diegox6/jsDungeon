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

var handler = new Handler();
handler.createEntity(new Badguy(500, 100));

var hud = new HUD(p);

// ## UPDATE AND RENDER

function update() {
  render();

  p.update();
  handler.update();

  pressedKeys = [];
}

function render() {
  background("#000");
  p.show();

  handler.show();
  hud.show();

  g.fillStyle = "#CCC"
  g.font = "10px Consolas";
  g.fillText("HeldKeys: " + (heldKeys.length > 0 ? heldKeys : "none"), 5, 10);
  g.fillText("MouseClick: " + (mouse.click != -1 ? mouse.click : "none"), 5, 20);
  g.fillText("Direction: " + p.dir, 5, 30);
}

// ## BACKGROUND METHOD ##

function background(c) {
  this.g.fillStyle = c;
  this.g.fillRect(0, 0, this.width, this.height);
}
