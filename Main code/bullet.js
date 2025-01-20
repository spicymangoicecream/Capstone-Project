// File for Bullet Code
let bullets = []; // make bullet pattern spinning
let patternType = 'radial';
let numBullet = 30;

class Bullet {
  constructor(x, y, speed, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.speed = speed;
    //   this.xSpeed = cos(this.angleOffset) * 10;
    //   this.ySpeed = sin(this.angleOffset) * 10;
    this.angleOffset = this.angleOffset;
  }

  update() {
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;
  }

  display() {
    fill(77, 77, 255);
    ellipse(this.x + 10, this.y + 10, 10, 5);
  }

  offScreen() {
    if (this.x < 0 || this.y < 0 || this.x > width || this.y > height) {
      return true;
    }
    else {
      return false;
    }
  }
}

function pickRandomPattern() {
  let patterns = ['spiral', 'radial', 'wave'];
  if (patterns === spiral) {
    PatternSpiral();
  }
}

function PatternSpiral() {
  if (frameCount % 5 === 0) {
    this.speed = 1;
    this.angleOffset = 0.03;
    this.angle = this.angle - this.angleOffset;
    bullets.push(new Bullet(eneposX + 25, eneposY + 25, this.speed, frameCount % TWO_PI * 2));
    // bullets.push(new Bullet (eneposX+25, eneposY+25,));
  }
}