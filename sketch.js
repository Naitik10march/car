var car,wall;

var speed,weight;




function setup() {
  createCanvas(800,400);

speed = random(55,90)
weight = random(400,1500)

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapecolour = colour(255);

  wall = createSprite(1500,200,50,hieght/2);
  wall.shapecolour = colour(80,80,80)
}

function draw() {
  background(0);
 if(wall.x-car.x < (car.width+wall.width)/2) 
{
car.velocityX=0;
var deformation=0.5 *weight* speed* speed/22509
if(deformation<180){
  car.shapecolour=red(255,0,0)
}
if(deformation<180 && deformation>100){
  car.shapecolour=yellow(250,250,0);
}
if(deformation>100){
  car.shapecolour=green(0,250,0);
}

  drawSprites();
