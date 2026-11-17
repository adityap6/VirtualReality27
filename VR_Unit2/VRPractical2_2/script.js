let car;
let a = 0;
let z = -20;
window.addEventListener("DOMContentLoaded", function() {
 createCar(-2, 0 , -20)
 loop();
});

function createCar(x, y, z) {

        let scene = document.querySelector("a-scene");
        car = document.createElement("a-entity");

        // MAIN BODY
        let base = document.createElement("a-box");
        base.setAttribute("position", "-1 1 1");
        base.setAttribute("height", ".5");
        base.setAttribute("width", "3");
        base.setAttribute("depth", "2");
        base.setAttribute("material", "color: #f754a6; side: double;");
        car.append(base);

        // WHEELS
        let wheel1 = document.createElement("a-cylinder");
        wheel1.setAttribute("radius", "0.5");
        wheel1.setAttribute("height", ".2");
        wheel1.setAttribute("rotation", "0 90 90");
        wheel1.setAttribute("position", "-2 .5 0");
        wheel1.setAttribute("src", "tire.png");
        car.append(wheel1);

        let wheel2 = document.createElement("a-cylinder");
        wheel2.setAttribute("radius", "0.5");
        wheel2.setAttribute("height", ".2");
        wheel2.setAttribute("rotation", "0 90 90");
        wheel2.setAttribute("position", "0 .5 0");
        wheel2.setAttribute("src", "tire.png");
        car.append(wheel2);

        let wheel3 = document.createElement("a-cylinder");
        wheel3.setAttribute("radius", "0.5");
        wheel3.setAttribute("height", ".2");
        wheel3.setAttribute("rotation", "0 90 90");
        wheel3.setAttribute("position", "0 .5 2");
        wheel3.setAttribute("src", "tire.png");
        car.append(wheel3);

        let wheel4 = document.createElement("a-cylinder");
        wheel4.setAttribute("radius", "0.5");
        wheel4.setAttribute("height", ".2");
        wheel4.setAttribute("rotation", "0 90 90");
        wheel4.setAttribute("position", "-2 .5 2");
        wheel4.setAttribute("src", "tire.png");
        car.append(wheel4);

        // TRIANGLES
        let triangle1 = document.createElement("a-triangle");
        triangle1.setAttribute("vertex-a", "-2.5 1.25 2");
        triangle1.setAttribute("vertex-b", "-1.5 1.25 2");
        triangle1.setAttribute("vertex-c", "-1.5 2 2");
        triangle1.setAttribute("material", "color: #f754a6; side: double;");
        car.append(triangle1);

        let triangle2 = document.createElement("a-triangle");
        triangle2.setAttribute("vertex-a", "-2.5 1.25 0");
        triangle2.setAttribute("vertex-b", "-1.5 1.25 0");
        triangle2.setAttribute("vertex-c", "-1.5 2 0");
        triangle2.setAttribute("material", "color: #f754a6; side: double;");
        car.append(triangle2);

        // WINDSHIELD
        let windshield = document.createElement("a-plane");
        windshield.setAttribute("position", "-2 1.5 1");
        windshield.setAttribute("rotation", "45 90 0");
        windshield.setAttribute("width", "2");
        windshield.setAttribute("height", "1.4");
        windshield.setAttribute("material", "color: #61B7EB; side: double;");
        car.append(windshield);

        // SIDE PANELS
        let side1 = document.createElement("a-plane");
        side1.setAttribute("position", "-.5 1.5 0");
        side1.setAttribute("width", "2");
        side1.setAttribute("material", "color: #f754a6; side: double;");
        car.append(side1);

        let side2 = document.createElement("a-plane");
        side2.setAttribute("position", "-.5 1.5 2");
        side2.setAttribute("width", "2");
        side2.setAttribute("material", "color: #f754a6; side: double;");
        car.append(side2);

        let side3 = document.createElement("a-plane");
        side3.setAttribute("rotation", "0 90 0");
        side3.setAttribute("position", ".5 1.5 1");
        side3.setAttribute("width", "2");
        side3.setAttribute("material", "color: #f754a6; side: double;");
        car.append(side3);

        // ROOF
        let roof = document.createElement("a-plane");
        roof.setAttribute("rotation", "90 0 0");
        roof.setAttribute("position", "-.5 2 1");
        roof.setAttribute("width", "2");
        roof.setAttribute("height", "2");
        roof.setAttribute("material", "color: #f754a6; side: double;");
        car.append(roof);

        // HEADLIGHTS
        let light1 = document.createElement("a-circle");
        light1.setAttribute("material", "color: yellow; side: double;");
        light1.setAttribute("position", "-2.51 1 1.75");
        light1.setAttribute("radius", ".2");
        light1.setAttribute("rotation", "0 90 0");
        car.append(light1);

        let light2 = document.createElement("a-circle");
        light2.setAttribute("material", "color: yellow; side: double;");
        light2.setAttribute("position", "-2.51 1 .25");
        light2.setAttribute("radius", ".2");
        light2.setAttribute("rotation", "0 90 0");
        car.append(light2);

        // BLUE PANELS
        let panel1 = document.createElement("a-plane");
        panel1.setAttribute("position", "-5.51 1.75 6.5");
        panel1.setAttribute("rotation", "0 90 0");
        panel1.setAttribute("width", "1.75");
        panel1.setAttribute("height", ".5");
        panel1.setAttribute("material", "color: #61B7EB; side: double;");
        car.append(panel1);

        let panel2 = document.createElement("a-plane");
        panel2.setAttribute("position", "0 1.685 -.01");
        panel2.setAttribute("width", ".75");
        panel2.setAttribute("height", ".5");
        panel2.setAttribute("material", "color: #61B7EB; side: double;");
        car.append(panel2);

        let panel3 = document.createElement("a-plane");
        panel3.setAttribute("position", "-1 1.685 -.01");
        panel3.setAttribute("width", ".75");
        panel3.setAttribute("height", ".5");
        panel3.setAttribute("material", "color: #61B7EB; side: double;");
        car.append(panel3);

        let panel4 = document.createElement("a-plane");
        panel4.setAttribute("position", "-1 1.685 2.01");
        panel4.setAttribute("width", ".75");
        panel4.setAttribute("height", ".5");
        panel4.setAttribute("material", "color: #61B7EB; side: double;");
        car.append(panel4);

        let panel5 = document.createElement("a-plane");
        panel5.setAttribute("position", "0 1.685 2.01");
        panel5.setAttribute("width", ".75");
        panel5.setAttribute("height", ".5");
        panel5.setAttribute("material", "color: #61B7EB; side: double;");
        car.append(panel5);

        // POSITION THE CAR
        car.setAttribute("position", {x:x, y:y, z:z});
        scene.append(car);
    }

function loop() {
    a += 1;
    z += 1;

    car.setAttribute("rotation", {x: 0, y: a, z: 0});

    car.setAttribute("position", {x: -2, y: 0, z: z});

    setTimeout(loop, 10);
}