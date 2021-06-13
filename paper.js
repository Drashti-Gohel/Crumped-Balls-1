class Paper{
    constructor(x,y,radius){
        var options = {
            restitutions:0.3,
            friction:0.2,
            density:1.2,
            isStatic:true
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=30;
        

    }
    display(){
        ellipse(this.body.position.x,this.body.position.y,this.radius,30);
    }
}