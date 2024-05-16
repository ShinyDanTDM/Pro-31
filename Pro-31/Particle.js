class Particle {
    constructor(x, y, radius, color) {
        let options = {
            restitutuion: 0.4
        };
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.color = color;
        World.add(world, this.body);
    }

    display() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0, 0, this.radius);
        pop();    
    }
}