/*This is the playground that our microbes live their lives*/


//require() is used to load a module
//var Organism = require('./organism.js');

var organisms = [];
var microbes = [];
var nutrients = [];
var colors = [172,75,275,348]; //blue, green, purple, pink

var microbeHead;
var microbeTail;

//var colors = [];

function setup() {
      createCanvas(windowWidth, windowHeight);
      colorMode(HSB, 360, 100, 100);  //Mode : Hue/saturation/luminance
      stroke(3);
      fill(50);

    for(var i = 0 ; i < 25; i++){
        addOrganism();
    }
}

function draw() {
    frameRate(30);

    for(var i = 0 ; i < organisms.length ; i++){
        organisms[i].display();
    }
}

function addOrganism() {
    var organism = new Organism(Math.floor(Math.random() * (width -50)) + 50, Math.floor(Math.random() * (height-50)) + 50);
    organisms.push(organism);
    return organism;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){

}










