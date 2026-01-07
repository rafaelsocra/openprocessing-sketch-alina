let photos = [];
let index = 0;
let canvas;
let menuHeight = 0;
let started = false;
let totalImages = 11;
let imagesLoaded = 0;

function preload() {
  // Carrega imagens de 1 a 11
  for (let i = 1; i <= totalImages; i++) {
    loadImage(
      `images/${i}.png`,
      (img) => {
        photos.push(img);
        imagesLoaded++;
        console.log(`Imagem ${i} carregada (${imagesLoaded}/${totalImages})`);
      },
      () => {
        console.warn(`Erro ao carregar images/${i}.png`);
      }
    );
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
  // Cursor visível
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
  background('#f2f2f2');
}

function mousePressed() {
  if (!started) {
    started = true;
    return;
  }

  // Avança índice apenas se houver imagens carregadas
  if (photos.length > 0) {
    index++;
    if (index >= photos.length) index = 0;
  }
}

function draw() {
  background('#f2f2f2');

  // TEXTO INICIAL
  if (!started) {
    fill(0, 128); // 50% opacidade
    noStroke();
    text(
      "Haz clic, arrastra, juega.\nClick, drag, play.\nClique, arraste, jogue.",
      width / 2,
      height / 2
    );

    // Mostra quantas imagens carregaram
    fill(0, 64);
    textSize(12);
    text(`Carregadas ${imagesLoaded}/${totalImages} imagens`, width / 2, height / 2 + 60);
    textSize(16);

    return;
  }

  // DESENHO DAS IMAGENS
  if (mouseIsPressed && photos.length > 0) {
    // Garantir índice válido mesmo com carregamento assíncrono
    let img = photos[index % photos.length];
    if (!img) return;

    let w = 450;
    let h = w * (2 / 3);
    image(img, mouseX - w / 2, mouseY - h / 2, w, h);
  }
}
