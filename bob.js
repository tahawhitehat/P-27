class Bob{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
    
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);

	}
	display()
	{
		    var pos = this.body.position;
			var angle = this.body.angle;
pos.x = mouseX;
pos.y = mouseY;

			push()
			translate(pos.x,pos.y);
			rotate(angle);
			imageMode(CENTER)
			strokeWeight(4);
			fill("purple")
		
			//image(this.image, 0, 0, this.width, this.height);

			pop()


			
	}

}