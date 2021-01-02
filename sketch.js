//NameSpacing for Matter.Engine , Matter.World , Matter.Bodies.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//Declaring Variables
var myengine, myworld;
var box1,box2;
var pig1;
var log1;
var box3 ,box4 , pig2 , log2;
var box5 , log3 , log4;
var bird1;
var backgroundImage;

function preload()
{
    //loading Image for Background
backgroundImage = loadImage("sprites/bg.png");
}

function setup(){
//Creating Images.
    var canvas = createCanvas(1200,400);

//Ceating myengine using Engine.
    myengine = Engine.create();

//myworld is myengines world.
    myworld = myengine.world;

//Creating Boxes , Pig and Log for the first floor.
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(810,320);
    log1 = new Log (810,260,300,PI/2);

//Creating Boxes , Pig and Log for the second floor.
    box3 = new Box(700,230,70,70);
    box4 = new Box(920,230,70,70);
    pig2 = new Pig(810,230);
    log2 = new Log(810,150,300,PI/2);

//Creating Boxes and Log for the third floor.
    box5 = new Box(820,130,70,70);
    log3 = new Log(760,130,150,PI/7);
    log4 = new Log(830,130,150,-PI/7);

//creating Bird.
    bird1 = new Bird(50,50);
}

function draw(){
    //giving the Background Image.
    background(backgroundImage);

    //Updating the Engine Continuesly
    Engine.update(myengine);

    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);

    //Displaying all the Objects.
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log4.display();
    log3.display();
    bird1.display();
}