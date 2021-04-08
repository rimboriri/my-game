class Game {
  constructor() {
    this.backgroundImages;
    this.playerImage;
    this.rocketImage;
    this.meteorImage;
  }

  setup() {
    this.player = new Player();
    this.background = new Background();
    this.obstacles = [];
    this.rocket = [];
   
  }

  preload() {
    this.backgroundImages = [
      { src: loadImage("assets/background-1.png"), x: 0, speed: 0 },
      { src: loadImage("assets/background-2.png"), x: 0, speed: 1 },
    ];
    this.playerImage = loadImage("assets/player1.png");
    this.rocketImage = loadImage("assets/rocket.png");
    this.meteorImage = loadImage("assets/meteor-1.png");
    this.rocketSound = loadSound("assets/sfx_laser1.ogg");
    this.looseSound = loadSound("assets/sfx_lose.ogg");
    this.hitObstacle = loadSound("assets/sfx_twoTone.ogg");
  }

  draw() {

    
    clear();

    // console.log('game drawing');
    this.background.draw();
    this.player.draw();
    // this.rocket.draw(this.player.y);

    // frameCount is provided by P5
    // console.log(frameCount)
    if (frameCount % 60 === 0) {
      this.obstacles.push(new Obstacle(this.meteorImage));
      // console.log(this.obstacles);
    }  
    this.obstacles.forEach(function (obstacle) {
      obstacle.draw();
    });
    
    this.rocket.forEach(function (rocket) {
      rocket.draw();
    });

    // this needs to be an arrow function otherwise the context of 'this'
    // will not be correct
    this.obstacles = this.obstacles.filter((obstacle) => {
      // console.log(this)
      if (obstacle.x < 0 - obstacle.width) {
        this.looseSound.play();
        gameOver();
      } else {
        return true;
      }
    });

    this.rocket = this.rocket.filter((rocket) => {
      // console.log(this)
      if (rocket.rocketX > width + rocket.rocketX) {
        return false;
      } else {
        return true;
      }
    });

    for (let i = 0; i < this.obstacles.length; i++) {
      for (let j = 0; j < this.rocket.length; j++) {
        if (
          dist(
            this.obstacles[i].x,
            this.obstacles[i].y,
            this.rocket[j].rocketX,
            this.rocket[j].rocketY
          ) < 40
        ) {
          //console.log("colission")
          console.log(this.rocket);
          this.rocket.splice(j, 1);
          this.obstacles.splice(i, 1);
          //console.log(this.rocket)
          this.hitObstacle.play(); 
          game.player.score += 5; 
          console.log(game.player.score) 
        }
      }

    }

    for (let i = 0; i < this.obstacles.length; i++) {
        if (dist(this.obstacles[i].x, this.obstacles[i].y, this.player.x, this.player.y) < 20 ){  
          this.looseSound.play();
          gameOver();

    }  }

   
  }
}

function gameOver(){
    noLoop();
    textSize(width / 10);
    textFont('monospace');
    text('GAME OVER',200,200,600,600);
    text('Score',60,60);
    text(game.player.score, 60, 120);
}