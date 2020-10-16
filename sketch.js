const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(200,200,50,50);
    ground= new Ground(600,380,1200,50);
    box2= new Box(230,100,50,150);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(100,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    ground.display();
    box2.display();
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}