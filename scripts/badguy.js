function Badguy(x, y) {

  this.x = x;
  this.y = y;

  this.show = function() {
    g.fillStyle = "#0FF";
    g.fillRect(this.x, this.y, 20, 20);
  }

  this.update = function() {

  }

}
