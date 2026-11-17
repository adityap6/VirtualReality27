let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 50; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }

  for(let i = 0; i < 30; i++){
    let x = rnd(-150,150);
    let z = rnd(-150,150);
    let y = rnd(10,75);
    createCloud(x, y, z)
  }

  for(let i = 0; i < 5; i++){
    let x = rnd(-25,25);
    let z = rnd(-25,25);
    let y = rnd(10,75);
    createHouse(x, 0, 0)
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.

   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/

/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}


function createCloud( x, y, z ){
  let cloud = document.createElement("a-entity");
  let shape1 = document.createElement("a-sphere");
  shape1.setAttribute("radius", 1);
  shape1.setAttribute("scale", {x: 3, y: 1.25, z: 2});
  shape1.setAttribute("position", {x: x, y: y, z: z});
  shape1.setAttribute("color", "gray")

  let shape2 = document.createElement("a-sphere");
  shape2.setAttribute("radius", 1);
  shape2.setAttribute("scale", {x: 2, y: 1, z: 2});
  shape2.setAttribute("position", {x: x-2, y: y, z: z});
  shape2.setAttribute("color", "gray")

  let shape3 = document.createElement("a-sphere");
  shape3.setAttribute("radius", 1);
  shape3.setAttribute("scale", {x: 2, y: 1, z: 2});
  shape3.setAttribute("position", {x: x+2, y: y, z: z});
  shape3.setAttribute("color", "gray")


  scene.append(shape1) 
  scene.append(shape2) 
  scene.append(shape3) 
  scene.append(cloud)
}

  // function createHouse(){
  //     let house = document.createElement("a-entity");
  //     let wall1 = document.createElement("a-box");
  //     wall1.setAttribute("width", "2.25")
  //     wall1.setAttribute("depth", ".15")
  //     wall1.setAttribute("position", {x:x, y:y, z:z})
  //     wall1.setAttribute





function createHouse(x, y, z) {
    // Create the main house entity
    let house = document.createElement("a-entity");

    // Walls
    let walls = document.createElement("a-box");
    walls.setAttribute("width", "2.25");
    walls.setAttribute("height", "2");
    walls.setAttribute("depth", "2");
    walls.setAttribute("position", {x: 0, y: 1, z: 0});
    walls.setAttribute("color", "#D2A679");
    house.appendChild(walls);

    // Roof
    let roof = document.createElement("a-cone");
    roof.setAttribute("radius-bottom", "1.65");
    roof.setAttribute("radius-top", "0");
    roof.setAttribute("height", "1.2");
    roof.setAttribute("position", {x: 0, y: 2.6, z: 0});
    roof.setAttribute("color", "#8B4513");
    house.appendChild(roof);

    // Door
    let door = document.createElement("a-box");
    door.setAttribute("width", "0.6");
    door.setAttribute("height", "1.2");
    door.setAttribute("depth", "0.1");
    door.setAttribute("position", {x: 0, y: 0.6, z: 1.05});
    door.setAttribute("color", "#654321");
    house.appendChild(door);

    // Left window
    let window1 = document.createElement("a-box");
    window1.setAttribute("width", "0.5");
    window1.setAttribute("height", "0.5");
    window1.setAttribute("depth", "0.1");
    window1.setAttribute("position", {x: -0.7, y: 1.3, z: 1.05});
    window1.setAttribute("color", "#87CEEB");
    house.appendChild(window1);

    // Right window
    let window2 = document.createElement("a-box");
    window2.setAttribute("width", "0.5");
    window2.setAttribute("height", "0.5");
    window2.setAttribute("depth", "0.1");
    window2.setAttribute("position", {x: 0.7, y: 1.3, z: 1.05});
    window2.setAttribute("color", "#87CEEB");
    house.appendChild(window2);

    // Chimney
    let chimney = document.createElement("a-cylinder");
    chimney.setAttribute("radius", "0.2");
    chimney.setAttribute("height", "1");
    chimney.setAttribute("position", {x: 0.7, y: 3, z: -0.5});
    chimney.setAttribute("color", "#696969");
    house.appendChild(chimney);

    // Position the entire house
    house.setAttribute("position", {x: x, y: y, z: z});

    // Add house to the A-Frame scene
    document.querySelector("a-scene").appendChild(house);
}














//   <a-box width="2.25" height="3.5" depth="0.15" position="1.125 1.75 0" color="#E8D9BE"></a-box>
//   <a-box width="2.25" height="3.5" depth="0.15" position="4.875 1.75 0" color="#E8D9BE"></a-box>
//   <a-box width="1.5" height="1" depth="0.15" position="3 3 0" color="#E8D9BE"></a-box>
//   <a-triangle
//       vertex-a="0 0 0"
//       vertex-b="6 0 0"
//       vertex-c="3 2.65 0"
//       position="0 3.5 -0.09"
//       material="side: double"
//       color="#E8D9BE">
//   </a-triangle>
//   <a-box width="6" height="3.5" depth="0.15" position="3 1.75 -7.35" color="#E8D9BE"></a-box>
//   <a-triangle
//       vertex-a="0 0 0"
//       vertex-b="6 0 0"
//       vertex-c="3 2.65 0"
//       position="0 3.5 -7.44"
//       material="side: double"
//       color="#E8D9BE">
//   </a-triangle>
//   <a-box width="7.35" height="3.5" depth="0.15" position="0 1.75 -3.675" rotation="0 90 0" color="#E8D9BE"></a-box>
//   <a-box width="7.35" height="3.5" depth="0.15" position="6 1.75 -3.675" rotation="0 90 0" color="#E8D9BE"></a-box>
//   <a-box width="4.25" height="0.18" depth="7.8" position="1.5 4.95 -3.675" rotation="0 0 42" color="#8B4932"></a-box>
//   <a-box width="4.25" height="0.18" depth="7.8" position="4.5 4.95 -3.675" rotation="0 0 -42" color="#8B4932"></a-box>
//   <a-box width="1.45" height="2.5" depth="0.06" position="3 1.25 0.12" color="#70452D"></a-box>
//   <a-sphere radius="0.20" position="3.5 1.3 0.17" color="#E8B84D"></a-sphere>

//   <a-box width="0.9" height="1.1" depth="0.05" position="1.1 2.2 0.10" color="#9ED9E8"></a-box>
//   <a-box width="0.07" height="1.1" depth="0.04" position="1.1 2.2 0.14" color="white"></a-box>
//   <a-box width="0.9" height="0.07" depth="0.04" position="1.1 2.2 0.14" color="white"></a-box>
//   <a-box width="0.9" height="1.1" depth="0.04" position="4.9 2.2 0.10" color="#9ED9E8"></a-box>
//   <a-box width="0.07" height="1.1" depth="0.04" position="4.9 2.2 0.14" color="white"></a-box>
//   <a-box width="0.9" height="0.07" depth="0.04" position="4.9 2.2 0.14" color="white"></a-box>
// </a-entity>



