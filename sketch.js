var weight , speed,car,wall;
var deform;
function setup() {
  createCanvas(800,400);

  
  car = createSprite(50,200,50,50) 
  speed = random(55,99)
  weight = random(400,1500)

   car.velocityX = speed;
   wall = createSprite(600,400,10,1000)
}


function draw() {
  background('black'); 
  
  if(wall.x  -car.x < (car.width + wall.width)/2) {
    car.velocityX=0;
    deform = 0.5*weight*speed**2/22500 
    if(deform > 180){
      car.shapeColor='red'
    }
    if(deform < 180 && deform > 80){
      car.shapeColor='yellow'
    }
    if(deform < 80 && deform > 0){
      car.shapeColor='green'
    }
  }
  drawSprites();
}