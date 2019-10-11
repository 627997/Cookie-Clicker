let cookie = {
  x: 200,
  y: 200,
  width: 250
}

let score = 0;

  function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white")
  fill("tan")
  //ellipse(cookie.x, cookie.y, cookie.width, cookie.width)
  
  
  if (mouseIsPressed && dist(cookie.x, cookie.y, mouseX, mouseY) <= cookie.width/2) {
    ellipse(200, 200, 230, 230)
  } else {
    ellipse(cookie.x, cookie.y, cookie.width, cookie.width)
  }
  
  /*if (score >= 10){
    ellipse(50,50,20,20)
  }
  
  if (score >= 20){
    ellipse(100,50,20,20)
  }
  
  if (score >= 30){
    ellipse(150,50,20,20)
  }
  
  if (score >= 40){
    ellipse(200,50,20,20)
  }
  
  
  line(mouseX, 0, mouseX, 400)
  line(0, mouseY, 400, mouseY)*/
  fill("black")
  textSize(25)
  text("Score: " + score, 10, 30)
}

function mouseClicked() {
  if ( dist(cookie.x, cookie.y, mouseX, mouseY) <= cookie.width/2 ) {
    score++
  }
}
