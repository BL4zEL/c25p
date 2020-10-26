class Base{
  constructor(x, y, width, height) {
    var options = {
        
        'friction':0.3,
        'isStatic':true
      }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("sprites/dustbingreen.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    image(this.image,pos.x-79,pos.y-155,170,160)
  }
};

