class Game {
    constructor(){
    this.target = new Target();
    this.ball = new Ball();
    this.chair = new Chair();
        
    }
    
    preloadGame(){
        this.image = loadImage("./assets/wooden wall.jpg")
        this.ball.image = loadImage("./assets/smaller tennis ball.png");
        this.chair.image = loadImage('./assets/desk front view 160px.png');
        this.chair.preloadChair();
        console.log('preload game');
    }
        
    setupGame(){
        this.image = loadImage("./assets/wooden wall.jpg");
        this.target.setupTarget();
        this.ball.setupBall();
        this.chair.setupChair();
    }
    


    drawGame (){
        clear();
        noStroke();
        fill(255);
        this.target.drawTarget();
        this.ball.drawBall();
        this.chair.drawChair();

    }



}