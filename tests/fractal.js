let slid;
var a  = 0;
var i = 0;
function setup() {
  createCanvas(400,400);
  
  slid = createSlider(0,2 * PI,100,0.01);
  
  
}

function draw() {
  background(200);
  var n = height*0.4;
  translate(width/2,height);
  a = a+((2*PI)/(360-i));
  if (i==360){
    i = 0;
    a = 0;
  }
  console.log(((2*PI)/(360-i)));
  i = i + 1;
  recu(n);


}

function recu(n){
  line(0,0,0,-n);
  translate(0,-n);
  if (n>25) {
    push();
    rotate(a);
    recu(n*0.6);
    pop();
    push();
    rotate(-a);
    recu(n*0.6);
    pop();
    push();
    rotate(a/3);
    recu(n*0.6);
    pop();
    push();
    rotate(-a/3);
    recu(n*0.6);
    pop();

  }
}
