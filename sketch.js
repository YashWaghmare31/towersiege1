
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2;
var ball;


function preload(){
  polygon_img=loadImage("polygon.png");
  backgroundImg=loadImage("bg.png");
}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);


  //ball  with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() {
 // background(backgroundImg);  
 background("white")
  Engine.update(engine);
 
  
 // ground.display();
  strokeWeight(2);
  stroke(15);
  
  stand1.display();
  stand2.display();
  
  stroke(15);
  fill("black")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
} 

function keyPressed () {
  if (keyCode === 32) {
     slingshot.attach(ball.body);
  }
}
