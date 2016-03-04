/*This is the playground that our microbes live their lives*/

var microbes = [];
var nutrients = [];

var microbeHead;
var microbeTail;

function setup() {
      createCanvas(windowWidth, windowHeight);
      colorMode(HSB, 360, 100, 100);  //Mode : Hue/saturation/luminance
      stroke(3);
      fill(50);

    //Setup Global Variables
    microbeHead = 20;
    microbeTail = 80;

}

function draw() {
    frameRate(30);
    //THE ORDER WE DRAW = THE ORDER THINGS ARE ORDERED/SET ON THE Z AXIS.
    //TODO JUST MAKE CIRCLES INSTEAD OF WORMS
    noFill();
    stroke(150);
    strokeWeight(2);
    beginShape();
    vertex(10, 10);
    quadraticVertex(10, 40, 25, 25);
    quadraticVertex(40, 10, 40, 40);
    endShape();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



function mouseClicked(){

}






