class Minotaur {
  constructor(x, y, z) {
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src", "#mino");
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
    this.speed = 0.05; // Speed at which the Minotaur chases the player
    this.groundLevel = y; // Store the initial y position (ground level)
  }

  idle() {
    this.obj.setAttribute("animation-mixer", { timeScale: 1 });
   
  }

  attack() {
    this.obj.setAttribute("animation-mixer", { timeScale: 2 });
  }

  dead() {
    this.obj.setAttribute("visible", "false");
    minotaurs.length = 0;
  }

  chase(playerPosition) {

    let minotaurPosition = this.obj.object3D.position;

    let direction = {
      x: playerPosition.x - minotaurPosition.x,
      y: 0, 
      z: playerPosition.z - minotaurPosition.z,
    };

    let length = Math.sqrt(direction.x ** 2 + direction.y ** 2 + direction.z ** 2);
    direction.x /= length;
    direction.y /= length;
    direction.z /= length;


    minotaurPosition.x += direction.x * this.speed;
    minotaurPosition.z += direction.z * this.speed;

    minotaurPosition.y = this.groundLevel;

    this.obj.setAttribute("position", minotaurPosition);
    this.facePlayer(playerPosition);
  }

  facePlayer(playerPosition) {
    
    let minotaurPosition = this.obj.object3D.position;

 
    let dx = playerPosition.x - minotaurPosition.x;
    let dz = playerPosition.z - minotaurPosition.z;
    let angle = Math.atan2(dx, dz) * (180 / Math.PI); 
    this.obj.setAttribute("rotation", { x: 0, y: angle, z: 0 });
  }

  redo(){
    this.obj.setAttribute("position", { x: 0, y: 0, z: -60 });
  }
}


class Monster2{
    constructor(x,y,z){
        this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src","#monster2");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        this.obj.setAttribute("scale", "0.0051 0.005 0.005");
        scene.append(this.obj);    
        this.speed = 0.05;
        this.groundLevel = y;
    }
    attack(){
        this.obj.setAttribute("animation-mixer",{timeScale: 2});
          }

          idle(){
           
          }
          dead(){
            this.obj.setAttribute("visible","false");
            monster2s.length = 0;
            
          }

          chase(playerPosition) {
            
            let monster2Position = this.obj.object3D.position;
        
            let direction = {
              x: playerPosition.x - monster2Position.x,
              y: 0, 
              z: playerPosition.z - monster2Position.z,
            };
        
            let length = Math.sqrt(direction.x ** 2 + direction.y ** 2 + direction.z ** 2);
            direction.x /= length;
            direction.y /= length;
            direction.z /= length;
        
        
            monster2Position.x += direction.x * this.speed;
            monster2Position.z += direction.z * this.speed;
        
            monster2Position.y = this.groundLevel;
        
            this.obj.setAttribute("position", monster2Position);
            this.facePlayer(playerPosition);
          }
        
          facePlayer(playerPosition) {
            
            let monster2Position = this.obj.object3D.position;
        
         
            let dx = playerPosition.x - monster2Position.x;
            let dz = playerPosition.z - monster2Position.z;
            let angle = Math.atan2(dx, dz) * (180 / Math.PI); 
            this.obj.setAttribute("rotation", { x: 0, y: angle, z: 0 });
          }
          redo(){
            this.obj.setAttribute("position", { x: 0, y: 0, z: -120 });
          }
}

class Doctor{
  constructor(x,y,z){
      this.obj = document.createElement("a-gltf-model");
      this.obj.setAttribute("src","#dragon");
      this.obj.setAttribute("position",{x:x,y:y,z:z});
      this.obj.setAttribute("scale", "1.5 1.5 1.5");
      scene.append(this.obj);    
      this.speed = 0.05;
      this.groundLevel = y;
  }
  attack(){
      this.obj.setAttribute("animation-mixer",{timeScale: 2});
        }
        idle(){
          
        }
        dead(){
          this.obj.setAttribute("visible","false");
          doctors.length = 0;
        }

        chase(playerPosition) {

          let doctorPosition = this.obj.object3D.position;
      
          let direction = {
            x: playerPosition.x - doctorPosition.x,
            y: 0, 
            z: playerPosition.z - doctorPosition.z,
          };
      
          let length = Math.sqrt(direction.x ** 2 + direction.y ** 2 + direction.z ** 2);
          direction.x /= length;
          direction.y /= length;
          direction.z /= length;
      
      
          doctorPosition.x += direction.x * this.speed;
          doctorPosition.z += direction.z * this.speed;
      
          doctorPosition.y = this.groundLevel;
      
          this.obj.setAttribute("position", doctorPosition);
          this.facePlayer(playerPosition);
        }
      
        facePlayer(playerPosition) {
          
          let doctorPosition = this.obj.object3D.position;
      
       
          let dx = playerPosition.x - doctorPosition.x;
          let dz = playerPosition.z - doctorPosition.z;
          let angle = Math.atan2(dx, dz) * (180 / Math.PI); 
          this.obj.setAttribute("rotation", { x: 0, y: angle, z: 0 });
        }
        redo(){
          this.obj.setAttribute("position", { x: 0, y: 0, z: -185 });
        }
}