let img;

const data = {
	p1: [340,100], 
  p2: [30,100],
  p3: [100,100],
  p4: [350,100]
};

const pasteRange = {
  stress: [[20,100],[20,100]],
  depression: [[10,100],[200,400]]
};

function setup() {
  createCanvas(2000, 2000);
  rect(10, 10, 1980, 1980, 20, 20, 20, 20);

  

  /* Category Assignment */
  for (let value in data) {
    const dictValue = data[value]
    const pasteRangeXStress = pasteRange['stress']
    const pasteRangeYStress = pasteRange['stress']
    
    /* Range of possible X-values for data point */
    let rangeX = {
      min: pasteRangeXStress[0][0], 
      max: pasteRangeXStress[0][1]
    }
    
    /* Random X-coordinate within range */
    let deltaX = rangeX.max - rangeX.min 
    const stressRandX = Math.round(rangeX.min + Math.random() * deltaX)

    /* Range of possible Y-values for data point */
    let rangeY = {
      min: pasteRangeYStress[1][0], 
      max: pasteRangeYStress[1][1]
    }

    /* Random Y-coordinate within range */
    let deltaY = rangeY.max - rangeY.min 
    const stressRandY = Math.round(rangeY.min + Math.random() * deltaY)

    /* Point Coordinate */
    let x = stressRandX;
    let y =  stressRandY;

    /* Point */
    blendMode(MULTIPLY);
    fill(255,0,0,155);
    strokeWeight(5);
    stroke(255, 150, 200,90);
    circle(x, y, 10);
    console.log("Printed circle at ("+ x +","+y+")");
  }
  console.log("\n- - - - Task Complete - - - - ")
}

