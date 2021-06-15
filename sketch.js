var iss,spacecraft;
var issImg,spacecraft1Img,spacecraft2Img,spacecraft3Img,spacecraft4Img;
var invisibleBox
var inventory1,inventory2,inventory1Img,inventory2Img;



function preload(){
  issImg = loadImage("iss.png")
  bg = loadImage("spacebg.jpg")
  spacecraft1Img = loadImage("spacecraft1.png")
  spacecraft2Img = loadImage("spacecraft2.png")
  spacecraft3Img = loadImage("spacecraft3.png")
  spacecraft4Img = loadImage("spacecraft4.png")
  inventory1Img = loadImage("corpedCake.jpeg")
  inventory2Img = loadImage("corpedCookies.jpeg")



}



function setup() {
  createCanvas(1000,800);
  iss = createSprite(400, 300, 50, 50);
  iss.addAnimation("spaceStation",issImg);
  iss.scale = 1.5

  spacecraft = createSprite(800,720);
  spacecraft.addAnimation("spacecraft relax",spacecraft1Img)
  spacecraft.addAnimation("forward", spacecraft2Img); spacecraft.addAnimation("right", spacecraft3Img); spacecraft.addAnimation("left", spacecraft4Img); spacecraft.addAnimation("backward", spacecraft1Img);
  spacecraft.scale = 0.28

  invisibleBox  = createSprite(305,340,5,5);
  invisibleBox.shapeColor = "cyan"
  invisibleBox.visibility = false;

  inventory1 = createSprite(250,20)
  inventory1.addImage(inventory1Img)
  inventory1.scale = 0.3


  inventory2 = createSprite(280,20)
  inventory2.addImage(inventory2Img)
  inventory2.scale = 0.3
}

function draw() {
  background(bg);  
  drawSprites();

  if (keyCode === 87){
    spacecraft.changeAnimation("forward",spacecraft2Img);
    spacecraft.y = spacecraft.y - 1
  }
  if (keyCode === 65){
    spacecraft.changeAnimation("left",spacecraft4Img);
    spacecraft.x = spacecraft.x - 1
  }

  if (keyCode === 83){
    spacecraft.changeAnimation("backward",spacecraft1Img);
    spacecraft.y = spacecraft.y + 1
  }

  if (keyCode === 68){
    spacecraft.changeAnimation("right",spacecraft3Img);
    spacecraft.x = spacecraft.x + 1
  }

  if (keyCode === 82){
   spacecraft.x = 800
   spacecraft.y = 720
  }
  fill("White")
  textSize(20)
  text("SpaceCraft Inventory :-",5,20)

  if(spacecraft.isTouching(invisibleBox)){
    fill("cyan");
    textSize(35);
    text("Docking Successful",600,500)
    spacecraft.velocityX = 0
    spacecraft.velocityY = 0
    inventory1.visible = 0
    inventory2.visible = 0
  }

}