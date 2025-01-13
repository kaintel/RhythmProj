class Monster2{
    constructor(x,y,z){


        this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src","#monster2");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        this.obj.setAttribute("scale", "0.0051 0.005 0.005");
        scene.append(this.obj);    







    }
   attack(){
    this.obj.setAttribute("animation-mixer",{timeScale: 2});
      }
}