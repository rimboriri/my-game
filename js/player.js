class Player {

    constructor() {
        this.score = 0;
        this.width = 40;
        this.height = 40;
        this.x = 0;
        this.y = height/2;
        this.velocity = 5;
        this.rocketX = this.x;
        this.rocketY = this.y;
        this.rocketWidth = 20;
        this.rocketHeight = 7;
        this.rocketSpeed = 15;
        this.rocketPosition = 0;
        this.fire = false; 
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
            this.moveUp()
        }

        if (keyIsDown(40)) {
            this.moveDown()
        }

        if (keyIsDown(32)) {
            this.fire = true;
        } else {
            this.fire = false;
        }

        this.rockets();
    }

    moveUp() {
        this.y = this.y - this.velocity;
    }

    moveDown() {
        this.y = this.y + this.velocity;
    }


    rockets() {
        //position
            // 0 = ready to fire
            // 1 = in motion after firering
            //2 = collision with object, return
        
         image(game.rocketImage, this.rocketX, this.rocketY, this.rocketWidth, this.rocketHeight);
        //  fill(26,175,255);
        //  rect(this.rocketX, this.rocketY, this.rocketWidth, this.rocketHeight);
        
         if(this.fire == true && this.rocketPosition == 0){
            this.rocketPosition = 1;
          }
   
          if(this.rocketPosition == 1){
            this.rocketY = this.rocketY;
            this.rocketX = this.rocketX+this.rocketSpeed;
            }    
            
            if(this.rocketX >= width){
                this.rocketPosition = 2; //reload
                  } 
            else {
                //this.rocketX = this.x;  //rocket in ship
                this.rocketY = this.y;
           }

            if(this.rocketPosition == 2){ 
                this.rocketY = this.y;
                this.rocketX = this.x;
                this.rocketPosition = 0;
            }
        



    }
}

