const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var thunder, thunder1,thunder2,thunder3,thunder4 ;
var engine , world , maxDrops ;
var rand ;
var maxDrops = 300
var thunderCreatedFrame = 0 ;


function preload(){
thunder1 =loadImage("sprites/1.png") ;
thunder2 =loadImage("sprites/2.png")
thunder3 =loadImage("sprites/3.png")
thunder4 =loadImage("sprites/4.png")
}

function setup(){
  engine = Engine.create() ;
  world = engine.world ;

  createCanvas(1000,1000) ;
  umbrella = new Umbrella(200,500) ;
  
  if(frameCount% 150 === 0){

    for(var i = 0 ; i< maxDrops; i++ ){

        maxDrops.push(new CreateDrop(random(0,1000), random(0,1000)))

    }

  }
    
}

function draw(){
    Engine.update(engine) ;
    background(0) ;

    rand = Math.round(random(1,4)) ;
    if(frameCount%80 === 0){
     thunderCreatedFrame= frameCount  ;
     thunder= createSprite(random(10,370), random(10,30), 10,10);
     switch(rand){
         case 1 : thunder.addImage(thunder1) ;
         break ;
         case 2 : thunder.addImage(thunder2) ;
         break ;
         case 3 : thunder.addImage(thunder3) ;
         break ;
         case 4 : thunder.addImage(thunder4) ;
         break ;
         default : break ;

        }
        thunder.scale = random(0,3,0,6) ;
    }
        if(thunderCreateFrame+ 10 === frameCount && thunder)
        {
          thunder.destroy()
        }

        umbrella.distroy() ;

        for(var i = 0; i<maxDrops; i++)
        {
           drops[i].showDrop() ;
           drops[i].updateY() ;
        }
        drawSprites() ;
    }
  
 // function mouseDragged(){
    //   Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
    // }
    
    
    // function mouseReleased(){
    //   slingshot.fly();
    // }
    
    // function keyPressed(){
    //   if( keyCode === 32 ){
    //      slingshot.attach(ball );
    //   }
    // }
