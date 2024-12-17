// Touhou Replicated Game ( Major Project)
// Henry Vu
// 11.28.2024

let start = false;

let fadeAmount = 255;

let pattern = 0; // use to store pattern initialize number for the boss 
let bg;
let currentFrame = 0;

let currentFrame2 = 0;

let eneposX, eneposY;

let userposX, userposY;

// Bullet Pos Varible
let bulletX = 0;
let bulletY = 0;

// Array holding Idle and Moving animation for Sakuya
let idleSakuya = [];
let attackSakuya = [];

//Array holding Reimu Animation 
let idleReimu = [];

//----------------------------------------------------------------------------------------------------------

function preload() {
  //Load Menu and battle stage background
  menu = loadImage("assets/menu/reimu-menu.jpg");
  bg = loadImage("assets/background/mansion-battle.gif");
  music = loadSound("assets/battletheme/Night of Nights.mp3");

  // Load Idle animation for Sakuya
  for (let i = 1; i <= 6; i++) {
    idleSakuya[i-1] = loadImage("assets/sakuyaAnimation/Sakuya-Idle" + i + ".png");
  }

  // Load Attack Animation for Sakuya 
  for (let i = 1; i <=7; i++) {
    attackSakuya[i-1] = loadImage("assets/sakuyaNormal/sakuyaAtk" + i + ".png");
  }

  // Load Custom Font
  normalFonts = loadFont("assets/fonts/Harukaze.ttf");

  //----------------------

  //Reimu Idle Animation 
  for (let i = 1; i <=11; i++) {
    idleReimu[i-1] = loadImage("assets/reimuAnimation/reimu-idle" + i + ".png");
  }
}

//-----------------------------------------------------------------------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight); 
  eneposX = width + 80;
  eneposY = height*2/5;

  userposX = 0 - 80;
  userposY = height*2/5;
}

//-----------------------------------------------------------------------------------------------------------

function draw() {

  if (start === false) {
    background(menu);

    // Tilte Screen
    let txtsize = 150;
    fill(255);
    textFont(normalFonts);
    textSize(150);
    text("Touhou Chamber of Phantasm", 600, height*0.2);


    // Start Menu 
    if (mouseX > width*0.37 && mouseX < width*0.63 && mouseY > height*0.6 && mouseY < height*0.8) {
      txtsize = txtsize + 20;
    }
    textAlign(CENTER);
    textSize(txtsize);
    text("Start", width/2, height*3/4);
    

  }

  else{
    background(bg); 

    fadeAmount = fadeAmount - 3; // Fading Animation start of code
    tint(255,fadeAmount);
    
    background(menu);
    tint(255,255); // Fading Animation end of code

    // ReimuIdle();
    
    SpawnSakuya();
    
  }
}

//----------------------------------------------------------------------------------------------------------

function mousePressed() {
  if (mouseX > width*0.37 && mouseX < width*0.63 && mouseY > height*0.6 && mouseY < height*0.8) {
    start = true;
  }

  if(start === true) {
    music.setVolume(0.1);
    music.loop();
  }
}

//----------------------------------------------------------------------------------------------------------

class Bullet {
  constructor(x, y, colour) {
    this.x = x;
    this.y = y;
  }
}

//---------------------------------------------------------------------------------------------------------

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

//----------------------------------------------------------------------------------------------------------

function ReimuIdle() {
  image(idleReimu[currentFrame2], userposX, userposY, 80, 160);

  if (currentFrame2 % 12) {
    currentFrame2++;
  }

  if (currentFrame2 > 10) {
    currentFrame2 = 0;
  }
}