let ball;


function setup() {
  createCanvas(400, 400); 
  // ball = new Walker();
  // Walker.update();
  
  ball = Walker.randomSize();
  
}


function draw() {
  background(220, 5);
  ball.update();
  ball.passEdges();
  ball.display();

}

function mouseClicked() {
  ball.jump(2);
}

function mouseDoubleClicked() {
  ball.jump(8);
}




