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
let grandomx; 
let grandomy;
let grectxcoor; 
let grectycoor; 

function mousePressed(){
  moleClicked();
}

function setup() {
  createCanvas(750, 750);
  grandomx = int(random(0,3));
  grandomy = int(random(0,3));
  grectxcoor = grandomx * 250;
  grectycoor = grandomy * 250;
}

function draw(){
 
  background(255);
  setupGame();
  x = 0;
  y = 0;
if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  
  }
 fill(0,0,0); 
text("time: " + timer, width/2, height/2);
  if (timer == 0) {
    background(255);
    fill(0,0,0);
    text("GAME OVER", width/2, height*0.5);
    gameValue = false;
  }
  if(timer != 0){
  goodMole();
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
        boxClicked = grid[i][j];
        console.log(boxClicked);
      }
    }
  }
  newGoodMole();
}

function goodMole(){
  gMole = grid[grandomx][grandomy];
  fill(0, 255, 0);
  rect(grectxcoor, grectycoor, 250, 250);
}

function newGoodMole(){
  if(gMole == boxClicked){
    grandomx = int(random(0,3));
    grandomy = int(random(0,3));
    grectxcoor = grandomx * 250;
    grectycoor = grandomy * 250;
  }
}

