var hr,min,sec;
var hrAngle,minAngle,secAngle;
var dot;
var tick_tock;
function preload(){
tick_tock = loadSound("Tick_Tock.mp3")
}
function setup() {
  createCanvas(800,800);
  angleMode(DEGREES)

 tick_tock.play();
 tick_tock.loop();
 tick_tock.volume = 0.3;

}


function draw() {
  background(0);
 

  translate(400,400)
    rotate(-90)

  hr = hour();
  min = minute();
  sec = second();

  secAngle = map(sec,0,60,0,360)  
  minAngle = map(min,0,60,0,360)  
  hrAngle = map(hr % 12,0,12,0,360) 
  
  push();
  rotate(secAngle);
  stroke(255,0,0)
  strokeWeight(14);
  line(0,0,200,0);
  pop();

  push();
  rotate(minAngle);
  stroke(0,255,0)
  strokeWeight(14);
  line(0,0,150,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255)
  strokeWeight(14);
  line(0,0,100,0);
  pop();

  stroke(255,0,255);
  point(0,0)

  strokeWeight(19)
  noFill();

  //seconds
  stroke(255,0,0);
  arc(0,0,600,600,0,secAngle);
  //minutes
  stroke(0,255,0);
  arc(0,0,560,560,0,minAngle);
  //hour
  stroke(0,0,255);
  arc(0,0,520,520,0,hrAngle);

  
  stroke(120,120,120);
  circle(0,0,5)
  drawSprites();


}