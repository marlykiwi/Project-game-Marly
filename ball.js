class Ball {
    constructor(){
        this.height=50;
        this.width= 50;
        this.x= WIDTH/2;
        this.y= HEIGHT - this.height;
        this.image;
        this.velocityX=10;
        this.velocityY=0;
        this.sense=1;
        this.gravity=0.4;
    }
    

    preloadBall(){
    this.image= loadImage("./assets/smaller tennis ball.png");
    }

    setupBall(){
    this.image= loadImage("./assets/smaller tennis ball.png");
    frameRate(5);
    }

    throw(){
        console.log('the ball is thrown');
        if (this.y === height - this.height) {
            this.velocityY = -18;
            this.velocityX = 0;
            frameRate(25);
        }
    }


    drawBall(){

        this.x=this.x + this.velocityX*this.sense;
        if (this.x>0.8*WIDTH || this.x<0.2*WIDTH) this.sense*=-1;
        frameRate(20);

        this.velocityY += this.gravity;
        this.y += this.velocityY;

        if (this.y >= height-this.height){
            this.y = height - this.height;
            this.velocityY = 0;
            this.velocityX = 10;
        }

        

        image(this.image, this.x, this.y, this.height, this.width);
        
    }
}

