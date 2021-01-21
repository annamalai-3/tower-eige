const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine,world;
var ball;
var score = 0;
var hour;
function preload(){

  


}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  
 ball = new Ball(130,200,30,30);
 box1 = new Box(300,200,30,30);
 ground=new Ground(300,210,120,10);
ground1 = new Ground(130,210,70,10);
box2 = new Box(310,200,30,30);
box3 = new Box(295,200,30,30);
box4 = new Box(297,206,30,30);
box5 = new Box(290,206,30,30);
ground2 = new Ground(420,190,120,10);
box6 = new Box(295,190,30,30);
box7 = new Box(420,180,30,30);
box8 = new Box(410,180,30,30);
box9 = new Box(430,180,30,30);
box10 = new Box(415,170,30,30);
box11 = new Box(420,170,30,30);
box12 = new Box(420,160,30,30);
chain = new Slingshot(ball.body,{x:130,y:200});
    box1.Score();
    box2.Score();
    box3.Score();
    box4.Score();
    box5.Score();
    box6.Score();
    box7.Score();
    box8.Score();
    box9.Score();
    box10.Score();
    box11.Score();
    box12.Score();



}






  




function draw(){
  background(255,255,255);  
  gettime();
  text("HOUR:"+hour,300,250);

  text("SCORE:"+score,130,250); 
  Engine.update(engine);
  ball.display();
  box1.display();
 ground.display();
 ground1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 ground2.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 chain.display();
box1.Score();
box2.Score();
box3.Score()
box4.Score();
box5.Score();
box6.Score();
box7.Score();
box8.Score();
box9.Score()
box10.Score();
box11.Score();
box12.Score();
  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}
function keyPressed(){
if(keyCode===32){
chain.reattach(ball.body);
}
}
  async function gettime(){

var response  = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
 console.log(responseJSON);
  var datetime = responseJSON.datetime;
 hour = datetime.slice(11,16);
  console.log(hour);
   
  }