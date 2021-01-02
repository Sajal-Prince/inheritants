//Creating a Parent class for other child classes.
class BaseClass {
    //Initializing the properties using constructor.
    constructor(x, y,width,height,angle) {
        //passing the properties of the physics Engine.
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }

      //Creating a rectangular body.
      this.body = Bodies.rectangle(x, y,width ,height ,options);

      //making this.width and this.height.
      this.width = width;
      this.height = height;

      //Creating Images property.
      this.image = loadImage("sprites/base.png");

      //adding body to the world.
      World.add(myworld, this.body);
    }
    display(){
      
    //NameSpacing angles.
      var angle = this.body.angle;

    //giving new settings.
      push();
    //Making box rotate at it own axis. So the positions keep changing.
      translate(this.body.position.x, this.body.position.y);
    //Rotating object at an angle.
      rotate(angle);
    //Making the image at center.
      imageMode(CENTER);
    //Making Borders.
      strokeWeight(4);
      stroke("blue");
    //coloring the object.
      fill("red");
    //function for using the image for an object.
      image(this.image, 0, 0, this.width, this.height);
    //reveting back to old settings.
      pop();
    }
  };
  