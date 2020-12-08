
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey =createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);  
monkey.scale=0.1;
  
  ground=createSprite(400,350,950,10);
  ground.velocity.X=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
}


function draw() {
background(215);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
   }
  
   monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  bananas();
  
  var survivalTime=0
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time ="+survivalTime,100,50);
  
  drawSprites();
}

function bananas() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    bananas.y = Math.round(random(80,120));
    bananas.addImage(bananaImage);
    bananas.scale = 0.5
    bananas.velocityX = -3;
    
     //assign lifetime to the variable
    bananas.lifetime = 200;
    
    //adjust the depth
    bananas.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(bananas);
  }
}





