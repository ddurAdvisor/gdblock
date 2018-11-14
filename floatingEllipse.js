function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {
  let xx = random(width);
  let yy = random(height);
  let rr = random(10, 50);
  noStroke();
  fill(random(255), random(255), random(255));
  ellipse(xx, yy, rr, rr);
}
