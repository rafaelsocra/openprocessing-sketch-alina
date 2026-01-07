let photos = [];
let index = -1;
let canvas;
let menuHeight = 0;
let started = false;

function preload() {
  for (let i = 1; i <= 11; i++) {
    photos.push(loadImage('images/' + i + '.png'));
  }
}

function setup() {
  let menu = document.querySelector('header, .pixpa-header, #header'); 
  if (menu) menuHeight = menu.offsetHeight;

  canvas = createCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
  canvas.style('z-index', '-1');
  noCursor();
  frameRate(30);
  background('#f2f2f2');

  textAlign(CENTER, CENTER);
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
  if (!started) {
    started = true;
    background('#f2f2f2');
  }

  index++;
  if (index === photos.length) index = 0;
}

function draw() {
  // Texto inicial
  if (!started) {
    background('#f2f2f2');
    fill(0, 25); // ~10% de opacidade
    textSize(14);

    text(
      "Haz clic, arrastra, juega.\nClick, drag, play.\nClique, arraste, jogue.",
      width / 2,
      height / 2
    );
    return;
  }

  // Desenho das imagens
  if (mouseIsPressed) {
    let img = photos[index];
    let w = 450;
    let h = w * (2 / 3); // proporção 3:2
    image(img, mouseX - w / 2, mouseY - h / 2, w, h);
  }
}
