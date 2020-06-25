// ## KEYBOARD INPUT ##

window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyReleased);

var heldKeys = [];
var pressedKeys = [];

function keyPressed(e) {
  if (!isKeyHeld(e.keyCode)) {
    heldKeys.push(e.keyCode);
    pressedKeys.push(e.keyCode);
  }
}

function keyReleased(e) {
  heldKeys.splice(heldKeys.indexOf(e.keyCode), 1);
}

function isKeyHeld(k) {
  return heldKeys.includes(k);
}

function isKeyPressed(k) {
  return pressedKeys.includes(k);
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
