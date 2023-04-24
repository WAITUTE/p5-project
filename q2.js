const comedyCount = 4;
const actionCount = 5;
const romanceCount = 6;
const dramaCount = 1;
const sciFiCount = 4;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  const totalCount = comedyCount + actionCount + romanceCount + dramaCount + sciFiCount;

  const colors = [color('red'), color('green'), color('blue'), color('orange'), color('purple')];
  const labels = ['Drama', 'Comedy', 'Action', 'Romance', 'Sci-Fi'];
  const counts = [dramaCount, comedyCount, actionCount, romanceCount, sciFiCount];
  
  angleMode(DEGREES);
  
  let angle = 0;
  
  for (let i = 0; i < counts.length; i++) {
    const percentage = (counts[i] / totalCount) * 100;
    

    fill(colors[i]);
    stroke(255);
    strokeWeight(1);
    
   
    const startAngle = angle;
    const endAngle = angle + (percentage / 100) * 360;

    arc(width / 2, height / 2, 200, 200, startAngle, endAngle, PIE);

    angle = endAngle;

    const label = labels[i];
    const percentageText = nf(percentage, 0, 1) + '%';
    const labelX = cos((startAngle + endAngle) / 2) * 100 + width / 2;
    const labelY = sin((startAngle + endAngle) / 2) * 100 + height / 2;
    textSize(12);
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    text(label + ': ' + percentageText, labelX, labelY);
  }
}
