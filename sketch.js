
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin;
function preload()
{
		
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	paper = new Paper(200,200,20,20); 
	dustbin = new Paper(200,30,50,130);
	
	
	Engine.run(engine);
	
}


function draw() {

  background(0);
  Engine.update(engine);
  paper.display();
  dustbin.display();
  
  drawSprites();
 
}



