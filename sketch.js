const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
 var world,engine,box,ground,ball;
 function setup()
 {
   createCanvas(600,400);
   engine = Engine.create();
   world = engine.world;
   ground=new Ground(300,380,600,20);
   box=new Box(300,150,50,100);
   box1=new Box(300,50,50,50);
 }
 function draw()
 {
   background(0);
   Engine.update(engine);
   ground.display();
   box.display();
   box1.display();
 }