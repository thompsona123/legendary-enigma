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
let gMole;
let bMole;
let gameValue = true;


function mousePressed(){
  moleClicked();
  goodMole();
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
    gameValue = false;
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
  for(i = 0; i < 3; i++){
    for(j = 0; j < 3; j++){
      if(int(mouseX / 250) == i && int(mouseY / 250) == j){
        boxClicked = grid[j][i];
        //console.log(boxClicked);
      }
    }
  }
}

function goodMole(){
  let randomx = int(random(0,2));
  let randomy = int(random(0,2));
  gMole = grid[randomx][randomy];
  fill(0, 255, 0);
  rect(randomx * 250, randomy * 250, 250, 250);
  if(gameValue === true && boxClicked == gMole){
    fill(0, 255, 0);
    rect(randomx * 250, randomy * 250, 250, 250);
  }
  
}

function badMole(){
  bMole = grid[random(0,2)][random(0,2)];
}

