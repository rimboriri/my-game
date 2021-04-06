class Rocket {
  constructor(playerY) {
    this.rocketX = 0;
    this.rocketY = playerY;
    this.rocketWidth = 20;
    this.rocketHeight = 7;
    this.rocketSpeed = 15;
    this.rocketPosition = 0;
    this.fire = false;
    this.width = 40;
  }

  draw() {
    this.rocketX++;
    image(game.rocketImage, this.rocketX, this.rocketY,this.rocketWidth,this.rocketHeight);

    // if (this.fire == true && this.rocketPosition == 0) {
    //     this.rocketPosition = 1;
    //   }
      
    //   if (this.rocketPosition == 1) {
    //     // this.rocketY = this.rocketY;
    //     this.rocketX = this.rocketX + this.rocketSpeed;
    //   }
  
    //   if (this.rocketX >= width) {
    //     this.rocketPosition = 2; //reload
    //   } else {
    //     //this.rocketX = this.x;  //rocket in ship
    //     this.rocketY = playerY;
    //   }
  
    //   if (this.rocketPosition == 2) {
    //     this.rocketY = playerY;
    //     this.rocketPosition = 0;
    //   }
    
  }

//   rockets() {
//     //position
//     // 0 = ready to fire
//     // 1 = in motion after firering
//     //2 = collision with object, return

    

  
//   }
}
