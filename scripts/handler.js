function Handler() {
  this.entities = [];

  this.entitiesToCreate = [];
  this.entitiesToDelete = [];

  this.size = function() {return this.entities.length;}

  this.getEntityAt = function(i) {
    return this.entities[i];
  }

  this.createEntity = function(e) {
    this.entitiesToCreate.push(e);
  }

  this.deleteEntity = function(e) {
    this.entitiesToDelete.push(e);
  }

  this.show = function() {
    for (let i = 0; i < this.size(); i++) this.entities[i].show();
  }

  this.update = function() {
    for (let i = 0; i < this.entitiesToCreate.length; i++) this.entities.push(this.entitiesToCreate[i]);
    for (let i = 0; i < this.entitiesToDelete.length; i++) this.entities.splice(this.entities.indexOf(this.entitiesToCreate[i]), 1);

    this.entitiesToCreate = [];
    this.entitiesToDelete = [];

    for (let i = 0; i < this.size(); i++) this.entities[i].update();
  }

}
