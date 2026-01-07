let photos = [];
let index = -1;
let canvas;
let menuHeight = 0;
let started = false;

function preload() {
  photos = [];
  for (let i = 1; i <= 11; i++) {
    let img = loadImage(
      `images/${i}.png`,
      () => console.log(`Imagem ${i} carregada`),
      () => console.warn(`Erro ao carregar images/${i}.png`)
    );
    photos.push(img);
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
  textSize(14);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
  background('#f2f2f2');
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
  if (index >= photos.length) index = 0;
}

function draw() {
  // TEXTO INICIAL
  if (!started) {
    background('#f2f2f2');

    fill(0, 128); // 50% de opacidade
    noStroke();

    text(
      "Haz clic, arrastra, juega.\nClick, drag, play.\nClique, arraste, jogue.",
      width / 2,
      height / 2
    );
    return;
  }

  // DESENHO DAS IMAGENS
  if (mouseIsPressed && photos.length > 0) {
    let img = photos[index];
    if (img) {
      let w = 450;
      let h = w * (2 / 3);
      image(img, mouseX - w / 2, mouseY - h / 2, w, h);
    }
  }
}
