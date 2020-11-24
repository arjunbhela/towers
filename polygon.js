class Poly {
    constructor(x,y,width,height) {
      var options = {
          isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("cropped-Hexagon.png")
      World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        fill(255,192,203);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        }
    }