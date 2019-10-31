class Laser {
  //
  constructor(img) {
    this.y = 0;
    this.x = 0;
    this.img = img;
    
}

preload() {
    
    console.log("laser preload");
    this.img = loadImage("assets/rickAndMorty/greenLaser.png");
  }

  setup(playerX, playerHeight) {
    //   console.log(this.player.x);
    // console.log("laser setup");
    this.width = this.img.width - 10;
    this.height = this.img.height - 15;
    this.x = playerX;
    this.y = height - playerHeight;
  }

  draw() {
    // console.log("laser draw");
    // console.log(this.x, this.y);

    image(this.img, this.x, this.y, 63, 69 );
    this.y -= 12;
  }

//   draw(playerX,playerHeight) {
//     console.log("laser draw");
//     this.x = playerX;
//     this.y = height - playerHeight;
//     console.log(this.x, this.y);
//     image(this.img, this.x, this.y, 63, 69 );
//     this.y -= 6;
//   }
}
