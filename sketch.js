const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup()
{
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2, height/4, 200, 20);

	bobDiameter = 40;
	twiceBobDiameter = bobDiameter * 2;
	startBobPositionX = width/2;
	startBobPositionY = height/4 + 300;

	bob1 = new Bob(startBobPositionX-twiceBobDiameter, startBobPositionY, bobDiameter);
	bob2 = new Bob(startBobPositionX-bobDiameter, startBobPositionY, bobDiameter);
	bob3 = new Bob(startBobPositionX, startBobPositionY, bobDiameter);
	bob4 = new Bob(startBobPositionX+bobDiameter, startBobPositionY, bobDiameter);
	bob5 = new Bob(startBobPositionX+twiceBobDiameter, startBobPositionY, bobDiameter);

	rope1 = new Rope(bob1.body, roof.body, -twiceBobDiameter, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, bobDiameter, 0);
	rope5 = new Rope(bob5.body, roof.body, twiceBobDiameter, 0);

	Engine.run(engine);
}

function draw()
{
	background(230);
	rectMode(CENTER);

	roof.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -50, y: -50});
  	}
}

function drawLine(constraint)
{
	bobPos = constraint.bodyA.position;
	roofX = constraint.bodyB.position.x + constraint.pointB.x;
	roofY = constraint.bodyB.position.y + constraint.pointB.y;
	line(bobPos.x, bobPos.y, roofX, roofY);
}