
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
	treeImage = loadImage("Plucking mangoes/tree.png");
	boyImage = loadImage("Plucking mangoes/boy.png");

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(600, 730, 1200, 80, {isStatic: true});
	World.add(world, ground);

	tree = createSprite(900, 420, 200, 20);
	tree.addImage(treeImage);
	tree.scale = 0.4;

	boy = createSprite(200, 600);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	mango1 = new mangoes(1000, 300);
	mango2 = new mangoes(950, 200);
	mango3 = new mangoes(850, 250);
	mango4 = new mangoes(900, 350);
	mango5 = new mangoes(750, 330);
	mango6 = new mangoes(830, 320);
	mango7 = new mangoes(930, 270);
	mango8 = new mangoes(1070, 350);

	stone1 = new stone();

	elastic1 = new elastic(stone1.body, {x: 150, y: 540});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  drawSprites();

  rectMode(RADIUS);
  fill(130, 69, 19)
  rect(ground.position.x, ground.position.y, 1200, 80);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone1.display();

  elastic1.display();

  detectCollison(stone1, mango1);
  detectCollison(stone1, mango2);
  detectCollison(stone1, mango3);
  detectCollison(stone1, mango4);
  detectCollison(stone1, mango5);
  detectCollison(stone1, mango6);
  detectCollison(stone1, mango7);
  detectCollison(stone1, mango8);

}

function mouseDragged()
{

    Matter.Body.setPosition(stone1.body, {x: mouseX, y: mouseY});

}

function mouseReleased()
{

    elastic1.Fly();

}

function detectCollison(lstone, lmango)
{

	var lmangoPosition = lmango.body.position;
	var lstonePosition = lstone.body.position;

	var distance = dist(600, 600, lmangoPosition.x, lmangoPosition.y);

	if(distance <= 60)
	{

		Matter.Body.setStatic(lmango.body, false);

	}

	//console.log(distance);

}

function keyPressed()
{

	if(keyCode === 32)
	{

		Matter.Body.setPosition(stone1.body, {x:150, y:540});
		elastic1.attach(stone1.body);

	}

}