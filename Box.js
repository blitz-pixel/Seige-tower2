class box {
  constructor(x, y){

   var options={
       'restitution': 0.4,
       //'isStatic': true
   }

    this.body=Bodies.rectangle(x, y, 30, 40, options);
    this.w= 30;
    this.h= 40;
    World.add(world, this.body);
  }
display(){
var pos=this.body.position;
var angle=this.body.angle;
push()
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
fill("brown")
rect(0,0,this.w,this.h);
pop();
}
};
