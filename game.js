class Game {
    constructor(){
    this.target = new Target();
    this.ball = new Ball();
    this.ramp = new Ramp();

        
    }
    
    preloadGame(){
        
        // this.backgroundImgs = [
        //     {
        //         src: loadImage("./assets/background 1 900.png"),
        //         x: 0,
        //         speed: 0,
        //     },
        //     {
        //         src: loadImage("./assets/background 2 900.png"),
        //         x: 0,
        //         speed: 1,
        //     },
        //     {
        //         src: loadImage("./assets/background 3 900.png"),
        //         x: 0,
        //         speed: 2,
        //     },
        //     {
        //         src: loadImage("./assets/background 4 900.png"),
        //         x: 0,
        //         speed: 3,
        //     },
        // ];
        this.image = loadImage("./assets/static background.png")
        this.imageFloor = loadImage("./assets/flooring.png");
        this.ball.image = loadImage("./assets/basketball 490.png");
        this.target.preloadTarget();
        this.ramp.image = loadImage("./assets/basketball 490.png");
        this.ramp.preloadRamp();
        this.ramp.imagePerson = loadImage('./assets/scar.png');
        console.log('preload game');
    }
        
    setupGame(){
        // this.image = loadImage("./assets/lousy-background-cut.png");
        // this.background = new Background();
        // this.background.images = this.backgroundImgs;
        this.target.setupTarget();
        this.ball.setupBall();
        this.ramp.setupRamp();
    }
    


    drawGame (){
        clear();
        // this.background.drawBackground();
        image(this.image, 0,0);
        image(this.imageFloor, 0, HEIGHT-WIDTH*(26/750), WIDTH*0.8, WIDTH*(26/750));
        noStroke();
        fill(255);
        this.target.drawTarget();
        this.ball.drawBall();
        this.ramp.drawRamp();
        
        
        if (this.ball.x > this.target.x && this.ball.x <=(this.target.x+35)){
        if (this.ball.y < (this.target.y-this.ball.height)) {
            this.target.visibility = true;
            this.ball.x = this.target.x + (this.target.w/2 - this.ball.width/2);

            if (this.ball.y>70 && this.ball.velocityY>0 && this.ramp.y<360) {
                this.ramp.y += 60;
                score +=1;
            }
            
            if (this.ramp.y>350) {
                this.ramp.visibility = true;
                this.ramp.image = loadImage('./assets/vertical platform.png');
                this.ball.velocityX=0;
                
            }
            // if (this.ball.y === HEIGHT-this.ball.height) this.target.visility = false;
        }
        if (this.target.visibility === true) {
            image(this.target.imageHoop, this.target.x, this.target.y+6, this.target.w, (this.target.h*0.9));   
        }

        if (this.ramp.visibility === true) {
            
            image(this.ramp.image, this.ramp.x, this.ramp.y, this.ramp.h, this.ramp.w);
            this.ramp.yPerson += 50;
        }
        }
    }
}
