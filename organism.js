/**
 * Created by Johnny on 3/3/2016.
 */

//"Functions are the only things in JavaScript that create a new scope.
//So if we want our modules to have their own scope, we will have to base them on functions."
//-Eloquent JavaScript

function Organism(xCoordinate, yCoordinate) {

    var self = this;

    this.x = xCoordinate;
    this.y = yCoordinate;
    var size = 1;
    var colors = [172,75,275,348]; //blue, green, purple, pink
    var color = colors[Math.floor(Math.random() * 3) + 0];


    var fullyGrown = false;
    var brightness = 70;
    var speed;


    var outerWidth = 8;
    var outerHeight = 10;
    var innerWidth = 5;
    var innerHeight = 15;

    console.log('created organism at: ' + this.x + ' ' + this.y);

    this.display = function(){
        push();
        translate(this.x,this.y);
        ellipseMode(RADIUS);
        fill(color, 50, 50);
        ellipse(50, 50, outerWidth, outerHeight);

        push();
        ellipseMode(CENTER);
        strokeWeight(2);
        stroke(color,50,brightness);
        ellipse(50, 50, innerWidth, innerHeight);
        pop();

        pop();
    };

    this.updateGrowth = function(){
        switch(this.size){
            case 1:
                brightness = 70;
                break;
            case 2:
                brightness = 80;
                break;
            case 3:
                brightness = 100;
                break;
            case 0:
                brightness = 60;
                break;
            default:
                brightness = 70;
        }
    };

    this.updateShape = function(){
        //update our shape
        outerWidth = outerHeight * this.size;
        outerHeight = outerHeight * this.size;
        innerWidth = innerWidth * this.size;
        innerHeight = innerHeight * this.size;
    };



    this.frenzy = function(){

    };

    this.eat = function(){

    };

    this.starve = function(){

    };

    this.die = function(){

    };

}
