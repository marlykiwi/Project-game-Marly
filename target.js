class Target {

    constructor(){
    this.x = WIDTH/2;
    this.y = HEIGHT/4;
    }

    setRandomPosition(){
        this.x= Math.floor(Math.random()*WIDTH*0.7);
        this.y= Math.floor(Math.random()*HEIGHT*0.7);
    }

    setupTarget (){
        console.log('setup target');
    }

    drawTarget(){
        console.log('draw target')
        fill(255);
        circle(this.x, this.y, 50)
        fill(255,0,0)
        circle(this.x, this.y, 40)
        fill(230);
        circle(this.x, this.y, 30)
        fill(255,0,0)
        circle(this.x, this.y, 20)
        fill(230);
        circle(this.x, this.y, 10)
    }
}