const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground,tower;



function preload() {
 backgroundImage=loadImage("./assets/background.gif")
}


function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  tower=new Tower(150,350,160,310)
  angle=-PI/4
  cannon=new Cannon (180,110,100,50,angle)
  // CREAR OBJETO
  //cannonBall=new Cannon(cannon.x,cannon.y)
  //cannonBall=new cannonBall(cannon.x,cannon.y)
  //cannonBall=create CannonBall(cannon.x,cannon.y)
  //cannonBall=new CannonBall(cannon.x,cannon.y)
  
 
}

function draw() {
  background(189);
 image (backgroundImage,0,0,width,height);
  Engine.update(engine);
  tower.display();
  cannon.display();
  //MOSTRAR BALA DE CAÑON
  //cannonBall.display();
  //cannonBall.mostrar();
  //cannonBall.show();
  
   
}
//CREAR FUNCION PARA DISPARAR LA BALA 
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    cannonBall.shoot()
  }
}
