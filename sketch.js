
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var math


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey = createSprite(80,315, 20, 20)
  monkey.addAnimation("moving", monkey_running)
 monkey.scale=0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  ground.x=ground.width/2
  console.log(ground.x)
  if(keyDown("space")&& monkey.y>=139){
     var survivalTime=0;
  stroke("white")
  textSize(20)
  fill("white")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime, 100, 50)
  }
 
}

function spawnBanana(){
  if(frameCount % 80 === 0){
    var Banana = (60,20,20,20)
    Banana.y = Math.round(random(120,200));
    Banana.addImage(bananaImage)
    Banana.scale = 0.1
    Banana.velocityX = -3
    Banana.lifetime = 200
    
  }
  
  drawSprites()
}


function spawnObstacles(){
  if(frameCount % 300 === 0){
    var obstacles = (200,250,20,20)
    obstacles.y = Math.round(random(120,200));
    obstacles.addImage(obstaceImage)
    obstacles.scale = 0.1
    obstacles.velocityX = -3
    obstacles.lifetime = 300
}}

  


  



function draw() {
 background(255)
   if(ground.x<0){
     ground.x=ground.width/2 
   }
  
  if(keyDown("space")){
    monkey.velocityY = -12 
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground )
  
  
 
  
  drawSprites();
}  
 




