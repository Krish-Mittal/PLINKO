class part
{
    constructor(x,y,r)
    {
        var op =
        {
            isStatic=false,
        }
        this.body=Body.circle(x,y,r,op)
        this.r=r;
        this.color=random(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
    }
    display()
    {
        fill(this.color)
        ellipseMode(CENTER);
       
        ellipse(this.body.position.x,this.body.position.y,this.r)
    }
    
}
