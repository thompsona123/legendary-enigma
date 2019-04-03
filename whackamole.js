let x = 00;
let y = 00;
let score = 0;
let goodMoleClicked;
let badMoleClicked;
let timer = 5;
let grid = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
let boxClicked;
let rmousx
let rmousy

function mousePressed(){
  let rmousx = mouseX
  let rmousy = mouseY
}

function setup() {
  createCanvas(750, 750);
  
  
  

}
function draw(){
 
  background(255);
  setupGame();
  x = 0;
  y = 0;
if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  
  }
  
text("time: " + timer, width/2, height/2);
  if (timer == 0) {
    background(255);
    text("GAME OVER", width/2, height*0.5);
   
  }
  
}


function setupGame(){

  
    
scoreAndTime();
  drawGrid();
   
}

function drawMoles(){
moleClicked();
goodMole();
badMole();
}

function drawGrid(){
  
  while(x <= width) {
    line(x,0,x,width);
    x = x + width/3;
  }
    while(y <= height){
    line(0,y,height,y);
    y = y + height/3;
    }
  line(width-1,0,width-1,height);
  line(0,height-1,width,height-1);
}

function scoreAndTime(){
  if(goodMoleClicked === true){
    score = score + 1;
     }
  if(badMoleClicked === true){
    score = score - 3
  }
  //adjusts score based on what type of mole was clicked on
  if(score < 0){
    score = 0;
  }
  //prevents negative scores
  
 
}

function moleClicked(){
  for(i = 0; i < 751; i + 250){
    if(rmousx > 0 && rmousx < i
  }
    
}

function goodMole(){
}

function badMole(){
}

