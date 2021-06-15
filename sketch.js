var iss,spacecraft;
var issImg,spacecraft1Img,spacecraft2Img,spacecraft3Img,spacecraft4Img;
var invisibleBox
function preload(){
  issImg = loadImage("iss.png")
  bg = loadImage("spacebg.jpg")
  spacecraft1Img = loadImage("spacecraft1.png")
  spacecraft2Img = loadImage("spacecraft2.png")
  spacecraft3Img = loadImage("spacecraft3.png")
  spacecraft4Img = loadImage("spacecraft4.png")




}



function setup() {
  createCanvas(1000,800);
  iss = createSprite(400, 300, 50, 50);
  iss.addAnimation("spaceStation",issImg);
  iss.scale = 1.5

  spacecraft = createSprite(800,720);
  spacecraft.addAnimation("spacecraft relax",spacecraft1Img)
  spacecraft.scale = 0.28

  invisibleBox  = createSprite(305,340,5,5);
  invisibleBox.shapeColor = "red"
  invisibleBox.visibility = false;

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

  if(spacecraft.isTouching(invisibleBox)){
    fill("cyan");
    textSize(35);
    text("Docking Successful",600,500)
    spacecraft.velocityX = 0
    spacecraft.velocityY = 0
  }

}