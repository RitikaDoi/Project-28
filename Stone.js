class stone
{

    constructor()
    {

        var options = 
        {

            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2

        }

        this.body = Bodies.circle(600, 600, 50, options);
        this.image = loadImage("Plucking mangoes/stone.png");
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
        image(this.image, 0, 0, 50, 50);
        
        pop();

    }

}