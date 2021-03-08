class Block{
    constructor(x,y,w,h){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, w, h , options);
        this.width = w
        this.height = h
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        stroke("black");
        strokeWeight(2);
        rect(0,0, this.width, this.height);
        pop();
    }
    condition(){
        if(this.body.speed<5){
            this.display();
        }
        else{
            World.remove(world, this.body);
        }
    }
}