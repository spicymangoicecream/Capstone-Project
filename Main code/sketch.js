// Touhou Replicated Game ( Major Project)
// Henry Vu
// 11.28.2024

let start = false;

let fadeAmount = 255;

let pattern = 0; // use to store pattern initialize number for the boss 
let bg;
let currentFrame = 0;

let eneposX, eneposY;

// Bullet Pos Varible
let bulletX = 0;
let bulletY = 0;

// Array holding Idle and Moving animation for Sakuya
let idleSakuya = [];
let attackSakuya = [];

function preload() {
  //Load Menu and battle stage background
  menu = loadImage("assets/menu/reimu-menu.jpg");
  bg = loadImage("assets/background/mansion-battle.gif");

  // Load Idle animation for Sakuya
  for (i = 1; i <= 6; i++) {
    idleSakuya[i-1] = loadImage("assets/sakuyaAnimation/Sakuya-Idle" + i + ".png");
  }

  // Load Attack Animation for Sakuya 
  for (i = 1; i <=7; i++) {
    attackSakuya[i-1] = loadImage("assets/sakuyaNormal/sakuyaAtk" + i + ".png");
  }

  // Load Custom Font
  normalFonts = loadFont("assets/fonts/Harukaze.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  eneposX = width + 80;
  eneposY = height*2/5;
}

function draw() {

  if (start === false) {
    background(menu);

    fill(255);
    textFont(normalFonts);
    textSize(150);
    text("Touhou Chamber of Phantasm", 30, height*0.2);
  }

  else{
    background(bg); 

    fadeAmount = fadeAmount - 3; // Fading Animation start of code
    tint(255,fadeAmount);
    
    background(menu);
    tint(255,255); // Fading Animation end of code

    SpawnSakuya();
  }
}

function mousePressed() {
  start = true;
}

class Bullet {
   constructor(x, y, colour) {
    this.x = x;
    this.y = y;
   }
}

function SpawnSakuya() {
  // Sakuya Idle Animation
  image(idleSakuya[currentFrame], eneposX, eneposY,80, 160);

  if (frameCount % 12 === 0) {
    currentFrame++;
  }
  
  if (currentFrame > 5) {
    currentFrame = 0;
  }

  // Sakuya Moving In
  if (start === true && eneposX > width*0.78) {
    eneposX = eneposX - 1.5;
  }

  // Random Sakuya moving pattern
  let choice = int(random(3)); // randomize moving

  if(choice === 0) { // stay still
    eneposX = eneposX;
    eneposY = eneposY;
  }

  if (choice === 1) { // moving up
    eneposY = eneposY - 0.5;
    eneposY = constrain(eneposY, height*0.35, height*0.4);
  }

  if (choice === 2) { // moving down
    eneposY = eneposY + 0.5;
    eneposY = constrain(eneposY, height*0.35, height*0.4);
  }
}

function AttackSakuya() {
  image(attackSakuya[currentFrame]);
}


// function Reimu() {

// }