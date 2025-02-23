class Minotaur{
    constructor(x,y,z){

        this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src","#mino");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);    
    }
    idle(){
        this.obj.setAttribute("animation-mixer",{clip: "Idle", timeScale: 1});
    }
   attack(){
    this.obj.setAttribute("animation-mixer",{timeScale: 4});
      }
      dead(){
this.obj.setAttribute("visible","false");
minotaurs.length = 0;
      }
}


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
          dead(){
            this.obj.setAttribute("visible","false");
            monster2s.length = 0;
            
          }
}

class Doctor{
  constructor(x,y,z){
      this.obj = document.createElement("a-gltf-model");
      this.obj.setAttribute("src","#dragon");
      this.obj.setAttribute("position",{x:x,y:y,z:z});
      this.obj.setAttribute("scale", "1.5 1.5 1.5");
      scene.append(this.obj);    

  }
  attack(){
      this.obj.setAttribute("animation-mixer",{timeScale: 2});
        }
        dead(){
          this.obj.setAttribute("visible","false");
          doctors.length = 0;
        }
}