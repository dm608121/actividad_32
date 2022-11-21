const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;

let engine;
let world;

var balls=[]
var tower;
var canvas;
var cannon;
var cannonball;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(0, height-1, width*2, 1);

 tower = new Tower(150, 350, 160, 310);

 angle = -PI/4;

 cannon = new Cannon(180, 110, 100, 50 ,angle);


 

 
  //Usa una nueva palabra clave para crear un objeto torre.(desafío 4)
}

function draw() {
  background(189);
  Engine.update(engine);
  for(var i=0; i<balls.length; i++){
    showCannonBalls(balls[i],i)
  }
  image(backgroundImg, 0, 0, width, height);
  tower.display();
  ground.display();
  cannon.display();
 
//muestra la torre(desafío 4)

}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
var  cannonball = new CannonBall(cannon.x, cannon.y);
balls.push(cannonball)

  }
}

function showCannonBalls( ball, index){
 
  ball.display();
  if(ball.body.position.x >= width || ball.body.position.y >= height-50){
    Matter.World.remove(world, ball.body)
    balls.splice(index,1)
  }
}
function keyReleasd() {
if(keyCode === DOWN_ARROW)  {
  balls[balls.length-1].shoot()
}
}