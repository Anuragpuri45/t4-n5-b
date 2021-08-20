var garden,rabbit;
var gardenImg,rabbitImg,asss,cloud,cloud2,asss2;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  asss=loadImage("apple.png");
  asss2=loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
apple=createSprite(380,20,10,10)
}


function draw() {
  background(0);
   rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if (frameCount % 100 === 0) {
    cloud = createSprite(300,20,40,10);
    cloud.addImage(asss)
    cloud.scale=0.07;
    cloud.velocityY=4;
    cloud.x = Math.round(random(50,400))
  }
  if (frameCount % 200 === 0) {
    cloud2 = createSprite(300,20,40,10);
    cloud2.addImage(asss2)
    cloud2.scale=0.07;
    cloud2.velocityY=4;
    cloud2.x = Math.round(random(100,400))
  }
  drawSprites();
}