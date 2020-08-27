class Ramp {
    constructor() {
        this.x=WIDTH*0.8;
        this.y=HEIGHT*0.5;
        this.w=160;
        this.wP=0.9*this.w;
        this.hP = (298/334)*this.wP;
        this.h=15;
        this.image;
        this.imageRampDown;
        this.visibility = false;
        this.imagePerson;
        this.xPerson = this.x+(this.w/2 - this.wP/2.5);
        this.yPerson = this.y-this.hP;
        this.imageChain;
        this.wChain = 10;
        this.hChain = (400/10)*this.wChain;
        this.yChain = this.y-this.hChain;
    }

    preloadRamp(){
        // console.log('preload ramp')
        this.image = loadImage('./assets/platform.png');
        this.imageRampDown = loadImage('./assets/vertical platform.png');
        this.imagePerson = loadImage('./assets/simba.png');
        this.imageChain = loadImage('./assets/long chain.png');
    }

    setupRamp(){
        // console.log('setup ramp')
        this.image = loadImage('./assets/platform.png');
        this.imageRampDown = loadImage('./assets/vertical platform.png');
        this.imagePerson = loadImage('./assets/simba.png');
        this.imageChain = loadImage('./assets/long chain.png');
    }

    drawRamp(){
        // console.log('draw ramp')
        image(this.imageChain, this.x, this.yChain, this.wChain, this.hChain);
        image(this.image, this.x, this.y, this.w, this.h);
        image(this.imagePerson, this.xPerson, this.yPerson, this.wP, this.hP);

    }

    
}