var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);

  bullet = createSprite(500, 200, 50, 20);
wall = createSprite(1200,200,thickness,height/2);

speed=random(223,321);
weight=random(30,52);

bullet.velocityX = 5;

thickness=random(22,83);

}

function draw() 
{
  background("black");  

if(hasCollided(bullet,wall))
  {
   bullet.velocityX=0;
   var damage=0.5* weight * speed* speed/(thickness * thickness *thickness);

if(damage>10)
{
 wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
 wall.shapeColor=color(0,255,0);
}

  }
  
 
  hasCollided();
  drawSprites();
}

function hasCollided(Lbullet,Lwall)
{
 bulletRightEdge=lbullet.x +lbullet.weight;
 wallLeftEdge=lwall.x;
 if(bulletRightEdge>=wallLeftEdge)
 {
   return true;
 }
  return false;
}