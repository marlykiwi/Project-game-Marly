class Target {

    constructor(){
    this.x = WIDTH/3;
    this.y = HEIGHT/4;
    this.w = WIDTH*0.1;
    this.h = HEIGHT*0.1;
    this.image;
    this.imageHoop;
    this.visibility= false;

    }

    setRandomPosition(){
        this.x= Math.floor(Math.random()*WIDTH*0.7);
        this.y= Math.floor(Math.random()*HEIGHT*0.7);
    }


    preloadTarget (){
        this.image = loadImage("./assets/hoop.png");
        this.imageHoop = loadImage("./assets/hoop overlap.png");
        
    }

    setupTarget (){
        // console.log('setup target');
        this.image = loadImage("./assets/hoop.png");
        this.imageHoop = loadImage("./assets/hoop overlap.png");
    }

    drawTarget(){
        
        // console.log('draw target')
        image(this.image, this.x, this.y, this.w, this.h);
        
    }
}