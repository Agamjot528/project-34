const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
var bobObject1,bobObject2,bobObject3 ,bobObject4,bobObject5;
var ground;
var roofObject ; 

function preload()
{

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1300, 700);

Pendulum1=new Pendulum(300,350,50);
Pendulum2=new Pendulum(350,350,50);
Pendulum3=new Pendulum(400,350,50);
Pendulum4=new Pendulum(450,350,50);
Pendulum5=new Pendulum(500,350,50);
ground = new Roof(400,200,300,20);
sling1= new Sling(Pendulum1.body,ground.body,-50*2,0);
sling2= new Sling(Pendulum2.body,ground.body,-25*2,0);
sling3= new Sling(Pendulum3.body,ground.body,-0*2,0);
sling4= new Sling(Pendulum4.body,ground.body,25*2,0);
sling5= new Sling(Pendulum5.body,ground.body,50*2,0);







	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("blue");

  drawSprites();

  Pendulum1.display();
  Pendulum2.display();
  Pendulum3.display();
  Pendulum4.display();
  Pendulum5.display();
	ground.display();
	sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();


}

function mouseDragged(){
    Matter.Body.setPosition(Pendulum1.body, {x: mouseX, y:mouseY});
}