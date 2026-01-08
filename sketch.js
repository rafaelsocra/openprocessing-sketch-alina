let photos = [];
let index = 0;
let canvas;
let menuHeight = 0;
let started = false;
let totalImages = 11;

function preload() {
  // Carrega todas as imagens de forma síncrona
  for (let i = 1; i <= totalImages; i++) {
    let img = loadImage(`images/${i}.png`);
    photos.push(img);
  }
}

function setup() {
  let menu = document.querySelector('header, .pixpa-header, #header'); 
  if (menu) menuHeight = menu.offsetHeight;

  canvas = createCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
  canvas.style('z-index', '-1');

  frameRate(30);
  textAlign(CENTER, CENTER);
  textSize(16);

  background('#f2f2f2');
  // cursor visível
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
  background('#f2f2f2');
}

function mousePressed() {
  if (!started) {
    started = true; // primeiro clique remove o texto
    return;
  }

  index++;
  if (index >= photos.length) index = 0;
}

function draw() {
  background('#f2f2f2');

  // TEXTO INICIAL
  if (!started) {
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
  if (mouseIsPressed) {
    let img = photos[index];
    if (!img) return;

    let w = 450;
    let h = w * (2 / 3);
    image(img, mouseX - w / 2, mouseY - h / 2, w, h);
  }
}
