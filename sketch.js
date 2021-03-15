var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "blue";
  //car.debug = true;
  wall = createSprite(1500, 200, 60, 200);
  wall.shapeColor = "grey";
  //wall.debug = true;
  
  speed = Math.round(random(40, 90));
  weight = Math.round(random(200, 1500));

  car.velocityX = speed;
}

function draw() {
  background("black");
  //car.x = mouseX;+
  if(wall.x - car.x <= (car.width/2+wall.width/2)  ){
      car.velocityX = 0;
   deformation = Math.round((0.5 * weight * speed * speed) / 2250);
   console.log("deformation= " + deformation);
    {
      if(deformation < 100){
        car.shapeColor = color(0,225,0);//GREEN
      }
      else if(deformation >= 100 && deformation <= 180){
        car.shapeColor = color(230, 230, 0);//YELLOW
      }
      else if(deformation > 180){
        car.shapeColor = color(255, 0, 0);//RED
      }
    }
  }

  drawSprites();
  textSize(20);
  fill("pink");
  text("DEFORMATION= "+deformation, 800, 100);
  text("SPEED OF CAR: "+ speed, 200, 300);
  text("WEIGHT OF CAR: "+weight, 200, 350)
}