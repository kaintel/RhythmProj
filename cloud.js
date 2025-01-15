class Cloud{
  constructor(x,y,z){
this.x = x;
this.dx = 0.2;
this.y = y;
this.z = z;
      this.obj = document.createElement("a-gltf-model");
      this.obj.setAttribute("src","#cloud");
      this.obj.setAttribute("position",{x:x,y:y,z:z});
      scene.append(this.obj);    






  }
 move(){
  this.x -= this.dx;
  this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }
}