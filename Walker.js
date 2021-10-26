
// new way to define Object
class Walker {
  //setup values
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = p5.Vector.random2D();
    this.vel.mult(4);
    this.acc = createVector(-0.01, 0.1);
    this.r = 5;
    this.w = this.r * 2;
  }
  
  static randomSize() {
    let walker = new this();
    walker.w = random(0, 20);
    return walker;
  }
  
  update() {
    //update position
    // this.vel = p5.Vector.random2D();
    // this.vel.mult(4);
    // this.vel.add(this.acc);
    
    // this.vel = createVector(random(-5, 5), random(-5, 5));
    // this.vel.normalize();
    
    this.pos.add(this.vel);
  }
  
  passEdges() {
    if (this.pos.x > width || this.pos.x < 0)
      this.pos.x = width - this.pos.x;
    if (this.pos.y > height || this.pos.y < 0)
      this.pos.y = height - this.pos.y;
  }
  
  jump(stepValue) {
    let step = p5.Vector.random2D();
    step.mult(stepValue);
    this.vel.add(step)
  }
  
  elli(aPosVector, aSize) {
    ellipse(aPosVector.x, aPosVector.y, aSize);
  }
  
  display() {
    //display walker
	// ellipse(this.pos.x, this.pos.y, this.w);
    this.elli(this.pos, this.w);
  }
}