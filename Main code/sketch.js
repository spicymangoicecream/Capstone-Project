// Touhou Replicated Game ( Major Project)
// Henry Vu
// 11.28.2024

let start = false;

let pattern = 0; // use to store pattern initialize number for the boss 
let bg;
let currentFrame = 0;


// Array holding Idle and Moving animation for Sakuya
let idleSakuya = [];
let movingSakuya = [];

function preload() {
  bg = loadImage("assets/background/mansion-battle.gif");
  for (i = 1; i <= 6; i++) {
    idleSakuya[i-1] = loadImage("assets/sakuyaAnimation/Sakuya-Idle" + i + ".png");

  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function SpawnSakuya() {
  // Sakuya Idle Animation and Moving Animation
  image(idleSakuya[currentFrame], width*3/4, height*2/5,80, 160);

  if (frameCount % 12 === 0) {
    currentFrame++;
  }
  
  if (currentFrame > 5) {
    currentFrame = 0;
  }

}

function draw() {
  background(bg);
  SpawnSakuya();
  

}

// function Reimu() {

// }