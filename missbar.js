class Missbar{
    constructor(x,y,z){
        this.y = y;
        this.x = x;
        this.z = z;
        this.flag=false;        
      this.obj = document.createElement("a-box");
      this.obj.setAttribute("width",0.15);
      this.obj.setAttribute("height",0.1);
      this.obj.setAttribute("depth",0.1);
      this.obj.setAttribute("color","blue");
      this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});

      cursor = document.getElementById("cylinderCursor");
      cursor.append(this.obj);
    }


    }
