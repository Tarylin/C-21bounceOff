
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(100,50,20,20);
  gameObject1.velocityX = 5;

  
  gameObject2 = createSprite(800,50,20,20);
  gameObject2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObject1,movingRect)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    gameObject1.shapeColor = "green"
  }
 

bounceOff(gameObject1,gameObject2)


  drawSprites();
}

function isTouching(Object1,Object2){
  if (Object1.x - Object2.x < Object2.width/2 + Object1.width/2
    && Object2.x - Object1.x < Object2.width/2 + Object1.width/2
    && Object1.y - Object2.y < Object2.height/2 + Object1.height/2
    && Object2.y - Object2.y < Object2.height/2 + Object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}

function bounceOff(Object1,Object2){
  if (Object1.x - Object2.x < Object2.width/2 + Object1.width/2
    && Object2.x - Object1.x < Object2.width/2 + Object1.width/2) 
    
    {
    
    Object1.velocityX = Object1.velocityX*(-1)
    Object2.velocityX = Object1.velocityX*(-1)
  
    
    
  }
  if ( Object1.y - Object2.y < Object2.height/2 + Object1.height/2
    && Object2.y - Object2.y < Object2.height/2 + Object1.height/2) {
      Object1.velocityY = Object1.velocityY*(-1)
      Object2.velocityY = Object2.velocityY*(-1)
  
    }
   
}