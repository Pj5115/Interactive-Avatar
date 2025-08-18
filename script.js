
let isSmiling = false;
let isFloating = false;
let floatTime = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background('pink');
  
  // float time for animation
  if (isFloating) {
    floatTime++;
  }
  
  // Afro hairstyle 
  fill(15, 15, 15); 
  noStroke();
  
  // Main medium afro 
  ellipse(width/2, height/2 - 80, 280, 220);
  
  // Top volume for height
  ellipse(width/2, height/2 - 140, 200, 100);
  ellipse(width/2, height/2 - 180, 150, 60);
  
  // Side volume for moderate width
  ellipse(width/2 - 100, height/2 - 60, 120, 150); 
  ellipse(width/2 + 100, height/2 - 60, 120, 150); 
  
  // Additional texture for natural fullness
  ellipse(width/2 - 70, height/2 - 110, 80, 100); 
  ellipse(width/2 + 70, height/2 - 110, 80, 100); 
  ellipse(width/2 - 130, height/2 - 80, 60, 80); 
  ellipse(width/2 + 130, height/2 - 80, 60, 80);
  ellipse(width/2, height/2 - 200, 100, 40); 
  
  // Lower texture around face area
  ellipse(width/2 - 90, height/2 - 20, 50, 70); 
  ellipse(width/2 + 90, height/2 - 20, 50, 70); 
  
  // Left side flowers 
  push();
  noStroke();
  
  // Calculate floating offsets
  let floatX1 = isFloating ? sin(floatTime * 0.02) * 30 : 0;
  let floatY1 = isFloating ? cos(floatTime * 0.015) * 20 : 0;
  let floatX2 = isFloating ? cos(floatTime * 0.018) * 25 : 0;
  let floatY2 = isFloating ? sin(floatTime * 0.022) * 18 : 0;
  let floatX3 = isFloating ? sin(floatTime * 0.025) * 20 : 0;
  let floatY3 = isFloating ? cos(floatTime * 0.02) * 25 : 0;
  let floatX4 = isFloating ? cos(floatTime * 0.016) * 28 : 0;
  let floatY4 = isFloating ? sin(floatTime * 0.019) * 22 : 0;
  
  // Left flower 1 
  fill(255, 192, 203); 
  for (let i = 0; i < 6; i++) {
    let angle = (TWO_PI / 6) * i;
    let x = width/2 - 250 + floatX1 + cos(angle) * 15;
    let y = height/2 - 120 + floatY1 + sin(angle) * 15;
    ellipse(x, y, 20, 20);
  }
  fill(255, 255, 0); 
  ellipse(width/2 - 250 + floatX1, height/2 - 120 + floatY1, 15, 15);
  
  // Left flower 2 - middle left
  fill(255, 105, 180); // Hot pink petals
  for (let i = 0; i < 6; i++) {
    let angle = (TWO_PI / 6) * i;
    let x = width/2 - 280 + floatX2 + cos(angle) * 12;
    let y = height/2 - 20 + floatY2 + sin(angle) * 12;
    ellipse(x, y, 16, 16);
  }
  fill(255, 255, 0); // Yellow center
  ellipse(width/2 - 280 + floatX2, height/2 - 20 + floatY2, 12, 12);
  
  // Left flower 3 
  fill(255, 20, 147); 
  for (let i = 0; i < 6; i++) {
    let angle = (TWO_PI / 6) * i;
    let x = width/2 - 220 + floatX3 + cos(angle) * 14;
    let y = height/2 + 80 + floatY3 + sin(angle) * 14;
    ellipse(x, y, 18, 18);
  }
  fill(255, 255, 0); 
  ellipse(width/2 - 220 + floatX3, height/2 + 80 + floatY3, 13, 13);
  
  // Left flower 4 
  fill(255, 182, 193); 
  for (let i = 0; i < 6; i++) {
    let angle = (TWO_PI / 6) * i;
    let x = width/2 - 320 + floatX4 + cos(angle) * 13;
    let y = height/2 + 30 + floatY4 + sin(angle) * 13;
    ellipse(x, y, 17, 17);
  }
  fill(255, 255, 0); 
  ellipse(width/2 - 320 + floatX4, height/2 + 30 + floatY4, 12, 12);
  pop();
  
  // Right side flowers
  push();
  noStroke();
  
  //floating offsets 
  let floatX5 = isFloating ? cos(floatTime * 0.021) * 32 : 0;
  let floatY5 = isFloating ? sin(floatTime * 0.017) * 24 : 0;
  let floatX6 = isFloating ? sin(floatTime * 0.023) * 26 : 0;
  let floatY6 = isFloating ? cos(floatTime * 0.019) * 19 : 0;
  let floatX7 = isFloating ? cos(floatTime * 0.026) * 22 : 0;
  let floatY7 = isFloating ? sin(floatTime * 0.024) * 27 : 0;
  let floatX8 = isFloating ? sin(floatTime * 0.018) * 29 : 0;
  let floatY8 = isFloating ? cos(floatTime * 0.021) * 21 : 0;
  
  // Right flower 1 
  fill(138, 43, 226); 
  for (let i = 0; i < 6; i++) {
    let angle = (TWO_PI / 6) * i;
    let x = width/2 + 250 + floatX5 + cos(angle) * 15;
    let y = height/2 - 120 + floatY5 + sin(angle) * 15;
    ellipse(x, y, 20, 20);
  }
  fill(255, 255, 0); // Yellow center
  ellipse(width/2 + 250 + floatX5, height/2 - 120 + floatY5, 15, 15);
  
  // Right flower 2
  fill(255, 69, 0); 
  for (let i = 0; i < 6; i++) {
    let angle = (TWO_PI / 6) * i;
    let x = width/2 + 280 + floatX6 + cos(angle) * 12;
    let y = height/2 - 20 + floatY6 + sin(angle) * 12;
    ellipse(x, y, 16, 16);
  }
  fill(255, 255, 0); // Yellow center
  ellipse(width/2 + 280 + floatX6, height/2 - 20 + floatY6, 12, 12);
  
  // Right flower 3 - bottom right
  fill(255, 0, 255); 
  for (let i = 0; i < 6; i++) {
    let angle = (TWO_PI / 6) * i;
    let x = width/2 + 220 + floatX7 + cos(angle) * 14;
    let y = height/2 + 80 + floatY7 + sin(angle) * 14;
    ellipse(x, y, 18, 18);
  }
  fill(255, 255, 0);
  ellipse(width/2 + 220 + floatX7, height/2 + 80 + floatY7, 13, 13);
  
  // Right flower 4 - far right
  fill(75, 0, 130); // Indigo petals
  for (let i = 0; i < 6; i++) {
    let angle = (TWO_PI / 6) * i;
    let x = width/2 + 320 + floatX8 + cos(angle) * 13;
    let y = height/2 + 30 + floatY8 + sin(angle) * 13;
    ellipse(x, y, 17, 17);
  }
  fill(255, 255, 0); // Yellow center
  ellipse(width/2 + 320 + floatX8, height/2 + 30 + floatY8, 12, 12);
  pop();
  
  // Dark brown circle in the middle (face) - centered
  fill(101, 67, 33); // Dark brown color
  ellipse(width/2, height/2, 200, 200);
  
  // Eyes - change based on smiling state - centered
  fill(62, 39, 35); // Darker brown for eyes
  if (isSmiling) {
    // Closed/squinting eyes when smiling
    ellipse(width/2 - 30, height/2 - 30, 25, 8); // Left eye (squinting)
    ellipse(width/2 + 30, height/2 - 30, 25, 8); // Right eye (squinting)
  } else {
    // Normal round eyes
    ellipse(width/2 - 30, height/2 - 30, 20, 20); // Left eye
    ellipse(width/2 + 30, height/2 - 30, 20, 20); // Right eye
  }
  
  // Mouth 
  fill(220, 20, 60); 
  if (isSmiling) {
    // smile
    arc(width/2, height/2 + 30, 60, 40, 0, PI); // Smile arc
  } else {
    // Normal lips
    ellipse(width/2, height/2 + 40, 40, 20); // Regular lips
  }
  
  // Quote text
  fill(0); 
  textAlign(CENTER, TOP);
  textSize(18);
  textFont('Georgia');
  text("One good deed could put smiles on many faces - Princess J", width/2, 30);
  
  fill(0); 
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Press me to make me smile!!", width/2, height - 80);
}

function mousePressed() {

  isSmiling = !isSmiling;
  
  isFloating = true;
  floatTime = 0;
  
  setTimeout(() => {
    isSmiling = false;
  }, 2000);
  
  setTimeout(() => {
    isFloating = false;
  }, 3000);
}
