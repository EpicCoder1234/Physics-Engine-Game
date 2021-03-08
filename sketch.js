const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bird;
var bgImage;

var score;



var gameState = "onSling";

function preload() {
    bgImage = loadImage("bg.png");
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);

    block1 = new Block(400,370,50,50);
    block2 = new Block(400,320,50,50);
    block3 = new Block(400,270,50,50);
    block4 = new Block(400,220,50,50);
    block5 = new Block(400,170,50,50);
    block6 = new Block(400,120,50,50);
    block7 = new Block(400,70,50,50);
    blocker = new Blocker(1000,200,100,30);
    rope = new Rope(blocker.body,{x:1000,y:200});
    
    
    Engine.run(engine);
}

function draw(){

    background(bgImage);
    //update engine
    Engine.update(engine);

    //Display here
    ground.display(); 
    block1.condition();
    block2.condition();
    block3.condition();
    block4.condition();
    block5.condition();
    block6.condition();
    block7.condition();
    blocker.display();
    rope.display();

    //condition
    console.log(block2.body.speed);

    text("Try to knock all the blocks down in one hit!",540,100);
    text("Score")

    if(block1.body===null){
        score = score+1;
    }
    if(block2.body===null){
        score = score+1;
    }
    if(block3.body===null){
        score = score+1;
    }
    if(block4.body===null){
        score = score+1;
    }
    if(block5.body===null){
        score = score+1;
    }
    if(block6.body===null){
        score = score+1;
    }
    if(block7.body===null){
        score = score+1;
    }
}

function mouseDragged(){
    if(gameState=="onSling"){
        Matter.Body.setPosition(blocker.body,{x:mouseX, y:mouseY});
    }
}
function mouseReleased(){
    rope.fly();
    gameState = "end";
}