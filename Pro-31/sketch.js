const { Engine, World, Bodies, Body, Render, Events } = Matter;

let engine, world;
let ground;
let divisions = [];
let plinkos = [];
let particles = [];
let divisionHeight = 300;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width / 2, height, width, 20);

  for (let k = 0; k <= width; k += 80) {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for (let j = 40; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 75, 10));
  }

  for (let j = 15; j <= width - 10; j += 50) {
    plinkos.push(new Plinko(j, 175, 10));
  }

  for (let j = 40; j <= width; j += 50) {
    plinkos.push(new Plinko(j, 275, 10));
  }

  for (let j = 15; j <= width - 10; j += 50) {
    plinkos.push(new Plinko(j, 375, 10));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();

  for (let k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (let i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (frameCount % 90 === 0) {
    particles.push(new Particle(random(width / 2 - 30, width / 2 + 30), 10, 10, random(0, 255), random(0, 255), random(0, 255)));
  }

  for (let j = 0; j < particles.length; j++) {
    particles[j].display();
  }
}
