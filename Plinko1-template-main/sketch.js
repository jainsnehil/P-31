var Engine = Matter.Engine,
  World = Matter.World,
  //Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var a=[1,2,3,4]
console.log(a[1])
for(var i=0;i<a.length;i++){
  a[i]
}
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

 





  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects

  for(var i=75;i<=width;i=i+50){
     plinkos.push(new Plinko(i,275))
  }

  
  //create 4th row of plinko objects
  for(var i=50;i<=width;i=i+50){
    plinkos.push(new Plinko(i,375))
  }

 
  //create particle objects
 
  
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
for (var k = 0; k <11; k++) {
    divisions[k].display();
    console.log(divisions.length)
  }
if(frameCount%90===0){
  for(var i=0;i<=30;i++){
    particles.push(new Particle(random(100,700),i,10))
 }



}

for(var i=0;i<particles.length;i++){
  particles[i].display();
}





  //display the paricles 

}