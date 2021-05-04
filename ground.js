class Ground

{
        
    constructor(){
        var options = {
            isStatic :true
           
        }
        this.ground = Bodies.rectangle(200, 380, 400, 20, options);
        World.add(world,this.ground)
    }
    display(){
        var pos=this.ground.position;
        fill("brown")
        rectMode(CENTER);
        rect(pos.x,pos.y,400,20);   
    }
}
