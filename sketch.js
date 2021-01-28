var cat, catImg;
var mouse,mouseImg;
var bg,bgImg
var c2img;
var m2img;



function preload() {
    //load the images here
    catImg = loadAnimation ("images/cat1.png","images/cat2.png", "images/cat3.png");
    mouseImg = loadAnimation ("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
    bgImg = loadImage ("images/garden.png");
    c2img = loadAnimation ("images/cat4.png");
    m2img = loadAnimation ("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400,1000,800);
    bg.addImage (bgImg);

    cat = createSprite(800,600,10,10);
    cat.addAnimation ("c1",catImg)
    cat.addAnimation ("c2",c2img)
    cat.scale = 0.2;
    
    mouse = createSprite (100,600,10,10);
    mouse.addAnimation ("m1",mouseImg);
    mouse.addAnimation ("m2",m2img);
    mouse.scale = 0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x < cat.width/2+ mouse.width/2){
        cat.velocityX = 0
        mouse.changeAnimation("m2", m2img)
        cat.changeAnimation("c2",c2img)
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyIsDown(LEFT_ARROW)){
    cat.velocityX = -2
    mouse.changeAnimation("m1", mouseImg);
    cat.changeAnimation("c1",catImg);
}

}
