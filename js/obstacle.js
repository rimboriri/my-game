class Obstacle {
  constructor(image) {
    this.image = image;
    this.x = width;
    this.y = Math.random() * height;
    this.width = 40;
    this.height = 40;
  }


  collision(rocketInfo) {
    //console.log("collision", rocketInfo);
    // get the middle x and y of the obstacle
    const obstacleX = this.x + this.width / 2;
    const obstacleY = this.y + this.height / 2;
    // get the middle x and y of the rocket
    const rocketX = rocketInfo.x + rocketInfo.width / 2;
    const rocketY = rocketInfo.y + rocketInfo.height / 2;

    
    // then use the p5 function dist() to calculate the distance
    if (dist(obstacleX, obstacleY, rocketX, rocketY) < 50) {
      return false;
    } else {
      // we have a collision
      game.player.score += 10;
      return true;
    }
  }

  draw() {
    this.x -=2;
    image(this.image, this.x, this.y, this.width, this.height);

  }

}
