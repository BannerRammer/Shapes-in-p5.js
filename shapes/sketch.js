var x, y;
var x2, y2;
var c2;
var c;
function setup() {
  createCanvas(630, 530);
  x = width/2;
  x2 = width/4;
  y = height/2;
  y2 = height/4;
  c = color(51);
  c2 = color(1000);
}

function draw() {
   background(0); 
   noStroke();
   fill(c);
   rect(x, y, 45, 45);
   fill(c2);
   ellipse(x2, y2, 45, 45);
}