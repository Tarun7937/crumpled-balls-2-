class Dustbin {
    constructor (x,y,width,height){
        var options  = {
          isStatic: true }
       this.width = width 
       this.height  = height 
       this.body  = Bodies.rectangle (x,y,width,height,options);   
       this.image = loadImage("images/dustbingreen.png");
       World.add(world,this.body);
      

  }
  display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
      imageMode(CENTER);
     // fill(this.colour);
      image(this.image,0, 0, this.width, this.height);
      pop()
  }
}
