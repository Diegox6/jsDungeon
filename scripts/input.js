// ## KEYBOARD INPUT ##

window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyReleased);

var keys = [];

function keyPressed(e) {
  if (!isKeyDown(e.keyCode)) keys.push(e.keyCode);
}

function keyReleased(e) {
  keys.splice(keys.indexOf(e.keyCode), 1);
}

function isKeyDown(k) {
  return keys.includes(k);
}

// ## MOUSE INPUT ##

window.addEventListener("mousemove", mouseMoved);
window.addEventListener("mousedown", mouseDown);
window.addEventListener("mouseup", mouseUp);

var mouse = {
  x : null,
  y : null,
  click : -1
}

function mouseMoved(e) {
  mouse.x = e.x - canvasX;
  mouse.y = e.y - canvasY;
}

function mouseDown(e) {
  mouse.click = e.button;
}

function mouseUp(e) {
  mouse.click = -1;
}
