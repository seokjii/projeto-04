function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("black");
    fill("purple");
    textSize(30);
    textAlign(CENTER, CENTER);
    
    palavra = "I PURPLE YOU";
    let maximo = width;
    let minimo = 1;
    let quantidade = map(mouseX,0, maximo, minimo, palavra.length);
    let parcial = palavra. substring(0,quantidade);
    text(parcial, 200, 200);
  
    
  }