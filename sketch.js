var fixedRect ,MovingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor ="green";
  fixedRect.debug = true;

  MovingRect = createSprite(400, 200, 80, 30);
  MovingRect.shapeColor ="green";
  MovingRect.debug = true;

}

function draw() {
  background(0,0,0);

MovingRect.x = World.mouseX;
MovingRect.y = World.mouseY;

console.log (MovingRect.x - fixedRect.x);

if (MovingRect.x - fixedRect.x)

  drawSprites();
}