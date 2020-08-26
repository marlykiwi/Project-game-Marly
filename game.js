class Game {
    constructor(){
    this.target = new Target();
    this.ball = new Ball();
    this.ramp = new Ramp();
        
    }
    
    preloadGame(){
        this.image = loadImage("./assets/wooden wall.jpg")
        this.ball.image = loadImage("./assets/basketball 490.png");
        this.target.preloadTarget();
        this.ramp.image = loadImage("./assets/basketball 490.png");
        this.ramp.preloadRamp();
        this.ramp.imagePerson = loadImage('./assets/scar.png');
        console.log('preload game');
        
    }
        
    setupGame(){
        this.image = loadImage("./assets/wooden wall.jpg");
        this.target.setupTarget();
        this.ball.setupBall();
        this.ramp.setupRamp();
    }
    


    drawGame (){
        clear();
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
                this.ramp.y += 30;
                score +=1;
            }
            
            if (this.ramp.y>350) {
                this.ramp.visibility = true;
            }
            // if (this.ball.y === HEIGHT-this.ball.height) this.target.visility = false;
        }
        if (this.target.visibility === true) {
            image(this.target.imageHoop, this.target.x, this.target.y, this.target.w, (this.target.h+32));   
        }

        if (this.ramp.visibility === true) {
            image(this.ramp.imageRampDown, this.ramp.x, this.ramp.y, this.ramp.w, 90);
        }
        }
    }
}
