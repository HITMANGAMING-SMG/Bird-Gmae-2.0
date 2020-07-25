function Bird() {
  this.y = height / 2;
  this.x = 25;

  this.lift = -12;
  this.gravity = 0.6;
  this.velocity = 0;
  this.show = function() {

    fill(255);
    image(birdIMG,this.x, this.y, 100, 50);

  }

  this.up = function() {

    this.velocity += this.lift;
  
  }


  this.update = function() {
    this.velocity += this.gravity;
    this.velocity += 0.5;
    this.y += this.velocity;


    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }
}