let photos = [];
let index = 0;
let canvas;
let menuHeight = 0;
let started = false;

function preload() {
  // Carrega imagens de 1 a 11
  for (let i = 1; i <= 11; i++) {
    photos.push(loadImage(`images/${i}.png`));
  }
}

function setup() {
  // Detecta altura do menu
  let menu = document.querySelector('header, .pixpa-header, #header'); 
  if (menu) menuHeight = menu.offsetHeight;

  canvas = createCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
  canvas.style('z-index', '-1');

  frameRate(30);

  // Cursor visível
  textAlign(CENTER, CENTER);
  textSize(16);

  background('#f2f2f2');
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
  background('#f2f2f2');
}

function mousePressed() {
  // Primeiro clique inicia a interação e faz o texto sumir
  if (!started) {
    started = true;
  }

  // Avança para próxima imagem
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

    return; // não desenha imagens ainda
  }

  // DESENHO DAS IMAGENS
  if (mouseIsPressed && photos.length === 11) {
    let img = photos[index];
    if (!img) return;

    let w = 450;
    let h = w * (2 / 3); // proporção 3:2
    image(img, mouseX - w / 2, mouseY - h / 2, w, h);
  }
}
