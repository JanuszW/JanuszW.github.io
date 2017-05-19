
var array = [];
var a = true;

function setup(){
  createCanvas(500, 500);
  background(randNum(), randNum(), randNum());
  frameRate(300);
  rectMode(CENTER);
}

function draw() {
  for(var i = 0; i<array.length; i++){
      array[i].display();
      array[i].move();
  }
  Square(48);
}

function randNum() {
  return random(0,255);
}

function Square(f){
    var endText = "THE END";
    for (var q = 0; q < array.length; q++){
      if (q*7 <= 400) {
        fill(q*15);
        rect(height/2, width/2, q*7, q*7);
      }
      else {
        textSize(f);
        fill(0);
        textAlign(CENTER, CENTER);
        textFont("Times New Roman");
        text(endText,width/2,height/2);
        a = false;
       }
    }
}


function mousePressed() {
  if (mouseX <= 500 && mouseX >= 0 && mouseY <= 500 && mouseY >= 0){
    if (a === true) {
      array.push(new Ellipse(mouseX, mouseY, 5, 5, color(randNum(), randNum(), randNum())));
    }
  }
}

function Ellipse(x1, y1, x2, y2, c1){
  this.stroke = c1
  this.x1 = x1;
  this.y1 = y1;
  this.move = function() {
    this.x1 = this.x1 + random(-1.5, 1.5);
    this.y1 = this.y1 + random(-1.5, 1.5);
  }
  this.display = function() {
    fill(0);
    stroke(this.stroke)
    ellipse(this.x1, this.y1, 1, 1);
  }
}
