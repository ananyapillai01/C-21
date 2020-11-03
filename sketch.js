var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = 3;
  fixedRect.velocityX = -3;


  // gameObject1 = createSprite(800,200,50,80);
  // gameObject1.shapeColor = "green";
  // gameObject2 = createSprite(1000,200,50,80);
  // gameObject2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;


  if(isTouching(movingRect, fixedRect)){
    //function returns true
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  bounceOff(movingRect, fixedRect);
  
  drawSprites();
}


