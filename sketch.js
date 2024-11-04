let ball = {}
let bg

function setup() {
  createCanvas(400, 400)
  ellipseMode(RADIUS)
  createRandomBGColor(true)
  initializeBall()
  noStroke() 
}

function draw() {
  background(bg)   
  updateBall(ball)
}

function updateBall(b) {
  fill(b.c)
  circle(b.x,b.y,b.r)
  b.x += b.dx // x = x + dx
  b.y += b.dy // y = y + dy
  if( b.x - b.r < 0 ) {
    b.dx *= -1
  }
  if( b.x + b.r > width ) {
    b.dx *= -1 
  }
  if( b.y - b.r < 0 ) {
    b.dy *= -1
  }
  if( b.y + b.r > height ) {
    b.dy *= -1
  }    
}

function initializeBall() {
  setRandomPosition()
  setRandomVelocity()
  ball.r = random(10,20)
  createRandomColor(true)  
}

function setRandomPosition( xMin = 0, yMin = 0, xMax = width, yMax = height) {
  ball.x = random(xMin, xMax)
  ball.y = random(yMin, yMax)  
}

function setRandomVelocity() {
  ball.dx = random(-1,1)
  ball.dy = random(-1,1)  
}

function createRandomColor(avenues=false) {
  if( avenues ) {
    ball.c = randomAvenuesColor()
  } else {
    r = random(255)
    g = random(255)
    b = random(255)    
  }

}

function createRandomBGColor(avenues=false) {
  if( avenues ) {
    bg = randomAvenuesColor()
  } else {
    bg = color(random(255), random(255), random(255))  
  }
  
}

function keyPressed() {
  createRandomBGColor()
}

// Hex Codes for the Official Avenues Colors 
const colors = {
  white: "#ffffff",
  black: "#000000",
  ash: "#B7B09C", 
  ochre: "#D3AE6F",
  indigo: "#3D68B2",
  moss: "#267355",
  pristineBlue: "#44C3D4",
  violet: "#9796C9",
  nimbus: "#CAC3BC",
  pistachio: "#C5D982",
  olive: "#8A916A",
  terracotta: "#C17E60",
  gold: "#F5CD64",
  clay: "#C3411E",
  grass: "#0D9A48",
  navy: "#273879"
}

function randomAvenuesColor() {
  return random(Object.values(colors))
}
