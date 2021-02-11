
var bi;
var monkey , monkey_running,monkeyC
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground
var gameover,gameoveri;

function preload(){
  
  bi=loadImage("background2.jpg")
  monkey_running =            loadAnimation("sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeyC=loadAnimation("sprite_0.png")
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 gameoveri=loadImage("gameover.png")
}



function setup() {
  createCanvas(580,400)

  background=createSprite(0,100);
  background.addImage(bi);
  background.scale=2   
  
  monkey=createSprite(90,270)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.15
  
  gameover=createSprite(300,200)
  gameover.addImage(gameoveri)
  gameover.scale=0.2
  
  ground=createSprite(100,320,200,10)
  
  bananaGroup=new Group(); 
  obstacleGroup=new Group(); 
  
  
 monkey.setCollider("circle",0,0)
  monkey.debug=true
  
}


function draw() {

  background.velocityX=-4
  if(background.x<0){
    
    background.x=background.width/2
    
  }
  
  gameover.visible=false
  score = score + Math.round(getFrameRate()/60);
  
  if(keyDown("space") && monkey.y >=200){
    monkey.velocityY=-12
     
  }
  
  monkey.velocityY=monkey.velocityY+0.8  

  ground.visible=false
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    
    
  }
  
 if(monkey.isTouching(obstacleGroup)){
    
  monkey.velocityY=0;
   background.velocityX=0;
   obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
monkey.changeAnimation("collided",monkeyC); 
  score=0;
   
  } 
  obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
  
  
   
  Rocks();
  Banana()
  
  monkey.collide(ground)
   
  drawSprites();
  
  text("SCORE :"+score,50,50)
  
}

function Banana(){

if(frameCount % 100 === 0){
  
  banana=createSprite(600,150)
  banana.addImage(bananaImage)
  banana.scale=0.13
    
 banana.velocityX=-12
  banana.lifetime=100; 
  
   bananaGroup.add(banana)
}

}

function Rocks(){
 
 if(frameCount % 120 ===0){
   
   obstacle=createSprite(520,280)
   obstacle.addImage(obstaceImage)
   obstacle.scale=0.2
   obstacle.velocityX=-12
    
   obstacleGroup.add(obstacle)
 } 
  
  
  
  
  
}



