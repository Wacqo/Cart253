/**************************************************
I like to move it
Nico Brinton

This is the project for "i like to move it" the project is just showing  3 differeent
shapes moving in multiple ways. having the colour and sizes change depending ont the location of the bubbles

**************************************************/

// setup()
//
// Description of setup() goes here.

// this "angle" variable is to determine the movement  of the Spinrectobject
let angle = 0;

// this variable is the initial bg colour
let bg = {
  r: 53,
  b: 76,
  g: 94,
}

//this is the variable for the cursor object
let curser = {
  size: 50,
}
// this is the variable for the size for the Spinrect object
let spin = {
width: 50,
height: 100,
}

// this is the variable for all the information about Bubble1
let circle1 = {
  x: 1,
  y: 250,
  size: 100,
  speed: 1,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 190,
}

// this is the variable for all the information about Bubble2
let circle2 = {
  x: 499,
  y: 250,
  size: 100,
  speed: 1,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 190,
}
// this is the variable for all the information about Bubble3
let circle3 = {
  x: 1,
  y: 1,
  size: 100,
  speed: 1,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 190,
}

// this is the variable for all the information about Bubble4
let circle4 = {
  x: 1,
  y: 499,
  size: 100,
  speed: 1,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 190,
}

// this is the variable for all the information about Bubble5
let circle5 = {
  x: 499,
  y: 1,
  size: 100,
  speed: 1,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 190,
}

// this is the variable for all the information about Bubble6
let circle6 = {
  x: 499,
  y: 499,
  size: 100,
  speed: 1,
  speedneg: -1,
  rd: 200,
  bl: 0,
  gr: 190,
}

function setup() {
  createCanvas(500, 500);
  // this is used to set the degrees to degrees and is used later for when we soin the rectangle
  angleMode(DEGREES);



}

// draw()
//
// Description of draw() goes here.
function draw() {

// thios is where we set the initial bg
background(bg.r, bg.b, bg.g);
 //ellipse (circle1.x, circle1.y, circle1.size)

// this is calling the objects for all the bubbles and the rectangle and the changing of background.
Bg ();

Player();

Spinrect();

Bubble1();

Bubble2();

Bubble3();

Bubble4();

Bubble5();

Bubble6();

}

// this is the first Bubble1, the bubble that start at the middle left and moves towards the center
function Bubble1  (){

// maps the colours and the size to the position of the bubble
circle1.rd = map(circle1.x, 0, 250, 0, 255)
circle1.bl = map(circle1.x, 0, 250, 255, 0)
circle1.size =  map(circle1.x, 0, 250, 100, 300);


//this is what creates the bubble
    push();
   noStroke();
   fill(circle1.rd, circle1.bl, circle1.gr, 80)
   ellipse (circle1.x, height / 2, circle1.size);
  pop();

// this is the code that allows the bubble to bounce back and forth
if ((circle1.x >= width / 2) || (circle1.x <= 0)){
  circle1.speed = -circle1.speed;
}

  circle1.x = circle1.x + circle1.speed;

}

// this is the secound Bubble2, the bubble that start at the middle right and moves towards the center
function Bubble2 (){

  // maps the colours and the size to the position of the bubble
  circle2.rd = map(circle2.x, 250, 500, 255, 0)
  circle2.bl = map(circle2.x, 250, 500, 0, 255)
  circle2.size =  map(circle2.x, 250, 500, 300, 100);


  //this is what creates the bubble
  push();
  noStroke();
   fill(circle2.rd, circle2.bl, circle2.gr, 70);
   ellipse (circle2.x, height / 2, circle2.size);
   pop();

// this is the code that allows the bubble to bounce back and forth
if ((circle2.x <= 250) || (circle2.x >= 500)){
   circle2.speed = -circle2.speed;
}

  circle2.x = circle2.x - circle2.speed;
}

// this is the third Bubble3, the bubble that start at the top left and moves diagonally towards the center
function Bubble3 (){

// maps the colours and the size to the position of the bubble
  circle3.rd = map(circle3.x, 0, 250, 255, 0)
  circle3.bl = map(circle3.x, 0, 250, 0, 255)
  circle3.size =  map(circle3.x, 0, 250, 100, 300);

  //this is what creates the bubble
  push();
  noStroke();
   fill(circle3.rd, circle3.bl, circle3.gr, 70);
   ellipse (circle3.x, circle3.y, circle3.size);
   pop();

// this is the code that allows the bubble to bounce back and forth
if ((circle3.x <= 0) || (circle3.x >= 250)){
 circle3.speed = -circle3.speed;
}

  circle3.x = circle3.x + circle3.speed;
  circle3.y = circle3.y + circle3.speed;
}

// this is the third Bubble3, the bubble that start at the bottom left and moves diagonally towards the center
function Bubble4 (){

// maps the colours and the size to the position of the bubble
  circle4.rd = map(circle4.x, 0, 250, 255, 0)
  circle4.bl = map(circle4.x, 0, 250, 0, 255)
  circle4.size =  map(circle4.x, 0, 250, 100, 300);

//this is what creates the bubble
  push();
  noStroke();
   fill(circle4.rd, circle4.bl, circle4.gr, 70);
   ellipse (circle4.x, circle4.y, circle4.size);
   pop();

// this is the code that allows the bubble to bounce back and forth
if ((circle4.x <= 0) || (circle4.x >= 250)){
 circle4.speed = -circle4.speed;
}

  circle4.x = circle4.x + circle4.speed;
  circle4.y = circle4.y - circle4.speed;
}

// this is the third Bubble3, the bubble that start at the top right and moves diagonally towards the center
function Bubble5 (){

// maps the colours and the size to the position of the bubble
  circle5.rd = map(circle5.x, 250, 500, 0, 255)
  circle5.bl = map(circle5.x, 250, 500, 255, 0)
  circle5.size =  map(circle5.x, 250, 500, 300, 100);

  //this is what creates the bubble
  push();
  noStroke();
   fill(circle5.rd, circle5.bl, circle5.gr, 70);
   ellipse (circle5.x, circle5.y, circle5.size);
   pop();

// this is the code that allows the bubble to bounce back and forth
if ((circle5.x <= 250) || (circle5.x >= 500)){
 circle5.speed = -circle5.speed;
}

  circle5.x = circle5.x - circle5.speed;
  circle5.y = circle5.y + circle5.speed;
}

// this is the third Bubble3, the bubble that start at the bottom left and moves diagonally towards the center
function Bubble6 (){

// maps the colours and the size to the position of the bubble
  circle6.rd = map(circle6.x, 250, 500, 0, 255)
  circle6.bl = map(circle6.x, 250, 500, 255, 0)
  circle6.size =  map(circle6.x, 250, 500, 300, 100);

//this is what creates the bubble
  push();
  noStroke();
   fill(circle6.rd, circle6.bl, circle6.gr, 70);
   ellipse (circle6.x, circle6.y, circle6.size);
   pop();

// this is the code that allows the bubble to bounce back and forth
if ((circle6.x <= 250) || (circle6.x >= 500)){
 circle6.speed = -circle6.speed;
}

  circle6.x = circle6.x - circle6.speed;
  circle6.y = circle6.y - circle6.speed;
}


// this is what allows the background to change colours, it changes colours when the first bubble reaches 100 along the x-axis
function Bg (){
  if (circle1.x >= 100) {
   background(71, 53, 94);
 }
}

// this is the code for the spinning object in the middle of the screen
function Spinrect () {

//this is what allows the object to spin, it is mapped to the positio of the mouse
spin.width = map (mouseX, 0, 500, 0, 250);
spin.height = map (mouseX, 0, 500, 0, 500);

// this is the code that actually draws the rectangle
push();
rectMode(CENTER);
noStroke();
translate(width / 2, height / 2);
rotate(angle * -3);
// this is where the colour is chosen for the rectangle, which is what gives the rectangle the strobe affect.
fill(random(255), random(255), random(255), 70);
rect(0, 0, spin.width, spin.height);
pop();

angle = angle + 1
}

// this is the square that follows the curser around the screen
function Player () {

rectMode(CENTER);
noStroke();
fill(255, 50);
rect(mouseX, mouseY, curser.size);

}
