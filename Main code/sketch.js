// Touhou Replicated Game ( Major Project)
// Henry Vu
// 11.28.2024

let start = false;

let pattern = 0; // use to store pattern initialize number for the boss 
let bg;
let currentFrame = 0;

let eneposX, eneposY;

// Array holding Idle and Moving animation for Sakuya
let idleSakuya = [];
let attackSakuya = [];

function preload() {
  bg = loadImage("assets/background/mansion-battle.gif");
  for (i = 1; i <= 6; i++) {
    idleSakuya[i-1] = loadImage("assets/sakuyaAnimation/Sakuya-Idle" + i + ".png");
  }

  // Load Attack Animation 
  for (i = 1; i <=7; i++) {
    attackSakuya[i-1] = loadImage("assets/sakuyaNormal/sakuyaAtk" + i + ".png");
  }
}

function setup() {
  createCanvas(windowWidth, 1000);
  eneposX = width*3/4;
  eneposY = height*2/5;
}

// class Bullet {
//   constructor(x, y)
// }

function SpawnSakuya() {
  // Sakuya Idle Animation
  image(idleSakuya[currentFrame], eneposX, eneposY,80, 160);

  if (frameCount % 12 === 0) {
    currentFrame++;
  }
  
  if (currentFrame > 5) {
    currentFrame = 0;
  }

  // Random Sakuya moving pattern
  let choice = int(random(3)); // randomize moving

  if(choice === 0) { // stay still
    eneposX = eneposX;
    eneposY = eneposY;
  }

  if (choice === 1) { // moving up
    eneposY = eneposY - 0.5;
    eneposY = constrain(eneposY, height*0.3, height*0.4);
  }

  if (choice === 2) { // moving down
    eneposY = eneposY + 0.5;
    eneposY = constrain(eneposY, height*0.3, height*0.4);
  }
}

function AttackSakuya() {
  image(attackSakuya[currentFrame]);
}

function draw() {
  background(bg);
  SpawnSakuya();
  

}

// function Reimu() {

// }