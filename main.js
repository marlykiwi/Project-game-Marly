const game = new Game();

function preload (){
    game.preloadGame();
    
}

function setup () {
    createCanvas(WIDTH, HEIGHT);
    game.setupGame();

}

function draw () {
    
    game.drawGame();
    
}

function keyPressed() {
    if (keyCode === 32) {
        game.ball.throw();
    }
}


