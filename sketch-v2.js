let photos = [];
let index = 0;
let canvas;
let menuHeight = 0;
let started = false;

function preload() {
  for (let i = 1; i <= 11; i++) {
    photos.push(loadImage(`images/${i}.png`));
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
  textSize(14);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight - menuHeight);
  canvas.position(0, menuHeight);
  background('#f2f2f2');
}

function mousePressed() {
  started = true;
  index++;
  if (index >= photos.length) index = 0;
}

function draw() {
  if (!started) {
    background('#f2f2f2');
    fill(30, 128); // 50%
    text(
      "Haz clic, arrastra, juega.\nClick, drag, play.\nClique, arraste, jogue.",
      width / 2,
      height / 2
    );
    return;
  }

  if (mouseIsPressed) {
    let img = photos[index];
    if (!img) return;

    let w = 450;
    let h = w * (2 / 3);
    image(img, mouseX - w / 2, mouseY - h / 2, w, h);
  }
}
