const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var plat,plat2
var box1,box2,box3,box4,box5,box6,box7,box8,box9
var box1b,box2b,box3b,box4b
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
	//pink
	plat = new Platform(400,450,300,30)
	plat2 = new Platform(700,250,300,30)
	box1 = new Box(400,440,50,60)
	box2 = new Box(440,440,50,60)
	box3 = new Box(360,440,50,60)
	box4 = new Box(320,440,50,60)
	box5 = new Box(480,440,50,60)
	box6 = new Box(440,390,50,60)
	box7 = new Box(400,390,50,60)
	box8 = new Box(360,390,50,60)
	box9 = new Box(400,340,50,60)

	//blue
	box1b = new BoxB(700,240,50,60)
	box2b = new BoxB(660,240,50,60)
	box3b = new BoxB(740,240,50,60)
  box4b = new BoxB(700,200,50,60)
  poly = new Poly(100,200,50,50)
  slingShot = new Slingshot(poly.body,{x:140,y:200})
}

function draw() {
  rectMode(CENTER);
  background(56,44,44);
  plat.display()
  plat2.display();
  box1.display();
  box3.display()
  box2.display();
  box4.display()
  box5.display()
  box6.display()

  box7.display()
  box8.display()
  box6.display()
  box9.display();

  box1b.display();
  box2b.display()
  box3b.display()
  box4b.display()
poly.display()
slingShot.display()
  fill("white")
  textSize(20)
  text("Click space for another turn",330,50)
  drawSprites();
}

function mouseDragged() {
Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}