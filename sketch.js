let x
let y
let dx
let dy
let radius
let r
let g
let b
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
  fill(color(r,g,b))
  circle(x,y,radius)
  x += dx // x = x + dx
  y += dy // y = y + dy
  if( x < 0 ) {
    dx *= -1
  }
  if( x > width ) {
    dx *= -1 
  }
  if( y < 0 ) {
    dy *= -1
  }
  if( y > height ) {
    dy *= -1
  }     
}

function initializeBall() {
  setRandomPosition()
  setRandomVelocity()
  radius = random(10,20)
  createRandomColor(true)  
}

function setRandomPosition( xMin = 0, yMin = 0, xMax = width, yMax = height) {
  x = random(xMin, xMax)
  y = random(yMin, yMax)  
}

function setRandomVelocity() {
  dx = random(-1,1)
  dy = random(-1,1)  
}

function createRandomColor(avenues=false) {
  if( avenues ) {
    const c = color(randomAvenuesColor())
    r = red(c)
    g = green(c)
    b = blue(c)
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
