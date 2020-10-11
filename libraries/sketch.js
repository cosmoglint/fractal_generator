
function reportsize(){
  init()
}

window.addEventListener('resize',reportsize)

function init(){
  ww = window.innerWidth;
  wh = window.innerHeight;
  canvas = createCanvas(ww,wh);
  canvas.position(0,0);
  canvas.style('z-index','-1');
}

function setup(){
  init();
}


function draw(){

}
