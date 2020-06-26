function dist(ax, ay, bx, by) {
  return Math.sqrt((bx-ax)*(bx-ax) + (by-ay)*(by-ay));
}

function intersect(ax, ay, aw, ah, bx, by, bw, bh) {
  var val = true;

  if (ax >= bx + bw || bx >= ax + aw) val = false;
  if (ay >= by + bh || by >= ay + ah) val = false;

  return val;
}
