// ## PLAYER OBJECT ##

function Player(x, y) {

  this.x = x;
  this.y = y;

  this.speed = 3;
  this.health = 20;
  this.maxHealth = 20;

  this.dir = 0;
  this.moving = false;

  this.show = function() {
    g.fillStyle = "#F00";
    g.fillRect(this.x, this.y, 20, 20);
  }

  this.update = function() {
    if (directionKeyHeld(0) && !this.moving) {
      this.dir = 0;
    } else if (directionKeyHeld(1) && !this.moving) {
      this.dir = 1;
    } else if (directionKeyHeld(2) && !this.moving) {
      this.dir = 2;
    } else if (directionKeyHeld(3) && !this.moving) {
      this.dir = 3;
    }

    this.moving = directionKeyHeld(this.dir);

    if (this.dir == 0 && this.moving) this.y -= this.speed;
    if (this.dir == 1 && this.moving) this.x += this.speed;
    if (this.dir == 2 && this.moving) this.y += this.speed;
    if (this.dir == 3 && this.moving) this.x -= this.speed;

    if (isKeyPressed(32)) console.log("attack");
  }

}

function directionKeyHeld(dir) {
  switch (dir) {
    case 0:
      return isKeyHeld(38);
      break;
    case 1:
      return isKeyHeld(39);
      break;
    case 2:
      return isKeyHeld(40);
      break;
    case 3:
      return isKeyHeld(37);
      break;
  }
  return 0;
}

function anyDirectionKeyHeld() {
  var val = false;
  for (var i = 0; i < 4; i++) if (directionKeyHeld(i%4)) val = true;
  return val;
}
