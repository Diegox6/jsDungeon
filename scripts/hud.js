function HUD(p) {

  this.p = p;

  this.healthbar = {
    width: 100,
    height: 20,
    border: 2
  }

  this.show = function() {
    g.fillStyle = "#CCC";
    g.fillRect(width - this.healthbar.width - this.healthbar.border*2 - 10,
      height - this.healthbar.height - this.healthbar.border*2 - 10,
      this.healthbar.width + this.healthbar.border*2,
      this.healthbar.height + this.healthbar.border*2);

    g.fillStyle = "#F00";
    g.fillRect(width - this.healthbar.width - this.healthbar.border - 10,
      height - this.healthbar.height - this.healthbar.border - 10,
      this.p.health / this.p.maxHealth * this.healthbar.width,
      this.healthbar.height);
  }

}
