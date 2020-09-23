var wall, bullet;
var speed, weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200,50,50);
  bullet.shapeColor = "white";
  bullet.debug = true;
  thickness = random(22,83);
speed = random (55,90)
weight = random (400,1500)
  bullet.velocityX = speed;
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = "green";
  wall.debug = true;
  
}

function draw() {
  background(0,0,0);  

  if ( hasCollided(bullet,wall)){
    bullet.velocityX=0
  deformation = 0.5*weight*speed*speed/thickness^3
 
  if(deformation<10){
wall.shapeColor= "green"
  }
  else{
    wall.shapeColor="red"
  }
  }
 
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x+lbullet.width
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
 return false;
}
  
