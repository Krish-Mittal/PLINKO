const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Bodies;

var div1,bd,br,bl,pl1,pl2,pl3,pl4,g;
var particles;
function setup() {

  createCanvas(510,800);
  
  engine=Engine.create();
  world=engine.world;
  
  //division
  div1=new bar(200,750,15,400);
  
  //border
  bd=new ground(400,795,800,10);
  br=new ground(505,400,10,800);
  bl=new ground(-2,400,10,800);
  g=new ground(400,790,800,10)

  //plinko line
  pl1=new balle(35,100,10);
  pl2=new ballo(15,200,10);
  pl3=new balle(35,300,10);
  pl4=new ballo(15,400,10);
 
    //particles=new part(200,8,12);

}

function draw() {
  background("black"); 
  
  
  div1.display(); 
 
  fill("white");
  g.display();
  
  fill("red");
  bd.display();
  br.display();
  bl.display();

  pl1.display();
  pl2.display();
  pl3.display();
  pl4.display();
 // particles.display();
  drawSprites();
}