let photos = [];
let index = 0;
let canvas;
let menuHeight = 0;
let started = false;
let imagesLoaded = 0;

function preload() {
  // Carrega todas as 11 imagens
  for (let i = 1; i <= 11; i++) {
    loadImage(
      `images/${i}.png`,
      (img) => {
        photos.push(img);
        imagesLoaded++;
        console.log(`Imagem ${i} carregada`);
      },
      () => console.warn(`Erro ao carregar images/${i}.png`)
    );
  }
}

function setup() {
  let menu = document.querySelector('header, .pixpa-header, #header'); 
  if (menu) menuHeight = menu.offsetHeight;

  canvas = createCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
  canvas.style('z-index', '-1');

  background('#f2f2f2');
  frameRate(30);
  noCursor();

  textAlign(CENTER, CENTER);
  textSize(16); // um pouco maior para visibilidade
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
  background('#f2f2f2');
}

function mousePressed() {
  // Começa a interação
  started = true;
  index++;
  if (index >= photos.length) index = 0;
}

function draw() {
  // Antes de começar, mostra texto inicial
  if (!started) {
    background('#f2f2f2');

    fill(0, 128); // 50% opacidade, texto mais visível
    noStroke();

    text(
      "Haz clic, arrastra, juega.\nClick, drag, play.\nClique, arraste, jogue.",
      width / 2,
      height / 2
    );

    return; // não desenha imagens ainda
  }

  // Desenho das imagens enquanto o mouse é pressionado
  if (mouseIsPressed && photos.length === 11) {
    let img = photos[index];
    if (!img) return;

    let w = 450;
    let h = w * (2 / 3);
    image(img, mouseX - w / 2, mouseY - h / 2, w, h);
  }
}
