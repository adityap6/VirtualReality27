window.addEventListener("DOMContentLoaded",function() {
  let scene = document.querySelector("a-scene");

  let box = document.createElement("a-box");

  box.setAttribute("position",{x: -2, y: 2, z: -1});
  box.setAttribute("color", "green");
  box.setAttribute("rotation", "45 45 45");
  scene.append(box);
  
})