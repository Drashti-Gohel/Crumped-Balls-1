
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,540,30);
	
	ground = createSprite(400,560,800,10);
	ground.shapeColor="yellow";
	World.add(world,ground);

	leftBody = new Dustbin(450, 510, 20, 100  );
 	World.add(world, leftBody);

	rightBody = new Dustbin(650, 510, 20, 100  );
 	World.add(world, rightBody);

	bottomBody = new Dustbin(550, 550, 180, 20 );
 	World.add(world, bottomBody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  leftBody.display();
  rightBody.display();
  bottomBody.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:85,y:-85});

	}
}



