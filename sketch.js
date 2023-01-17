let bg;
let temp = 0;
var monkeys = [];
var projectiles = [];
var map = [];
var cam = {};
cam.x = 0;
cam.y = -180;
cam.z = 40;
cam.rot = {};
cam.rot.x = 30;
cam.rot.y = 0;
cam.rot.z = 0;
const keyDown = {};
document.addEventListener('keydown', (e) => { keyDown[e.key] = true; });
document.addEventListener('keyup', (e) => { keyDown[e.key] = false; });
var models = {
	dartMonkey: null,
	tackShooter: null,
	heroQuincy: null,
};
var textures = {
	monkeyBase: null,
	dartMonkey: null,
	tackShooter: null,
	heroQuincy: null,
}
var monkeyList = {
}
function preload() {
	models.tackShooter = loadModel('assets/models/tackShooter/tackshooter.obj')
	models.dartMonkey = loadModel('assets/models/dartMonkey/dartmonkey.obj');
	models.heroQuincy = loadModel('assets/models/heroQuincy/heroquincy.obj')
	textures.monkeyBase = loadImage('assets/models/dartMonkey/MonkeyBase.png');
	textures.tackShooter = loadImage('assets/models/tackShooter/tackShooter.png');
	textures.heroQuincy = loadImage('assets/models/heroQuincy/heroquincy.png');
}
function setup() {
	createCanvas(16 * 60, 9 * 60, WEBGL);
	bg = loadImage('assets/images/MonkeyMeadow.png')
	monkeys.push({
		type: "dart",
		x: -30,
		y: 10,
		z: 00,
		texture: textures.monkeyBase,
		model: models.dartMonkey,
		rotX: 0,
		rotY: 0,
		rotZ: 180
	});
	monkeys.push({
		type: "quincy",
		x: -10,
		y: 10,
		z: 300,
		texture: textures.heroQuincy,
		model: models.heroQuincy,
		rotX: 90,
		rotY: 180,
		rotZ: 0
	});
};
function draw() {
	angleMode(DEGREES)
	rotateX(cam.rot.x)
	rotateY(cam.rot.y)
	rotateZ(cam.rot.z)
	translate(0 - cam.x, 0 - cam.y, 0 - cam.z);
	background("rgb(0, 128, 0)");
	push()
	translate(0, 0, 300)
	plane(500, 500);
	pop()
	drawMonkeys();
	tickCamera()
};
function tickCamera () {
	if(keyDown["a"]){ cam.x -= 1; }
	if(keyDown["d"]){ cam.x += 1; }
	if(keyDown["w"]){ cam.y -= 1; }
	if(keyDown["s"]){ cam.y += 1; }
	if(keyDown["Shift"]){ cam.z -= 1; }
	if(keyDown[" "]){ cam.z += 1; }
	/*if(keyDown["ArrowUp"]){ cam.rot.z += 1 }
	if(keyDown["ArrowDown"]){ cam.rot.z -= 1 }
	if(keyDown["ArrowLeft"]){ cam.rot.x += 1 }
	if(keyDown["ArrowRight"]){ cam.rot.x -= 1 }*/
}
function drawMonkeys() {
	for (let i = 0; i < monkeys.length; i++) {
		push()
		const m = monkeys[i];
		noStroke();
		texture(m.texture);
		translate(m.x, m.y, m.z);
		rotateX(m.rotX);
		rotateY(m.rotY);
		rotateZ(m.rotZ);
		model(m.model);
		pop()
	}
}
function setStyle(f, sC, sS) {
	fill(f)
	stroke(sC)
	strokeWeight(sS)
}