class Game{
    constructor(){
        this.backgroundImages;
        this.playerImage;
        this.rocketImage;
        this.meteorImage;

    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = []; 

    }


    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background-1.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background-2.png'), x: 0, speed: 1 },
        ]
        this.playerImage = loadImage('assets/player1.png');
        this.rocketImage = loadImage('assets/rocket.png');
        this.meteorImage = loadImage('assets/meteor-1.png');

    }

   

    draw() {
        clear();
        // console.log('game drawing');
        this.background.draw();
        this.player.draw();

        // frameCount is provided by P5
        // console.log(frameCount)
        if (frameCount % 60 === 0) {
            this.obstacles.push(new Obstacle(this.meteorImage))
            console.log(this.obstacles);
        }
        this.obstacles.forEach(function (obstacle) {
            obstacle.draw();
       })
    //     // this needs to be an arrow function otherwise the context of 'this'
    //     // will not be correct
    //     this.obstacles = this.obstacles.filter(obstacle => {
    //         // console.log(this)
    //         if (obstacle.collision(this.player) || obstacle.x < 0) {
    //             return false
    //         } else {
    //             return true
    //         }
    //     })
    }


    
}