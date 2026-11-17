
class Rocket {
    constructor(scene, x, y, z) {

        this.rocket = document.createElement("a-entity");
        this.rocket.setAttribute("position", {x: x, y: y, z: z});
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.1;

        let body = document.createElement("a-cylinder");
        body.setAttribute("radius", "1");
        body.setAttribute("height", "5");
        body.setAttribute("color", "gray");
        body.setAttribute("side", "double");
        body.setAttribute("position", {x: 0, y: 2.5, z: 0});
        this.rocket.append(body);

        let tip = document.createElement("a-cone");
        tip.setAttribute("position", {x: 0, y: 5.5, z: 0});
        tip.setAttribute("color", "gray");
        this.rocket.append(tip);

        let window1 = document.createElement("a-circle");
        window1.setAttribute("position", {x: 0, y: 1, z: 1});
        window1.setAttribute("color", "cyan");
        window1.setAttribute("opacity", "0.75");
        window1.setAttribute("radius", "0.25");
        this.rocket.append(window1);

        let window2 = document.createElement("a-circle");
        window2.setAttribute("position", {x: 0, y: 2, z: 1});
        window2.setAttribute("color", "cyan");
        window2.setAttribute("opacity", "0.75");
        window2.setAttribute("radius", "0.25");
        this.rocket.append(window2);

        let window3 = document.createElement("a-circle");
        window3.setAttribute("position", {x: 0, y: 3, z: 1});
        window3.setAttribute("color", "cyan");
        window3.setAttribute("opacity", "0.75");
        window3.setAttribute("radius", "0.25");
        this.rocket.append(window3);

        let window4 = document.createElement("a-circle");
        window4.setAttribute("position", {x: 0, y: 4, z: 1});
        window4.setAttribute("color", "cyan");
        window4.setAttribute("opacity", "0.75");
        window4.setAttribute("radius", "0.25");
        this.rocket.append(window4);

        let ring1 = document.createElement("a-ring");
        ring1.setAttribute("rotation", {x: 90, y: 0, z: 0});
        ring1.setAttribute("position", {x: 0, y: 0.5, z: 0});
        ring1.setAttribute("side", "double");
        ring1.setAttribute("color", "cyan");
        this.rocket.append(ring1);

        let ring2 = document.createElement("a-ring");
        ring2.setAttribute("rotation", {x: 90, y: 0, z: 0});
        ring2.setAttribute("position", {x: 0, y: 1.5, z: 0});
        ring2.setAttribute("side", "double");
        ring2.setAttribute("color", "cyan");
        this.rocket.append(ring2);

        let ring3 = document.createElement("a-ring");
        ring3.setAttribute("rotation", {x: 90, y: 0, z: 0});
        ring3.setAttribute("position", {x: 0, y: 2.5, z: 0});
        ring3.setAttribute("side", "double");
        ring3.setAttribute("color", "cyan");
        this.rocket.append(ring3);

        let ring4 = document.createElement("a-ring");
        ring4.setAttribute("rotation", {x: 90, y: 0, z: 0});
        ring4.setAttribute("position", {x: 0, y: 3.5, z: 0});
        ring4.setAttribute("side", "double");
        ring4.setAttribute("color", "cyan");
        this.rocket.append(ring4);

        let window5 = document.createElement("a-circle");
        window5.setAttribute("position", {x: 0, y: 1, z: -1});
        window5.setAttribute("side", "double");
        window5.setAttribute("color", "cyan");
        window5.setAttribute("opacity", "0.75");
        window5.setAttribute("radius", "0.25");
        this.rocket.append(window5);

        let window6 = document.createElement("a-circle");
        window6.setAttribute("position", {x: 0, y: 2, z: -1});
        window6.setAttribute("side", "double");
        window6.setAttribute("color", "cyan");
        window6.setAttribute("opacity", "0.75");
        window6.setAttribute("radius", "0.25");
        this.rocket.append(window6);

        let window7 = document.createElement("a-circle");
        window7.setAttribute("position", {x: 0, y: 3, z: -1});
        window7.setAttribute("side", "double");
        window7.setAttribute("color", "cyan");
        window7.setAttribute("opacity", "0.75");
        window7.setAttribute("radius", "0.25");
        this.rocket.append(window7);

        let window8 = document.createElement("a-circle");
        window8.setAttribute("position", {x: 0, y: 4, z: -1});
        window8.setAttribute("side", "double");
        window8.setAttribute("color", "cyan");
        window8.setAttribute("opacity", "0.75");
        window8.setAttribute("radius", "0.25");
        this.rocket.append(window8);

        let leftFin = document.createElement("a-triangle");
        leftFin.setAttribute("vertex-a", "-2 1 0");
        leftFin.setAttribute("vertex-b", "0 6 0");
        leftFin.setAttribute("vertex-c", "0 1 0");
        leftFin.setAttribute("side", "double");
        leftFin.setAttribute("color", "red");
        this.rocket.append(leftFin);

        let rightFin = document.createElement("a-triangle");
        rightFin.setAttribute("vertex-a", "2 1 0");
        rightFin.setAttribute("vertex-b", "0 6 0");
        rightFin.setAttribute("vertex-c", "0 1 0");
        rightFin.setAttribute("side", "double");
        rightFin.setAttribute("color", "red");
        this.rocket.append(rightFin);

        scene.append(this.rocket);
    }

    launch() {
        this.y += this.dy;
        this.rocket.setAttribute("position", {
            x: this.x,
            y: this.y,
            z: this.z
        });
    }
}
