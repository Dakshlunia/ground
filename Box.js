class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic: false
          }
          
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        var pos= this.body.position;
        var angle = this.body.angle;
        push ();
        rotate (angle);
        translate (pos.x,pos.y);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop ();
        
    }
}