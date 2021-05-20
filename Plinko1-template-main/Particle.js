class Particle{
    constructor(x,y,r){
        var options={
            friction:0.9,
            density:0.5,
            restitution:0.3,
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
        ellipseMode (RADIUS)
        fill (this.color)
        ellipse(this.body.position.x,this.body.position.y,this.r)
        //this.color
    }
}