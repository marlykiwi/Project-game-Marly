class Background {
    constructor() {
      this.x = 0;
      this.images;

    }
  
    drawBackground() {
      this.x--;
      // define the draw logic  for the moving background here
      game.backgroundImages.forEach((picture) => {
        picture.x -= picture.speed;
        image(picture.src, picture.x, 0, WIDTH, HEIGHT);
        image(picture.src, picture.x - WIDTH, 0, WIDTH, HEIGHT);
  
        if (picture.x < 0) {
          picture.x = WIDTH;
        }
      });
    }
  }