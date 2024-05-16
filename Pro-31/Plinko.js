class Plinko {
    constructor(x, y, radius) {
        let options = {
            isStatic: true
        };
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        let pos = this.body.position;
        elsellipseMode(RADIUS);
        fill(white);
        ellipse(pos.x, pos.y, this.radius);
    }
}