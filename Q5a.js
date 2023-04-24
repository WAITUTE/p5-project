function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    // first part
    fill('red');
    rect(0, 0, 200, 200);
    drawHorizontalLines(0, 0, 200, 200, 'blue', 10);
    fill('yellow');
    ellipse(100, 100, 120, 120);
    drawVerticalLines(60, 0, 80, 200, 'yellow', 10);
    
    // second part
    fill('yellow');
    rect(200, 0, 200, 200);
    drawHorizontalLines(200, 0, 400, 200, 'red', 10);
    fill('blue');
    rect(240, 40, 120, 120);
    drawVerticalLines(280, 0, 40, 200, 'blue', 10);
    
    // third part
    fill('blue');
    rect(400, 0, 200, 200);
    drawHorizontalLines(400, 0, 600, 200, 'yellow', 10);
    fill('red');
    triangle(500, 100, 450, 150, 550, 150);
    drawVerticalLines(500, 0, 200, 200, 'red', 10);
    
    // fourth part
    fill('red');
    rect(0, 200, 200, 200);
    drawHorizontalLines(0, 200, 200, 400, 'yellow', 10);
    fill('blue');
    rect(40, 240, 120, 80);
    drawVerticalLines(80, 200, 80, 200, 'blue', 10);
    
    // fifth part
    fill('yellow');
    rect(200, 200, 200, 200);
    drawHorizontalLines(200, 200, 400, 400, 'blue', 10);
    fill('red');
    beginShape();
    vertex(240, 240);
    vertex(360, 240);
    vertex(320, 320);
    vertex(280, 320);
    endShape(CLOSE);
    drawVerticalLines(320, 200, 80, 200, 'red', 10);
    
    // sixth part
    fill('blue');
    rect(400, 200, 200, 200);
    drawHorizontalLines(400, 200, 600, 400, 'red', 10);
    fill('yellow');
    beginShape();
    vertex(500, 220);
    vertex(560, 220);
    vertex(480, 380);
    vertex(420, 380);
    endShape(CLOSE);
    drawVerticalLines(480, 200, 180, 200, 'yellow', 10);
  }
  
  function drawHorizontalLines(x1, y1, x2, y2, color, gap) {
    stroke(color);
    strokeWeight(2);
    for (let y = y1 + gap; y < y2; y += gap * 2) {
      line(x1, y, x2, y);
    }
  }
  
  function drawVerticalLines(x1, y1, y2, y3, color, gap) {
    stroke(color);
    strokeWeight(2);
    for (let x = x1 + gap; x < x1 + (y3 - y1); x += gap * 2) {
      line(x, y1, x, y3);
    }
  }
  
  