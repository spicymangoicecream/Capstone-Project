// File for Bullet Code
let bullets = []; // make bullet pattern spinning
let patternType = 'radial';
let numsBullet;
let radialAngle = 0;

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
    fill(255);
    ellipse(this.x, this.y, 10, 5);
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
    this.speed = 2;
    this.angle = frameCount % TWO_PI*2;
    bullets.push(new Bullet(eneposX + 25, eneposY + 25, this.speed, this.angle));
  }
}

function PatternRadial() {
  if (frameCount % 10 === 0) {
    this.speed = 3;
    let numsBullet = 20;

    for(let i = 0; i < numsBullet; i++) {
      this.angle = (TWO_PI/numsBullet) * i;
      this.x += 0.03;
      this.y += 0.03;
      bullets.push(new Bullet(eneposX + 25, eneposY + 25, this.speed, this.angle));
    }
  }
}