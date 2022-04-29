const data = {
	p1: [340,100], 
  p2: [30,100],
  p3: [100,100]
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
    const dictValue = data[value]
    const x = dictValue[0];
    const y =  dictValue[1];
    fill(255,0,0);
    circle(x, y, 10);
    console.log("Printed circle at ("+ x +","+y+")");
  }
  console.log("-")
}