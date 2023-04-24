function setup() {
    createCanvas(400, 400);
    noStroke();
  }
  
  function draw() {
    // Draw background color
    background(255, 224, 102);
    
    // Set the fill color to a random color
    fill(random(255), random(255), random(255));
    
    // Begin drawing the curved shape
    beginShape();
    
    // Set the initial curve vertex to the top left corner of the canvas
    curveVertex(0, 0);
    
    // Draw a random number of curves between 5 to 10
    let numCurves = round(random(5, 10));
    
    // Loop through each curve
    for (let i = 0; i < numCurves; i++) {
      // Set the next curve vertex to a random point within the canvas
      curveVertex(random(width), random(height));
    }
    
    // Set the final curve vertex to the top right corner of the canvas
    curveVertex(width, 0);
    
    // End the shape and fill it with the chosen color
    endShape(CLOSE);
  }
  