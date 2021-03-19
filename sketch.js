var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  
}

function draw() {
  background(0,0,0);  
  

  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;

  bounceOff(movingRect,fixedRect);

  

  
  drawSprites();
}

function isTouching(ob1,ob2){//passing arguments through the function
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
  //movingRect.shapeColor = "red";
  //fixedRect.shapeColor = "red";

  return true;

}
else {

  return false;
  //movingRect.shapeColor = "green";
  //fixedRect.shapeColor = "green";
}

}

function bounceOff(ob1,ob2){

// 1. if two objects are touching each other or not

if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
  && ob2.x - ob1.x < ob2.width/2 + ob1.width/2 ){

    ob1.velocityX = ob1.velocityX *(-1) ;
    ob2.velocityX = ob2.velocityX * (-1);
  }

  if (ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){

      ob1.velocityY = ob1.velocityY *(-1) ;
      ob2.velocityY = ob2.velocityY * (-1);
    }
// 2. objects should start moving in opposite directions
// 3. 
}
