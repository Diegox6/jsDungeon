// ## PLAYER OBJECT ##

function Player(x, y) {

  this.x = x;
  this.y = y;

  this.speed = 3;

  this.show = function() {
    g.fillStyle = "#F00";
    g.fillRect(this.x, this.y, 10, 10);
  }

  this.update = function() {
    if (isKeyDown(68)) this.x += this.speed;
    if (isKeyDown(65)) this.x -= this.speed;

    if (isKeyDown(83)) this.y += this.speed;
    if (isKeyDown(87)) this.y -= this.speed;
  }

}
