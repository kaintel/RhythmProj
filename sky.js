class Sky{
    constructor(x, y, z){
this.x = x;
this.dx = 0.01;
this.y = y;
this.dy = 0.01;
this.z = z;
        this.obj = document.createElement("a-sky");
        this.obj.setAttribute("src","#sky2");
        this.obj.setAttribute("visible","true");
        scene.append(this.obj);    
    }
   rotate(){
    this.x += this.dx;
    this.y += this.dy;
    this.obj.setAttribute("rotation",{x:this.x,y:this.y,z:this.z});
      }

      stop(){
        this.obj.setAttribute("visible","false");
      }

      start(){
        this.obj.setAttribute("visible","true");
      }

}