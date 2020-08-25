class Chair {
    constructor() {
        this.x=WIDTH*0.7;
        this.y=HEIGHT*0.4;
        this.w=160;
        this.h=15;
        this.image;
    }

    preloadChair(){
        console.log('preload chair')
        this.image = loadImage('./assets/desk front view 160px.png');
    }

    setupChair(){
        console.log('setup chair')
        this.image = loadImage('./assets/desk front view 160px.png');
    }

    drawChair(){
        console.log('draw chair')
        image(this.image, this.x, this.y, this.w, this.h);
    }


    platformDown(){
        // if the conditions are met
        this.image= loadImate('./assets/window-madera-160x90.png')
    }

}