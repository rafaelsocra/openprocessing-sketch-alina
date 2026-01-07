let photos = [];
let index = 0;
let canvas;
let menuHeight = 0;
let started = false;
let imagesLoaded = 0; // conta quantas imagens foram carregadas

function preload() {
  // Carrega imagens de 1 a 11 com callback para garantir que todas carreguem
  for (let i = 1; i <= 11; i++) {
    loadImage(
      `images/${i}.png`,
      (img) => {
        photos.push(img);
        imagesLoaded++;
        console.log(`Imagem ${i} carregada`);
      },
      () => {
        console.warn(`Erro ao carregar images/${i}.png`);
      }
    );
  }
}

function setup() {
  // Detecta altura do menu do Pixpa (opcional)
  let menu = document.querySelector('header, .pixpa-header, #header'); 
  if (menu) menuHeight = menu.offsetHeight;

  canvas = createCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
  canvas.style('z-index', '-1');

  frameRate(30);
  textAlign(CENTER, CENTER);
  textSize(16);

  background('#f2f2f2'); // fundo inicial
  // Cursor visível
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
  background('#f2f2f2');
}

function mousePressed() {
  if (!started) {
    // Primeiro clique apenas inicia o sketch
    started = true;
    return; 
  }

  // A partir do segundo clique, avança o índice
  index++;
  if (index >= photos.length) index = 0;
}

function draw() {
  // TEXTO INICIAL
  if (!started) {
    background('#f2f2f2');

    fill(0, 128); // 50% opacidade
    noStroke();
    text(
      "Haz clic, arrastra, juega.\nClick, drag, play.\nClique, arraste, jogue.",
      width / 2,
      height / 2
    );

    return; // não desenha imagens ainda
  }

  // DESENHO DAS IMAGENS (só se todas as 11 imagens carregaram)
  if (mouseIsPressed && imagesLoaded === 11) {
    let img = photos[index];
    if (!img) return;

    let w = 450;
    let h = w * (2 / 3); // proporção 3:2
    image(img, mouseX - w / 2, mouseY - h / 2, w, h);
  }
}
