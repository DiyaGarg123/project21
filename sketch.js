
var score = 0
var bird
var cannon
var nature
var ball
var boy
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
birdImg = loadAnimation("bird flying.png")
birdhitImg = loadAnimation("bird_hit.png")
bbImg = loadImage("basketball.png")
vbImg = loadImage("volleyball.png")
natureImg = loadImage("background_nature.png")
endImg = loadImg("gameOver.png")
}

function setup() {
 createCanvas(900,600)
 nature= createSprite(width/2,height/3);
nature.addImage("nature",natureImg);
nature.velocityX = 4
nature.scale = 1.6




bird = createSprite(800,300)
  bird.addAnimation("flying",birdImg)
  bird.scale = 0.3

bbGroup=new Group()
vbGroup=new Group()
}

function draw() {
  text("Score: "+ score, 500,50);
if (gameState === PLAY){
  background(100)


  boy.y = World.mouseY;
  
  edges= createEdgeSprites();
  bird.collide(edges);
  

  if(path.x > 400 ){
    nature.x = width/2;
  }
  createBasketball()
  createVolleyball()
  if(vbGroup.isTouching(bird) || bbGroup.isTouching(bird)) {
    gameState=END;

    
bird.changeAnimation("collided",birdhitImg)

   vbGroup.destroyEach();
  bbGroup.destroyEach();
   
  vbGroup.setVelocityYEach(0);
    bbGroup.setVelocityYEach(0);
   

  end = createSprite(200,300)
  end.addImage("end",endImg)
  end.scale = 0.7
   
  
  }
  
  
   drawSprites()
}

}


function createBasketball(){
  if (World.frameCount % 410 == 0) {
    var basketball = createSprite(Math.round(random(50, 350),40, 10, 10));
    basketball.addImage(bbImg);
    basketball.scale=0.13;
   basketball .velocityx = 3;
   basketball.lifetime = 150;
  bbGroup .add(basketball);
  }

}
function createVolleyball(){
  if (World.frameCount % 410 == 0){
    var volleyball = createSprite(Math.round(random(50, 350),40, 10, 10));
    volleyball.addImage(vbImg);
    volleyball.scale=0.13;
    volleyball.velocityx = 3;
    volleyball.lifetime = 150;
   vbGroup.add(volleyball);
  }
}
