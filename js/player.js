class Player {
  constructor() {
    this.score = 0;
    this.width = 40;
    this.height = 40;
    this.x = 0;
    this.y = height / 2;
    this.velocity = 5;
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

    if (keyIsDown(32)) {
     this.shoot();
    }
    
  }

  moveUp() {
    this.y = this.y - this.velocity;
  }

  moveDown() {
    this.y = this.y + this.velocity;
  }

  shoot() {
    console.log("shoot")
    let rocket = new Rocket(this.y)
    game.rocket.push(rocket)
  }


}
