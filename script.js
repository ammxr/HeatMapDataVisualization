let img;
const data = {
	p1: [340,100], 
  p2: [30,100],
  p3: [100,100],
  p4: [350,100]
};

//  figure out range based off picture Wednesday add text label for school 

// For Resolution 600x400
const xRange = [20,580]
const yRange = [20,380]


function preload() {
  img = loadImage('jfss.jpg');
}
function setup() {
  createCanvas(620, 620);
  background(50);
  image(img, 10, 10, 600, 600);
  for (let value in data) {
    const dictValue = data[value]
    const x = dictValue[0];
    const y =  dictValue[1];
    fill(255,0,0,155);
    strokeWeight(5);
    stroke(255, 150, 200,90);
    circle(x, y, 10);
    console.log("Printed circle at ("+ x +","+y+")");
  }
  console.log("\n- - - - Task Complete - - - - ")
}




function draw() {
}
