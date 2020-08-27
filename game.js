class Game {
    constructor(){
    this.background = new Background();
    this.target = new Target();
    this.ball = new Ball();
    this.ramp = new Ramp();
    this.velocity = 0.7;
    this.gravity = -0.4;
    this.backgroundImgs;
        
    }
    
    preloadGame(){
        
        this.backgroundImages = [
            {
                src: loadImage("./assets/background 1 900.png"),
                x: 0,
                speed: 0,
            },
            {
                src: loadImage("./assets/background 2 900.png"),
                x: 0,
                speed: 1,
            },
            {
                src: loadImage("./assets/background 3 900.png"),
                x: 0,
                speed: -1,
            },
            {
                src: loadImage("./assets/background 4 900.png"),
                x: 0,
                speed: 1,
            },
        ];
        this.image = loadImage("./assets/Save simba.png")
        this.imageCircle = loadImage("./assets/circle of life.png")
        this.imageFloor = loadImage("./assets/flooring.png");
        this.imageFloorUp = loadImage("./assets/flooring.png");
        this.ball.image = loadImage("./assets/basketball 490.png");
        this.target.preloadTarget();
        this.ramp.image = loadImage("./assets/platform.png");
        this.ramp.imageRampDown = loadImage("./assets/vertical platform.png");
        this.ramp.preloadRamp();
        this.ramp.imagePerson = loadImage('./assets/simba.png');
        console.log('preload game');
    }
        
    setupGame(){
        // this.background = new Background();
        this.background.images = this.backgroundImages;
        textSize(21);
        this.target.setupTarget();
        this.ball.setupBall();
        this.ramp.setupRamp();
    }
    


    drawGame (){
        
        if (screen == 0){
            clear();
            image(this.image, 0,0);
            fill(255);
            textAlign(CENTER);
            text('Press ENTER to start', WIDTH/2, HEIGHT*0.7);
            text('Use the SPACE BAR to shoot basketballs and help Simba escape from the lava!', WIDTH/2, HEIGHT*0.9);
            
        }
        
        if (screen === 1){
            
            clear();
        this.background.drawBackground();
        // image(this.image, 0,0);
        image(this.imageFloor, 0, HEIGHT-WIDTH*(26/750), WIDTH*0.8, WIDTH*(26/750));
        image(this.imageFloorUp, 0, HEIGHT*0.25, WIDTH*0.8, WIDTH*(26/750));
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
            screen=2;
            }

            if (this.ramp.yPerson>430){
            screen =2;
            }

            if  (this.ramp.y<=HEIGHT*0.25-this.ramp.h){
            this.velocity=0;
            this.gravity=0;
                if (this.ramp.xPerson>0){
                this.ramp.xPerson-=3;
                this.ramp.yPerson = HEIGHT*0.25-this.ramp.hP;
                textAlign(CENTER);
                text('You saved Simba!', WIDTH/2, HEIGHT/2);
                    if (this.ramp.xPerson<5){
                        screen=0;
                    }

                }
            this.ball.velocityX=0;
            image(this.ramp.imagePerson, this.ramp.xPerson, this.ramp.yPerson, this.ramp.wP, this.ramp.hP);
            }

        
            if (this.ball.x > this.target.x && this.ball.x <=(this.target.x+this.target.w-40)){
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
        
        if (screen == 2){
            clear();
            image(this.imageCircle, 0,0);
            textAlign(CENTER);
            text('GAME OVER', WIDTH/2, HEIGHT/2);
            text('Press ENTER to try again', WIDTH/2, HEIGHT*0.7);

        }

    }
    }
}
