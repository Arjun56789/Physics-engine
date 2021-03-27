const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
var engine, world 
var ground;
var ball;
var ball2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var groundOption = {
    isStatic: true
  }
ground = Bodies.rectangle(200,390,400,10, groundOption);
World.add(world, ground);
var ballOption = {
  restitution : 1.0
}
ball = Bodies.circle(200,200, 20, ballOption)
World.add(world, ball);
ball2 = Bodies.circle(300,200,20, ballOption)
World.add(world, ball2);
}

function draw() {
  background("blue");  
  Engine.update(engine)
  fill("red")
 rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10)
 ellipseMode(RADIUS)
 ellipse(ball.position.x, ball.position.y, 20, 20);
 ellipse(ball2.position.x, ball2.position.y, 20, 20);
}