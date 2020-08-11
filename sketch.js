const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var Sling;

function setup() {
  canvas = createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  
  Land= new ground(500,795,1000,10);
  Stand= new ground(597,550,316,15);

  Box1=new box(463,524)
  Box2=new box(493,524);
  Box3=new box(523,524);
  Box4=new box(553,524);
  Box5=new box(583,524);
  Box6=new box(613,524);
  Box7=new box(643,524);
  Box8=new box(673,524);
  Box9=new box(703,524);
  Box10=new box(733,524);

  Box11=new box(493,510);
  Box12=new box(523,510);
  Box13=new box(553,510);
  Box14=new box(583,510);
  Box15=new box(613,510);
  Box16=new box(643,510);
  Box17=new box(673,510);
  Box18=new box(703,510);

  Box19=new box(523,490);
  Box20=new box(553,490);
  Box21=new box(583,490);
  Box22=new box(613,490);
  Box23=new box(643,490);
  Box24=new box(673,490);

  Box25=new box(553,470);
  Box26=new box(583,460);
  Box27=new box(613,450);
  Box28=new box(643,440);

  Box29=new box(583,410);
  Box30=new box(613,410);

  Box31=new box(597,310);

  //Stone=Bodies.circle(200,200,20)
  //World.add(world,Stone);

  Stone=new polygon(300,500,20);

  Sling=new Shot(Stone.body,{x:300,y:200});

  //Engine.run(engine);
}

function draw() {
  background("black");
  Engine.update(engine);  

  Land.display();
  Stand.display();
  
 Stone.display();
 Sling.display();
  
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  Box8.display();
  Box9.display();
  Box10.display();

  Box11.display();
  Box12.display();
  Box13.display();
  Box14.display();
  Box15.display();
  Box16.display();
  Box17.display();
  Box18.display();

  Box19.display();
  Box20.display();
  Box21.display();
  Box22.display();
  Box23.display();
  Box24.display();

  Box25.display();
  Box26.display();
  Box27.display();
  Box28.display();

  Box29.display();
  Box30.display();

  Box31.display();

  mouseDragged();
  mouseReleased();
}

function mouseDragged(){
  Matter.Body.setPosition(Stone.body,{x:mouseX , y:mouseY});
}


function mouseReleased(){
  Sling.fly();
}