class yourhealth{
    constructor(x,y,z,c){
        this.y = y;
        this.x = x;
        this.rx = x;
        this.z = z;
        this.s=0;
        this.ds=0.07;
      this.obj = document.createElement("a-box");
      this.obj.setAttribute("height",0.07);
      this.obj.setAttribute("width",0.7);
      this.obj.setAttribute("depth",0.00001);
      this.obj.setAttribute("color","#a3070c");
      this.obj.setAttribute("position",{x:x, y:y, z:z});

      this.obj2 = document.createElement("a-box");
      this.obj2.setAttribute("height",0.07);
      this.obj2.setAttribute("width",0.7);
      this.obj2.setAttribute("depth",0.00001);
      this.obj2.setAttribute("color","#bf6f72");
      this.obj2.setAttribute("position",{x:x, y:y, z:z});

      cursor = document.getElementById(c);
      cursor.append(this.obj2);
      cursor.append(this.obj);
    }

    damage(){
      this.s+=this.ds;
      this.x -= this.ds/2;
      this.obj.setAttribute("width",0.7-this.s);
      this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
      
    }

    returnhealth(){
      this.s = 0;
      this.x = this.rx;
      this.obj.setAttribute("width",0.7);
      this.obj.setAttribute("position",{x:this.rx, y:this.y, z:this.z});
      
    }
}

class enemyhealth{
  constructor(x,y,z,c){
      this.y = y;
      this.x = x;
      this.rx = x;
      this.z = z;
      this.s=0;
      this.ds=0.07;
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("height",0.05);
    this.obj.setAttribute("width",1.1);
    this.obj.setAttribute("depth",0.00001);
    this.obj.setAttribute("color","#470800");
    this.obj.setAttribute("position",{x:x, y:y, z:z});

    this.obj2 = document.createElement("a-box");
    this.obj2.setAttribute("height",0.05);
    this.obj2.setAttribute("width",1);
    this.obj2.setAttribute("depth",0.00001);
    this.obj2.setAttribute("color","#1f0300");
    this.obj2.setAttribute("position",{x:x, y:y, z:z});

    cursor = document.getElementById(c);
    cursor.append(this.obj2);
    cursor.append(this.obj);
  }

  damage(){
    this.cs = (combo*100)/10000;
    this.s+=(this.cs*1);
    this.obj.setAttribute("width",1-this.s);
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    
  }

  returnhealth(){
    this.s = 0;
    this.x = this.rx;
    this.obj.setAttribute("width",1);
    this.obj.setAttribute("position",{x:this.rx, y:this.y, z:this.z});
  }
}
