    var bird;
    var pipes = [];
    var backgroundimg;
    var birdIMG;
    var canvasWidth, canvasHeight;
    var pipesHit;
    var score;
    var gameState;
    var gameOverIMG,resetIMG;

    function preload() {

      backgroundimg = loadImage("bg1.jpg");
      birdIMG = loadImage("bird.png");
      gameOverIMG = loadImage("Game over.png");
      resetIMG = loadImage("reset.png");

    }


    function setup() {

      canvasWidth = windowWidth;
      canvasHeight = windowHeight;
      createCanvas(canvasWidth, canvasHeight);
      bird = new Bird();
      pipes.push(new Pipe());
      score = 0;
      gameState = "play";
      pipesHit =0 ;

    }

    function draw() {

      background(backgroundimg);
      bird.update();
      bird.show();
      stroke(255,255,10);
      strokeWeight(10);
    

      
      if (frameCount % 120 == 0) {
        pipes.push(new Pipe());
      }

      if (frameCount % 160 === 0) {
      score = score + 1;
      }

    
      for (var i = pipes.length - 1; i >= 0; i--) {

        pipes[i].show();
        pipes[i].update();                 

        if (pipes[i].hits(bird)) {
          //console.log("ouch");
          pipesHit++;
        //score = score - 1 ;
        if (pipes[i].offscreen()) {
          pipes.splice(i, 1);
        }
      }

      if( pipesHit > 45){
        gameState = "end";
      // console.log("END");
      }



      text("Score: "+ score,canvasWidth*9/10,canvasHeight*9/10);

        
      if (gameState === "end"){
      //pipes.speed = 0;
      score = score;
      push();
      imageMode(CENTER);
        image(gameOverIMG,canvasWidth/2 ,canvasHeight/4,350,200);
        image(resetIMG,canvasWidth/2.07,canvasHeight/2,175,50);
      pop();
    }




  }

    }

    function keyPressed() {

      if (keyCode === 32 && gameState === "play") {  
        bird.up();
        console.log(bird.up())
      }

    }




   function mousePressed(){

   if(gameState === "end" ){
      console.log(mouseX + "," +mouseY);  

      if(mouseX < 580 && mouseX > 700){
        if(mouseY > 250 && mouseY < 300){
          gameState = "play";
           console.log("play");
        }
      
     }
    }

    }