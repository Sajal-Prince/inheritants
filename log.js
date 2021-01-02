//log is the child class for parent BaseClass.
class Log extends BaseClass{

    constructor(x, y,height,angle) {

      //super means parent.
      super(x,y,20,height,angle);

      //overriding the image in the parent class.
      this.image = loadImage("sprites/wood2.png")

      //Giving an angle for the object.
      Matter.Body.setAngle(this.body,angle);
    }
  };
  