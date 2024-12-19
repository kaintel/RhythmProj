class Note{
    constructor(x,y,z){
        this.y = y;
        this.dy = 0.1;
        this.x = x;
        this.z = z;
      this.obj = document.createElement("a-circle");
      this.obj.setAttribute("radius",0.1);
      this.obj.setAttribute("position",{x:x, y:this.y, z:z});
      cursor.append(this.obj)
    }
    move(){
      
        this.y -= this.dy;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
      }
      
    }
