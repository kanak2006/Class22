const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground, ball;
var ball2;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world=engine.world;
var option = {
isStatic: true

}


  ground = Bodies.rectangle(400,380,800,20,option);
World.add(world,ground);
  ball = Bodies.circle(150,200,25);
World.add(world,ball);
ball2 = Bodies.circle(250,300,50);
World.add(world,ball2);
}

function draw() {
  background("yellow");  
  Engine.update(engine);
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,800,20);
ellipseMode();
fill("green");
ellipse(ball.position.x,ball.position.y,50,50);
fill("red");
ellipse(ball2.position.x,ball2.position.y,100,100);


}