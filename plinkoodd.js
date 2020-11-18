class ballo
{
    constructor(x,y,r)
    {
        this.body=Body.circle(x,y,r)
        this.r=r;
        World.add(world,this.body);
    }
    display()
    {
        push(this.body);
        ellipseMode(CENTER);
        for(var i=this.body.position.x;i<=490;i=i+45){
        ellipse(i,this.body.position.y,this.r)
    }
    }
}