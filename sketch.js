
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var groundobj ;
var dustbinobj;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)

//var Render 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundobj = new Ground(780,680,1700,20,"brown");
	World.add(world,groundobj)
	dustbinwall1 = new Dustbin(530,645,120,15);
	World.add(world,dustbinwall1);
	dustbinwall2 = new Dustbin(585,595,15,100);
	World.add(world,dustbinwall2);
	dustbinwall3 = new Dustbin(475,595,15,100);
	World.add(world,dustbinwall3);
    // console.log(dustbinobj1)
	//dustbinobj =  new Dustbin();
	paperobj = new Paper(200,435,18);
	console.log(paperobj)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundobj.display();
 // fill("white")
  dustbinwall1.display();
  //dustbinwall2.display()
  //dustbinwall3.display(;
	paperobj.display();
  
  drawSprites();
 //keyPressed()
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:40,y:-43})
	}
}