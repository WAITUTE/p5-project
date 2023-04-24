function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(220);
  
    // Calculate part size
    const partSize = width / 6;
  
    // First part: red with blue horizontal lines and yellow vertical lines in a circle
    fill('red');
    rect(0, 0, partSize, partSize);
    drawCircleInCenter(partSize, partSize, partSize * 0.8, 'yellow', 'blue');
  
    // Second part: yellow with red horizontal lines and blue vertical lines in a square
    fill('yellow');
    rect(partSize, 0, partSize, partSize);
    drawSquareInCenter(partSize * 2, partSize, partSize * 0.8, 'blue', 'red');
  
    // Third part: blue with yellow horizontal lines and red vertical lines in a triangle
    fill('blue');
    rect(partSize * 2, 0, partSize, partSize);
    drawTriangleInCenter(partSize * 3, partSize, partSize * 0.8, 'red', 'yellow');
  
    // Fourth part: red with yellow horizontal lines and blue vertical lines in a rectangle
    fill('red');
    rect(partSize * 3, 0, partSize, partSize);
    drawRectangleInCenter(partSize * 4, partSize, partSize * 0.8, 'blue', 'yellow');
  
    // Fifth part: yellow with blue horizontal lines and red vertical lines in a trapezoid
    fill('yellow');
    rect(partSize * 4, 0, partSize, partSize);
    drawTrapezoidInCenter(partSize * 5, partSize, partSize * 0.8, 'red', 'blue');
  
    // Sixth part: blue with red horizontal lines and yellow vertical lines in a parallelogram
    fill('blue');
    rect(partSize * 5, 0, partSize, partSize);
    drawParallelogramInCenter(width - partSize / 2, partSize, partSize * 0.8, 'yellow', 'red');
  }
  
  function drawCircleInCenter(x, y, diameter, color1, color2) {
    fill(color1);
    ellipse(x, y, diameter);
  
    const numLines = 10;
    stroke(color2);
    strokeWeight(4);
    noFill();
    for (let i = 0; i < numLines; i++) {
      const angle = map(i, 0, numLines, 0, TWO_PI);
      const x1 = x + cos(angle) * diameter / 2;
      const y1 = y + sin(angle) * diameter / 2;
      const x2 = x + cos(angle + PI) * diameter / 2;
      const y2 = y + sin(angle + PI) * diameter / 2;
      line(x1, y1, x2, y2);
    }
  }
  
  function drawSquareInCenter(x, y, size, color1, color2) {
    fill(color1);
    rect(x - size / 2, y - size / 2, size, size);
  
    const numLines = 10;
    stroke(color2);
    strokeWeight(4);
    noFill();
    for (let i = 0; i < numLines; i++) {
      const x1 = x - size / 2;
      const y1 = map(i, 0, numLines, y - size / 2, y + size/2);
      const x2 = x + size / 2;
      const y2 = map(i, 0, numLines, y - size / 2, y + size / 2);
      line(x1, y1, x2, y2);
      }
      }
      
      function drawTriangleInCenter(x, y, size, color1, color2) {
      fill(color1);
      triangle(x, y - size / 2, x + size / 2, y + size / 2, x - size / 2, y + size / 2);
      
      const numLines = 10;
      stroke(color2);
      strokeWeight(4);
      noFill();
      for (let i = 0; i < numLines; i++) {
      const x1 = map(i, 0, numLines, x - size / 2, x + size / 2);
      const y1 = y + size / 2;
      const x2 = x;
      const y2 = y - size / 2;
      line(x1, y1, x2, y2);
      }
      }
      
      function drawRectangleInCenter(x, y, width, color1, color2) {
      fill(color1);
      rect(x - width / 2, y - width / 4, width, width / 2);
      
      const numLines = 10;
      stroke(color2);
      strokeWeight(4);
      noFill();
      for (let i = 0; i < numLines; i++) {
      const x1 = map(i, 0, numLines, x - width / 2, x + width / 2);
      const y1 = y - width / 4;
      const x2 = x1;
      const y2 = y + width / 4;
      line(x1, y1, x2, y2);
      }
      }
      
      function drawTrapezoidInCenter(x, y, width, color1, color2) {
      fill(color1);
      beginShape();
      curveVertex(x - width / 2, y - width / 4);
      curveVertex(x - width / 2, y - width / 4);
      curveVertex(x - width / 4, y + width / 4);
      curveVertex(x + width / 4, y + width / 4);
      curveVertex(x + width / 2, y - width / 4);
      curveVertex(x + width / 2, y - width / 4);
      endShape();
      
      const numLines = 10;
      stroke(color2);
      strokeWeight(4);
      noFill();
      beginShape();
      for (let i = 0; i < numLines; i++) {
      const x1 = map(i, 0, numLines, x - width / 2, x + width / 2);
      const y1 = map(noise(i * 0.1), 0, 1, y - width / 4, y + width / 4);
      curveVertex(x1, y1);
      }
      endShape();
      }
      
      function drawParallelogramInCenter(x, y, width, color1, color2) {
      fill(color1);
      beginShape();
      vertex(x - width / 2, y - width / 4);
      vertex(x + width / 2, y - width / 4);
      vertex(x + width / 4, y + width / 4);
      vertex(x - width / 4, y + width / 4);
      endShape(CLOSE);}

      function drawTrapezoidInCenter(x, y, base, top, height, color1, color2) {
        fill(color1);
        beginShape();
        vertex(x - base / 2, y + height / 2);
        vertex(x + base / 2, y + height / 2);
        vertex(x + top / 2, y - height / 2);
        vertex(x - top / 2, y - height / 2);
        endShape(CLOSE);
        
        const numLines = 10;
        stroke(color2);
        strokeWeight(4);
        noFill();
        for (let i = 0; i < numLines; i++) {
        const x1 = map(i, 0, numLines, x - base / 2, x + base / 2);
        const y1 = map(i, 0, numLines, y + height / 2, y - height / 2);
        const x2 = map(i, 0, numLines, x - top / 2, x + top / 2);
        const y2 = map(i, 0, numLines, y - height / 2, y - height / 2);
        line(x1, y1, x2, y2);
        }
        }
        
        function drawParallelogramInCenter(x, y, base, height, color1, color2) {
        fill(color1);
        beginShape();
        vertex(x - base / 4, y + height / 2);
        vertex(x + base / 4, y + height / 2);
        vertex(x + base / 2, y - height / 2);
        vertex(x - base / 2, y - height / 2);
        endShape(CLOSE);
        
        const numLines = 10;
        stroke(color2);
        strokeWeight(4);
        noFill();
        for (let i = 0; i < numLines; i++) {
        const x1 = map(i, 0, numLines, x - base / 2, x + base / 2);
        const y1 = map(i, 0, numLines, y + height / 2, y - height / 2);
        const x2 = x1 + base / 4;
        const y2 = y1 + height / 2;
        line(x1, y1, x2, y2);
        }
        }
        
        
        
        