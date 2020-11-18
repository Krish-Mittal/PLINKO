class bar
{
    constructor(x,y,w,h)
    {
        var op=
            {
                isStatic:true
            }
            this.body=Body.rectangle(x,y,w,h,op);
            this.h=h;
            this.w=w;
            World.add(world,this.body);
    }
    display()
    {
        fill("skyblue")
        push(this.body)
     rectMode(CENTER);
     for(var i=0;i<=800;i=i+100){
     rect(i,this.body.position.y,this.w,this.h);        
    }}
}