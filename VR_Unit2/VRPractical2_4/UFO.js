
class UFO {
    constructor(scene, x, y, z, dy) {

        this.ufo = document.createElement("a-entity");
        this.ufo.setAttribute("position", {x: x, y: y, z: z});
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = dy;

        let body = document.createElement("a-cylinder");
        body.setAttribute("radius", "2");
        body.setAttribute("height", "0.5");
        body.setAttribute("color", "gray");
        body.setAttribute("position", {x: 0, y: 0, z: 0});
        this.ufo.append(body);

        let dome = document.createElement("a-sphere");
        dome.setAttribute("radius", "1");
        dome.setAttribute("scale", "1 0.5 1");
        dome.setAttribute("color", "cyan");
        dome.setAttribute("position", {x: 0, y: 0.5, z: 0});
        this.ufo.append(dome);


        let antenna1 = document.createElement("a-cylinder");
        antenna1.setAttribute("height", "1");
        antenna1.setAttribute("radius", "0.04");
        antenna1.setAttribute("color", "white");
        antenna1.setAttribute("position", {x: -0.5, y: 1.2, z: 0});
        this.ufo.append(antenna1);

        let antennaTip1 = document.createElement("a-sphere");
        antennaTip1.setAttribute("radius", "0.15");
        antennaTip1.setAttribute("color", "red");
        antennaTip1.setAttribute("position", {x: -0.5, y: 1.75, z: 0});
        this.ufo.append(antennaTip1);


        let antenna2 = document.createElement("a-cylinder");
        antenna2.setAttribute("height", "1");
        antenna2.setAttribute("radius", "0.04");
        antenna2.setAttribute("color", "white");
        antenna2.setAttribute("position", {x: 0.5, y: 1.2, z: 0});
        this.ufo.append(antenna2);

        let antennaTip2 = document.createElement("a-sphere");
        antennaTip2.setAttribute("radius", "0.15");
        antennaTip2.setAttribute("color", "red");
        antennaTip2.setAttribute("position", {x: 0.5, y: 1.75, z: 0});
        this.ufo.append(antennaTip2);

        scene.append(this.ufo);
    }

    invade() {
        this.y -= this.dy;
        this.ufo.setAttribute("position", {
            x: this.x,
            y: this.y,
            z: this.z
        });
    }
}
