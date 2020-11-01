var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var dustbinImage;
function preload(){
dustbinImage=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;


	ball=new Ball(200,450,40);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 boxPosition=width/2-100;
	 boxY=610;
	 boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	 boxleftSprite.shapeColor="white"

	 boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	 World.add(world,boxLeftBody);

	 boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	 boxBase.shapeColor="white"

	 boxbottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20,200,20,  {isStatic:true} );
	 World.add(world,boxbottomBody);

	 boxrightSprite=createSprite(boxPosition+200, boxY, 20,100);
	 boxrightSprite.shapeColor="white"

	 boxrightBody = Bodies.rectangle(boxPosition+200-20, boxY,20,100,  {isStatic:true} );
	 World.add(world,boxrightBody);






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
  imageMode(CENTER);
  image(dustbinImage,boxPosition+200,boxY,100,100);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});


  }
}



