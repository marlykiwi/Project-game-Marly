class Game {
    constructor(){
    this.target = new Target();
    this.ball = new Ball();
    this.ramp = new Ramp();
    this.velocity = 0.7;
    this.gravity = -0.3;
        
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
        this.ramp.image = loadImage("./assets/platform.png");
        this.ramp.imageRampDown = loadImage("./assets/vertical platform.png");
        this.ramp.preloadRamp();
        this.ramp.imagePerson = loadImage('./assets/simba lloron.gif');
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
        if (this.ramp.y<380){
        this.ramp.yChain += this.velocity+this.gravity;
        this.ramp.yPerson += this.velocity+this.gravity;
        this.ramp.y += this.velocity+this.gravity;
        }

        if (this.ramp.yPerson>=380-this.ramp.hP){
            this.velocity = 0;
            this.ramp.yChain += this.gravity;
            this.ramp.image = this.ramp.imageRampDown;
            this.ramp.w = 15;
            this.ramp.h = 160;
            this.ramp.yPerson += 1-this.gravity;
            this.ramp.y += this.gravity;
            game.ball.velocityX=0;
        }

        if  (this.ramp.yPerson<=this.target.y-this.ramp.w){
            this.velocity=0;
            this.gravity=0;
            this.xPerson-=30;
            image(this.ramp.imagePerson, this.ramp.xPerson, this.ramp.yPerson, this.ramp.wP, this.ramp.hP);
        }

        
        if (this.ball.x > this.target.x && this.ball.x <=(this.target.x+35)){
        if (this.ball.y < (this.target.y-this.ball.height)) {
            this.target.visibility = true;
            this.ball.x = this.target.x + (this.target.w/2 - this.ball.width/2);

            if (this.ball.y>70 && this.ball.velocityY>0) {
                this.ramp.y -= 60;
                game.ramp.yChain -= 60;
                game.ramp.yPerson -= 60;
                score +=1;
            }
            

            if (this.ramp.y>370) {
                this.ramp.image= this.ramp.imageRampDown;
                this.ramp.visibility = true;
                console.log('it got there')
            }
            // if (this.ball.y === HEIGHT-this.ball.height) this.target.visility = false;
        }
        if (this.target.visibility === true) {
            image(this.target.imageHoop, this.target.x, this.target.y+6, this.target.w, (this.target.h*0.9)); 
        }
        
        
        
        if (this.ramp.visibility === true) {
            
            image(this.ramp.image, this.ramp.x, this.ramp.y, this.ramp.h, this.ramp.w);
            
        }
        

    }
    }
}
