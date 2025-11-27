let photos = [];
let index = -1;
let canvas;
let menuHeight = 0;

function preload() {
  for (let i = 1; i <= 7; i++) {
    photos.push(loadImage('images/' + i + '.png'));
  }
}

function setup() {
  // Detecta altura do menu do Pixpa dinamicamente
  let menu = document.querySelector('header, .pixpa-header, #header'); 
  if (menu) menuHeight = menu.offsetHeight;

  canvas = createCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight); // posiciona abaixo do menu
  canvas.style('z-index', '-1'); // sempre atrás do menu
  noCursor();
  frameRate(30);
  background('#f2f2f2');
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
}

function keyPressed() {
  if (keyCode === 8) { // Delete
    clear();
    background('#f2f2f2');
  }
  if (keyCode === 80) { // P
    saveCanvas('myCanvas', 'png');
  }
}

function mousePressed() {
  background('#f2f2f2');
  index++;
  if (index === photos.length) index = 0;
}

function draw() {
  if (mouseIsPressed) {
    let img = photos[index];
    let w = 450;
    let h = w * (2 / 3); // mantém proporção 3:2
    image(img, mouseX - w / 2, mouseY - h / 2, w, h);
  }
}
