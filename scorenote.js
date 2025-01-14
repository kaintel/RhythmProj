class Scorenote{
    constructor(x,y,z){
        this.y = y;
        this.x = x;
        this.z = z;
        this.flag=false;        
      this.obj = document.createElement("a-circle");
      this.obj.setAttribute("radius",0.1);
      this.obj.setAttribute("color","red");
      this.obj.setAttribute("position",{x:this.x, y:y, z:z});

      cursor = document.getElementById("cylinderCursor");
      cursor.append(this.obj);
    }


    }
