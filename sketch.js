const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,rubber,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    hammer = new Hammer(10,100);
    plane = new Plane(600,height,1200,20)
    rubber = new Rubber(100,500,20)  
    stone = new Stone(600,height-50,50,20)



  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    stone.display();
    rubber.display();
    plane.display();
    hammer.display();

    
 
}