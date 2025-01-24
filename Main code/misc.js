// For checking collision and Health Bar

let playerHitBox = 10;
let checkHit = false;
function checkCollision() {
  let distance = dist(userposX, userposY+uoffsetY, this.x, this.y);

  if (distance < playerHitBox) {
    checkHit = true;
    console.log('hit');
    bullets.splice(i,1);
  }
  else {
    checkHit = false;
  }
}