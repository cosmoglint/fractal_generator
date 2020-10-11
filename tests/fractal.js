let slid;

var i = 0;
function setup() {
  createCanvas(400,400);
  var p  = PI;
  var angle = PI/4;

  slid = createSlider(0,4*p ,100,0.01);


}

function draw() {
  background(200);
  var n = height*0.4;
  translate(width/2,height); //move the origin to root of the tree
  // a = ((2*PI)/(360-i));
  a = slid.value();
  // if (i==360){
  //   i = 0;
  //   a = 0;
  // }
  // console.log(((4*PI)/(360-i)));
  // i = i + 1;
  recu(n);


}

function recu(n){
  line(0,0,0,-n);
  translate(0,-n);
  if (n>10) {
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
