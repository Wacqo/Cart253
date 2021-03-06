/**************************************************
Alien Project
Nico Brinton

This is my first attempt at the alien drawing
**************************************************/

// setup()
//
// Description of setup() goes here.

let p1 = { x: 170, y: 140 };
let p2 = { x: 200, y: 110 };
let p3 = { x: 300, y: 110 };
let p4 = { x: 330, y: 140 };

let p5 = { x: 190, y: 160 };
let p6 = { x: 220, y: 130};
let p7 = { x: 280, y: 130 };
let p8 = { x: 310, y: 160 };

let p9 = { x: 220, y: 170 };
let p10 = { x: 240, y: 150};
let p11 = { x: 260, y: 150 };
let p12 = { x: 280, y: 170 };

let bubbles = [];

function setup() {

createCanvas (500, 500);
background (0);

for (let i = 0; i<10; i++) {
  let x = 20 + 80 * i;
  bubbles[i] = new Bubble(x, 400, 20);
}
for (let i = 0; i < bubbles.length; i++) {
bubbles[i].show();
}


// Control panel frame
rectMode(CENTER);
//noFill ();
fill (250);
rect (width/2, 500 , 500, 300);




//The body of the alien - Dark green
noStroke();
fill (41, 79, 63);
ellipse (250, 500, 400, 200);

// The head of the Alien - lighter green
noStroke ();
fill (44, 115, 85);
ellipse (250, 250, 200, 400);

// The eyes of the Alien
stroke (0);
fill (201, 169, 169);
ellipse (160, 250, 100, 150);
ellipse (340, 250, 100, 150);
fill (0, 0 , 0);
ellipse (160, 250, 30, 30);
ellipse (340, 250, 30, 30);

// Eye lash of the alien
stroke(0);
noFill();
curve (130, 400, 110, 250, 210, 250, 230, 400);
curve (310, 400, 290, 250, 390, 250, 410, 400);

// The mouth of the Alien
fill (77, 77, 77);
arc (250, 335, 110, 180, 0, PI, CHORD);


// The teeth of the alien
fill (250, 250, 250);
triangle (200, 335, 210, 355, 220, 335);
triangle (220, 335, 230, 355, 240, 335);
triangle (240, 335, 250, 355, 260, 335);
triangle (260, 335, 270, 355, 280, 335);
triangle (280, 335, 290, 355, 300, 335);

// Test points I added in for reference points
// (200, 110);
//point (225, 90);
//point (275, 90);
//point (300, 110);
//point (250, 250);
//noFill();

// The curves on the top of the aliens head
stroke(0);
noFill ();
curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
curve(p5.x, p5.y, p6.x, p6.y, p7.x, p7.y, p8.x, p8.y);
//curve(p9.x, p9.y, p10.x, p10.y, p11.x, p11.y, p12.x, p12.y);



}

// draw()
//
// Description of draw() goes here.
function draw() {

}

class Bubble  {
constructor (x, y, r) {

 this.x = x;
 this.y = y;
 this.r = r;
}

show () {
stroke(0);
fill (0);
ellipse (this.x, this.y, this.r);

}

}
