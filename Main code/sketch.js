// Touhou Replicated Game ( Major Project)
// Henry Vu
// 11.28.2024

let totalpoint; // use to store total point
let pattern = 0; // use to store pattern initialize number for the boss 

// Time Variable for Timer countdown
let time = 0; 
let seconds = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noStroke();
  fill(0);
  textSize(40);
  CountDown();
}

function CountDown() {
  let milliseconds = millis(); // millis() return the milliseconds 
  seconds = milliseconds / 1000;
  time = 150 - seconds;

  text(int(time), width/2, length/2);
}

function Reimu() {

}