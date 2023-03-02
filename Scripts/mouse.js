let mousePositions = [];
const MAX_POS = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {

  clear();
  fill(57, 255, 20);
  noStroke();
  //how you're drawing your pose
  ellipse(mouseX, mouseY, 20, 20);
  
  //how you're storing the last 50 poses
  mousePositions.push({x: mouseX, y: mouseY});
  
  //removes poses that are older than 50
  if (mousePositions.length > MAX_POS) {
  	 mousePositions.shift();
  }
  for (let i = 0; i < mousePositions.length; i +=1) {
    // how you want to draw the previous poses
    // relate it to i to change pose drawing over time
  	ellipse(mousePositions[i].x, mousePositions[i].y, i/1.2, i/1.2);
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }