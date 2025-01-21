// Touhou Replicated Game ( Major Project)
// Henry Vu
// 11.28.2024

let start = false; // store to tell the programs to start menu 
let intro = false;

let changeTime = 10;

let msplayed = false;

let fadeAmount = 255;

let bg;

let elasp;

let currentFrame = 0;
let currentFrame2 = 0;

let healthBar = 3;

let time = 120;
let currentTime;
let timeLeft;

// Core Flying and pos variable for enemy 
let eneposX, eneposY;
let eoffsetX, eoffsetY;

// Core Flying movement and pos variable for user 
let userposX, userposY;
let uoffsetX, uoffsetY;

// Bullet Pos Varible
let bulletX = 0;
let bulletY = 0;

// Array holding Idle and Moving animation for Sakuya
let idleSakuya = [];
let attackSakuya = [];

//Array holding Reimu Animation 
let idleReimu = [];

// create UI to display player health and times
let ui_y;
let ui_x;

// 

//PRELOAD----------------------------------------------------------------------------------------------------------

function preload() {
  //Load Menu and battle stage background
  menu = loadImage("assets/menu/reimu-menu.jpg");
  bg = loadImage("assets/background/mansion-battle.gif");
  music = loadSound("assets/battletheme/Night of Nights.mp3");
  sfx = loadSound("assets/sfx/button-pressed-38129.mp3");
  swipeSound = loadSound("assets/sfx/swipe-236674.mp3");

  //Bullet Image
  

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

//SET UP-----------------------------------------------------------------------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight); 
  pickRandomPattern();
  eneposX = width + 80;
  eneposY = height*2/5;

  userposX = 0 - 80;
  userposY = height*2/5;

  ui_x = width*0;
  ui_y = height*0.9;
}

//ALL FUNCTION-----------------------------------------------------------------------------------------------------------

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

    ReimuIdle();

    userInput();

    Counter();

    SpawnSakuya();

    if (intro === false && timeLeft <= 117) {
      ChangePattern();
      if (patternType === 'spiral') {
        PatternSpiral();
      }

      if (patternType === 'radial') {
        PatternRadial();
      }

      if (patternType === 'wave') {
        PatternWave();
      }
      updateBullet();
    } 
  }
}

//Input Start Menu----------------------------------------------------------------------------------------------------------

function mousePressed() {
  if (mouseX > width*0.37 && mouseX < width*0.63 && mouseY > height*0.6 && mouseY < height*0.8) {
    if (start === false) {
      sfx.play();
    }

    start = true;
    intro = true;
    
    if(start === true && msplayed === false) {
      music.setVolume(0.5); msplayed = true;
      music.loop();
    }
  }
}

//Time Counter----------------------------------------------------------------------------------------------------------

function Counter() {
  elasp = int((millis() - currentTime)/1000);
  timeLeft = time - elasp;
  console.log(timeLeft);
}

//Sakuya Function---------------------------------------------------------------------------------------------------------

function SpawnSakuya() {
  // Sakuya Idle Animation
  image(idleSakuya[currentFrame], eneposX, eneposY+eoffsetY,55, 110);

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
  eoffsetY = sin(frameCount/100)*10;
}

function AttackSakuya() {
  image(attackSakuya[currentFrame]);
}

//Reimu Function----------------------------------------------------------------------------------------------------------

function ReimuIdle() {
  image(idleReimu[currentFrame2], userposX, userposY+uoffsetY, 70, 80);

  if (frameCount % 11 === 0) {
    currentFrame2++;
  }

  if (currentFrame2 > 10) {
    currentFrame2 = 0;
  }

  if (intro === true && userposX < width*0.16) {
    userposX = userposX + 1.5;
    if (userposX >= width*0.16) {
      intro = false;
      currentTime = millis();
    }
  }

  // Reimu Flying movement mimicking
  uoffsetY = sin(frameCount/90)*10;
}

//User Control-------------------------------------------------------------------------------------------------------------

function userInput() {
  if (keyIsDown(87) === true && intro === false) {
    userposY = userposY-2;
    if (userposY+uoffsetY < height*0) {
      userposY = height*0;
    }
  }

  if (keyIsDown(83) === true && intro === false) {
    userposY = userposY+2;
    if (userposY+uoffsetY > height*0.78) {
      userposY = height*0.78;
    }
  }

  if (keyIsDown(65) === true && intro === false) {
    userposX = userposX-2;
    if (userposX < width*0) {
      userposX = 0;
    }
  }

  if (keyIsDown(68) === true && intro === false) {
    userposX = userposX+2;
    if (userposX > width*0.9) {
      userposX = width*0.9;
    }
  }
}