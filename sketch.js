
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5
var roof
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies here
	roof = new Roof(100,500,30,300)
	bob1 = new Bob(110,550,50,50)
  rope1 = new Bob(bob1.body,roof.body,0)
	bob2 = new Bob(180,550,50,50);
	bob3 = new Bob(250,550,50,50)
	bob4 = new Bob(320,550,50,50)
	bob5 = new Bob(390,550,50,50)
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  rope1.display(); 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
}



