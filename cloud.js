// <a-gltf-model src="#cloud" position="0 50 0"></a-gltf-model>

const scene = document.querySelector("#scene");
console.log(scene);
function addClouds(numOfClouds){
  console.log("hello world");
  console.log(scene);
  const cloud = document.createElement("a-gltf-model");
  cloud.setAttribute("src","#cloud");
  cloud.setAttribute("position","0 50 0");
  console.log(cloud);
  scene.appendChild(cloud);

}

addClouds(10);