
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,200,600,50);

	bob1 = new Bob(600,600,100);
	bob2 = new Bob(700,600,100);
	bob3 = new Bob(800,600,100);
	bob4 = new Bob(900,600,100);
	bob5 = new Bob(1000,600,100);

	rope1 = new Rope(bob1.body,roof.body,-100*2,roof.body.position.y);
	rope2 = new Rope(roof.body,bob2.body);
	rope3 = new Rope(roof.body,bob3.body);
	rope4 = new Rope(roof.body,bob4.body);
	rope5 = new Rope(roof.body,bob5.body);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  	background(100);

  	roof.display();
  	bob1.display();
  	bob2.display();
  	bob3.display();
  	bob4.display();
  	bob5.display();
  	rope1.display();
  	rope2.display();
  	rope3.display();
  	rope4.display();
	rope5.display();

	/*line(roof.body.position.x - 200, roof.body.position.y, bob1.body.position.x, bob1.body.position.y-50);
	line(roof.body.position.x - 100, roof.body.position.y, bob2.body.position.x, bob2.body.position.y-50);
	line(roof.body.position.x + 000, roof.body.position.y, bob3.body.position.x, bob3.body.position.y-50);
	line(roof.body.position.x + 100, roof.body.position.y, bob4.body.position.x, bob4.body.position.y-50);
	line(roof.body.position.x + 200, roof.body.position.y, bob5.body.position.x, bob5.body.position.y-50);*/

 
}



