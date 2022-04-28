const data = {
  p1: 340,
  p2: 30,
  p3: 100
};

let img;

function preload() {
  img = loadImage('jfss.jpg');
}
function setup() {
  createCanvas(620, 620);
  background(50);
  image(img, 10, 10, 600, 600);
  frameRate(1);
}

function draw() {
  for (let value in data) {
    const x = data[value];
    const y = data[value];
    fill(255,0,0);
    circle(x, y, 10);
    console.log("Print "+ x +" circle");
  }
}