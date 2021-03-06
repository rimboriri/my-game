class Player {
  constructor() {
    this.score = 0;
    this.width = 40;
    this.height = 40;
    this.x = 0;
    this.y = height / 2;
    this.velocity = 5;
    this.cooldown = false;
  }

  draw() {
    //border definition for spaceship
    if (this.y <= 0) {
      this.y = 0;
    } else if (this.y >= height - this.height) {
      this.y = height - this.height;
    }

    image(game.playerImage, this.x, this.y, this.width, this.height);

    if (keyIsDown(38)) {
      this.moveUp();
    }

    if (keyIsDown(40)) {
      this.moveDown();
    }

    if (keyIsDown(32) && !this.cooldown) {
     this.cooldown = true;
      this.shoot();
      game.rocketSound.play(); 
     setTimeout( () => {
       this.cooldown = false;
     },600)

    }

    fill(255);
    textSize(20);
    textFont('monospace');
    text('Score:', 450, 35);
    text(this.score,550,35);    
  }
  


  moveUp() {
    this.y = this.y - this.velocity;
  }

  moveDown() {
    this.y = this.y + this.velocity;
  }

  shoot() {
    //console.log("shoot")
    let rocket = new Rocket(this.y+17)
    game.rocket.push(rocket)
  }

}

