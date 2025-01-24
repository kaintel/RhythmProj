class Minotaur{
    constructor(x,y,z){
this.r=0
this.dr=0.1
        this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src","#mino");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);    
    }
   attack(){
    this.obj.setAttribute("animation-mixer",{timeScale: 4});
      }

      rotate(){
        this.r += this.dr;
          this.obj.setAttribute("rotation", this.r);
          }
}