class Umbrella{

   constructor(x,y) {

       var option= {
           isStatic: true ,

       }
       this.image= loadAnimation("sprites/walking_1.png, sprites/walking_2.png, sprites/walking_3.png, sprites/walking_4.png, sprites/walking_5.png, sprites/walking_6.png, sprites/walking_7.png, sprites/walking_8.png")
       this.image.frameDelay= 20 ;

       this.umbrella = Bodies.circle(x,y,50,option) ;
       this.radius = 50;
       World.add(world,this.umbrella) ;

   }
   display(){
      var p = this.umbrella.position ;
      imageMode(CENTER) ;
      amination(this.image, p.x ,p.y ) ;

   }
}
