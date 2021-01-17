class mangoes
{

      constructor(x, y)
      {

        var options = 
        {

            isStatic: true,
            restitution: 0,
            friction: 1

        }

        this.body = Bodies.circle(x, y, 10, options);
        this.x = x;
        this.y = y;
        this.image = loadImage("Plucking mangoes/mango.png");
        this.scale = 0.2;
        World.add(world, this.body);

      }

      display()
      {

        var pos = this.body.position;

        var angle = this.body.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);

        imageMode(CENTER);
        image(this.image, 0, 0, 30, 30);
        
        pop();

      }

}