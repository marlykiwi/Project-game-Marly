const game = new Game();
var dots = [];

function setup () {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
    for (let y= dSize/2; y<HEIGHT; y+=dSize*2){
        dots.push(createVector(WIDTH/2-dSize/2));
    }

}

function draw () {
    background(0);
    noStroke();
    fill(255);
}