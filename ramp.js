class Ramp {
    constructor() {
        this.x=WIDTH*0.8;
        this.y=HEIGHT*0.4;
        this.w=160;
        this.wP=0.9*this.w;
        this.hP = (298/334)*this.wP;
        this.h=15;
        this.image;
        this.imageRampDown;
        this.visibility = false;
        this.imagePerson;
        this.xPerson = this.x+((this.w/2)-167);
        this.yPerson = this.y- 298;
        this.imageChain;
    }

    preloadRamp(){
        // console.log('preload ramp')
        this.image = loadImage('./assets/platform.png');
        this.imageRampDown = loadImage('./assets/vertical platform.png');
        this.imagePerson = loadImage('./assets/scar.png');
        // this.imageChain = loadImage('./assets/chain 1.png');
    }

    setupRamp(){
        // console.log('setup ramp')
        this.image = loadImage('./assets/platform.png');
        this.imageRampDown = loadImage('./assets/vertical platform.png');
        this.imagePerson = loadImage('./assets/scar.png');
        // this.imageChain = loadImage('./assets/chain 1.png');
    }

    drawRamp(){
        // console.log('draw ramp')
        // image(this.imageChain, this.x, 0, 200, this.y;
        image(this.image, this.x, this.y, this.w, this.h);
        image(this.imagePerson, this.x+(this.w/2 - this.wP/2), this.y-this.hP, this.wP, this.hP);
    }

    
}