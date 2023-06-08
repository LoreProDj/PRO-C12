var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  
  pathImg = loadImage("path.png")
  
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png")
}

function setup(){
  
  createCanvas(400,400);
 
path = createSprite(200,200)

path.addImage(pathImg)

path.scale=1.2;
path.velocityY = 3

boy = createSprite(200,350)

boy.scale = 0.50;
boy.addAnimation("boyRunning", boyImg)
  

leftBoundary = createSprite(0,0,100,800);


leftBoundary.visible = "false"


rightBoundary = createSprite(410,0,100,800);


rightBoundary.visible = "false"

}

function draw() {
  background(0);
  path.velocityY = 4;
  
 
  boy.x = World.mouseX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  
  boy.collide(rightBoundary)
  boy.collide(leftBoundary)


  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
