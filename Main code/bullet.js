// File for Bullet Code
let bullets = []; // make bullet pattern spinning
let patternType = 'radial';
let numsBullet;
let radialAngle = 0;

let patternElasp = 0;
let lastTimeChange = 0;
let IntTime = 15000;

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
    ellipse(this.x+ 10, this.y + 10, 10, 5);
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
  patternType = random(patterns);
  console.log("Changed Pattern to: " + patternType);
}

function ChangePattern() {
  let thisTime = millis();
  patternElasp = thisTime - lastTimeChange;

  if (patternElasp > IntTime) {
    pickRandomPattern();
    lastTimeChange = thisTime;
  }
}

function PatternSpiral() {
  if (frameCount % 1 === 0) { 
    this.speed = 5;
    bullets.push(new Bullet(eneposX + 25, eneposY + 25, this.speed, frameCount % TWO_PI * 2));
  }
}

function PatternRadial() {
  if (frameCount % 20 === 0) {
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

function PatternWave() {
  if (frameCount % 10 === 0) {
    this.speed = 3;
    let numsBullet = 20;
  

    for (let i = 0; i < numsBullet; i++) {
      this.angle = sin(frameCount * 0.1) * 2 + (TWO_PI/numsBullet) * i;
      bullets.push(new Bullet(eneposX + 25, eneposY + 25, this.speed, this.angle));
    }
  }
}

function updateBullet() {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].update();
    bullets[i].display();
    if (bullets[i].offScreen()) {
      bullets.splice(i,1);
    }
  }
}