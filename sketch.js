function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  car createSprite(50,20,50,58);
  wall createSprite(1500,200,60,height/2);
  carvelocityX=speed;
  var car,wall:
  speed random(55,90);
  speed random(400,1500);
}
var speed,weight;

function draw() {
  background(255,255,255);  
  drawSprites();
}