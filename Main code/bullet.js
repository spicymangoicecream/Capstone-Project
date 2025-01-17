// File for Bullet Code
let bullets = [];
let angleOffset = 0; // make bullet pattern spinning
let patternType = 'radial';
let numBullet = 30;

class Bullet {
  constructor(x,y,xSpeed,ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  update() {
    // this.x += cos(this.angle) * this.speed;
    // this.y += sin(this.angle) * this.speed;
    this.x += this.xSpeed; this.y += this.ySpeed;
  }

  display() {
    fill(0,0,255);
    ellipse(this.x, this.y, 5, 10);
  }

  offScreen() {

  }
  
}

function pickRandomPattern() {
  let patterns = ['spiral', 'radial', 'wave'];
}

function PatternSpiral() {
  if (frameCount % 5 === 0) {
    let xSpeed = cos(angleOffset) * 10;
    let ySpeed = sin(angleOffset) * 10;
    bullets.push(new Bullet (eneposX+25, eneposY+25,xSpeed,ySpeed));
    // bullets.push(new Bullet (eneposX+25, eneposY+25,xSpeed,ySpeed));
    angleOffset -= 3;
  }
}