var img1;
//
var Xjg1 = 790;
var Djg1 = 1;
var Xjg2 = 790;
var Djg2 = 1;


function setup() {
  createCanvas(900,500);
 img1 = loadImage('2.-scaled.jpg')
}

function draw() {
  background(img1);
  
  textSize(50);
  text("🚛",Xjg1,475);
  
  textSize(40);
  text("🚜",Xjg2,490);
  
  


if(Xjg1 < 200){
  text("jogador1 venceu!",50,100);
    noLoop();
  }

if(Xjg2 < 200){
  text("jogador2 venceu!",50,100);
    noLoop();}

else if(keyCode === LEFT_ARROW){
    Xjg1=Xjg1 - 7;
  }
  if(keyCode === RIGHT_ARROW){
    Xjg2=Xjg2 - 7;
  }
}
