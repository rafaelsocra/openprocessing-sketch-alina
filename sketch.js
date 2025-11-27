// declarar array de imagens + índice
let photos = [];
let index = -1;

function setup() {
	noCursor();
	createCanvas(1920, 1080);
	frameRate(30);
	background(255);

	// carregar imagens da pasta "images"
	for (let i = 1; i <= 7; i++) {
		photos.push(loadImage(`images/${i}.png`));
	}
}

// o que acontece quando uma tecla é pressionada
function keyPressed() {
	if (keyCode === 8) { // Delete
		clear();
		background(255);
	}
	if (keyCode === 80) { // P
		saveCanvas('myCanvas', 'png');
	}
}

// avançar para a próxima imagem quando o mouse é pressionado
function mousePressed() {
	background(255);
	index++;
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

		// desenhar imagem centrada no mouse
		image(img, mouseX - w / 2, mouseY - h / 2, w, h);
	}
}
