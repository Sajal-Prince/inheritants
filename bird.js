//bird is the child class for parent BaseClass.
class Bird extends BaseClass{
    constructor(x, y) {
     super(x,y,50,50);
     this.image = loadImage("sprites/bird.png");
      
    }
   
   display()
   {
    //making the bird move with the mouse.
     this.body.position.x = mouseX;
     this.body.position.y = mouseY;
    //calling the parent class to display again.
     super.display();
   }
  };
  