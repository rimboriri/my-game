const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent("canvas");
    game.setup();
}

function draw() {
    game.draw();
}



    



