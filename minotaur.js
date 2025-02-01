class Minotaur{
    constructor(x,y,z){

        this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src","#mino");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);    
    }
   attack(){
    this.obj.setAttribute("animation-mixer",{timeScale: 4});
      }

      dead(){
this.obj.parentNode.removeChild(this.obj);
      }

}