// declare image array + index
let photos = [];
let index = -1;

// setup the sketch
function setup() {
  noCursor();
  createCanvas(1920, 1080);
  frameRate(30);

  // fundo cor gelo
  background('#f2f2f2');

  // carregar imagens da pasta images
  photos[0] = loadImage('images/1.png');
  photos[1] = loadImage('images/2.png');
  photos[2] = loadImage('images/3.png');
  photos[3] = loadImage('images/4.png');
  photos[4] = loadImage('images/5.png');
  photos[5] = loadImage('images/6.png');
  photos[6] = loadImage('images/7.png');
}

// define what happens when a certain key is pressed
function keyPressed() {
  if (keyCode === 8) { // Delete
    clear();
    background('#f2f2f2'); // mantém fundo gelo ao limpar
  }
  if (keyCode === 80) { // P
    saveCanvas('myCanvas', 'png');
  }
}

// add 1 to the array every time the mouse is pressed
function mousePressed() {
  background('#f2f2f2'); // mantém fundo gelo
  index = index + 1;
  if (index === photos.length) {
    index = 0;
  }
}

function draw() {
  if (mouseIsPressed) {
    let img = photos[index];

    // manter proporção 3:2 e reduzir para 1/4 do tamanho original
    let w = 450; // largura
    let h = w * (2 / 3); // altura proporcional

    // desenhar a imagem centrada no mouse
    image(img, mouseX - w / 2, mouseY - h / 2, w, h);
  }
}
