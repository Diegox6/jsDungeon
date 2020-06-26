function Badguy(x, y) {

  this.x = x;
  this.y = y;

  this.health = 5;
  this.maxHealth = 5;

  this.healthbar = {
    width: 40,
    height: 10,
    border: 2
  }

  this.show = function() {
    g.fillStyle = "#0FF";
    g.fillRect(this.x, this.y, 20, 20);

    if (dist(this.x, this.y, p.x, p.y) <= 200) {
      g.fillStyle = "#888";
      g.fillRect(this.x + 10 - this.healthbar.width/2 - this.healthbar.border,
        this.y - 5 - this.healthbar.height - this.healthbar.border,
        this.healthbar.width + this.healthbar.border*2,
        this.healthbar.height + this.healthbar.border*2);

      g.fillStyle = "#CCC";
      g.fillRect(this.x + 10 - this.healthbar.width/2,
        this.y - 5 - this.healthbar.height,
        this.healthbar.width,
        this.healthbar.height);

      g.fillStyle = "#0FF";
      g.fillRect(this.x + 10 - this.healthbar.width/2,
        this.y - 5 - this.healthbar.height,
        this.health / this.maxHealth * this.healthbar.width,
        this.healthbar.height);
    }
  }

  this.update = function() {
    var dx = p.x - this.x;
    var dy = p.y - this.y;
    var a = Math.atan2(dy, dx);
    this.x += Math.cos(a);
    this.y += Math.sin(a);
    if (this.health <= 0) handler.deleteEntity(this);
  }

}
