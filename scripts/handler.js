var entities = [];

function createEntity(e) {
  entities.push(e);
}

function deleteEntity(e) {
  entities.splice(entities.indexOf(e), 1);
}

function showAllEntities() {
  for (let i = 0; i < entities.length; i++) entities[i].show();
}

function updateAllEntities() {
  for (let i = 0; i < entities.length; i++) entities[i].update();
}
