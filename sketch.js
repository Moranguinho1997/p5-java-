function setup() {
    createCanvas(400, 400);
    background("white");
  }
  
  function draw() {
    
    stroke("purple");
    fill("pink");
  
    //console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 30);
    }
  }
  