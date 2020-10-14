class Divisions{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = width;
        this.h = height;
        World.add(world, this.body);
    }display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
}