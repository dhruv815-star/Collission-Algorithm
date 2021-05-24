var fixedRect, movingRect;

function setup() 
{
  createCanvas(800,400);
  fixedRect= createSprite(400, 200, 70, 100);
  fixedRect.shapeColor= "red";
  fixedRect.debug=true;

  movingRect = createSprite(400, 200, 100, 50);
  movingRect.shapeColor= "red";
  movingRect.debug=true;

}

function draw() 
{
  background(255,255,255);
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY; 
  console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2
    && movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y-movingRect.y< fixedRect.height/2 + movingRect.height/2)
  {
    fixedRect.shapeColor= "blue";
    movingRect.shapeColor= "blue";
  }
  else
  {
    movingRect.shapeColor= "red";
    fixedRect.shapeColor= "red";
  }
  drawSprites();
}