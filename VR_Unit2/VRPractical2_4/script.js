
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);

window.addEventListener("DOMContentLoaded", function() {

    

    let scene = document.querySelector("a-scene");

    for(let i = 0; i < 200; i++){
        let x = rnd(-300,300);
        let z = rnd(-300,300);
        let y = rnd(50,75);
        createCloud(x, y, z)
    }

    function createCloud( x, y, z ){
        let cloud = document.createElement("a-entity");
        let shape1 = document.createElement("a-sphere");
        shape1.setAttribute("radius", 1);
        shape1.setAttribute("scale", {x: 3, y: 1.25, z: 2});
        shape1.setAttribute("position", {x: x, y: y, z: z});
        shape1.setAttribute("color", "white")

        let shape2 = document.createElement("a-sphere");
        shape2.setAttribute("radius", 1);
        shape2.setAttribute("scale", {x: 2, y: 1, z: 2});
        shape2.setAttribute("position", {x: x-2, y: y, z: z});
        shape2.setAttribute("color", "white")

        let shape3 = document.createElement("a-sphere");
        shape3.setAttribute("radius", 1);
        shape3.setAttribute("scale", {x: 2, y: 1, z: 2});
        shape3.setAttribute("position", {x: x+2, y: y, z: z});
        shape3.setAttribute("color", "white")


        scene.append(shape1) 
        scene.append(shape2) 
        scene.append(shape3) 
        scene.append(cloud)
}


    let rockets = [];


    for (let i = 0; i < 100; i++) {

        let x = rnd(-100, 100);
        let z = rnd(-100, 100);
        let y = rnd(-12, -6);

        let rocket = new Rocket(scene, x, y, z);
        rockets.push(rocket);
    }


    function animateRockets() {
        for (let i = 0; i < rockets.length; i++) {
            rockets[i].launch();
        }

        setTimeout(animateRockets, 50);
    }

    animateRockets();


    let ufos = [];

    for (let i = 0; i < 100; i++) {
        let x = rnd(-100, 100);
        let z = rnd(-100, 100);
        let y = rnd(20, 100);
        let dy = rnd(1, 5) / 10;

        let ufo = new UFO(scene, x, y, z, dy);
        ufos.push(ufo);
    }

    function animateUFOs() {
        for (let i = 0; i < ufos.length; i++) {
            ufos[i].invade();
        }
        setTimeout(animateUFOs, 50);
    }
    animateUFOs();



    let snowflakes = [];

    for (let i = 0; i < 100; i++) {

        let x = rnd(-100, 100);
        let z = rnd(-100, 100);
        let y = rnd(20, 100);

        let snowflake = new Snowflake(scene, x, y, z);
        snowflakes.push(snowflake);
    }

    function animateSnowflakes() {
        for (let i = 0; i < snowflakes.length; i++) {
            snowflakes[i].fall();
        }

        setTimeout(animateSnowflakes, 50);
    }

    animateSnowflakes();

});

