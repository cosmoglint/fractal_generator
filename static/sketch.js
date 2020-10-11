
function reportsize(){
  init();
}

window.addEventListener('resize',reportsize);

function randcolor(){
  var r = random(0,255);
  var g = random(0,255);
  var b = random(0,255);
  console.log(r,g,b);
  return color(r,g,b);
}


function fractal(start,end,ang){
  
}

function init(){
  ww = window.innerWidth;
  wh = window.innerHeight;
  canvas = createCanvas(ww,wh);
  background('black');
  canvas.position(0,0);
  canvas.style('z-index','-1');
}

function setup(){
  init();
}


function draw(){

}
