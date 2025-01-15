class Note1{
    constructor(x,y,z){
        this.y = y;
        this.dy = 0.005;
        this.x = x;
        this.z = z;
        this.flag = false;
      this.obj = document.createElement("a-circle");
      this.obj.setAttribute("radius",0.1);
      this.obj.setAttribute("position",{x:x, y:this.y, z:z});
      cursor = document.getElementById("cylinderCursor");
      cursor.append(this.obj);
    }

    move(){
      this.flag=true;
      if(this.flag == true){
        this.y -= this.dy;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
      }
    }

    scoring(){
      this.obj.setAttribute("opacity","0");
      score++;
      combo++;
    }

    miss(){
      combo=0;
   
    }

  }

    class Note2{
      constructor(x,y,z){
          this.y = y;
          this.dy = 0.005;
          this.x = x;
          this.z = z;
          this.flag=false;
        this.obj = document.createElement("a-circle");
        this.obj.setAttribute("radius",0.1);
        this.obj.setAttribute("position",{x:x, y:this.y, z:z});
        cursor = document.getElementById("cylinderCursor");
        cursor.append(this.obj);
      }
  
      move(){
        this.flag=true;
        if(this.flag == true){
          this.y -= this.dy;
          this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        }
      }
  
      scoring(){
        this.obj.setAttribute("opacity","0");
        score++;
      }
  
      }
  
      class Note3{
        constructor(x,y,z){
            this.y = y;
            this.dy = 0.005;
            this.x = x;
            this.z = z;
            this.flag=false;
          this.obj = document.createElement("a-circle");
          this.obj.setAttribute("radius",0.1);
          this.obj.setAttribute("position",{x:x, y:this.y, z:z});
          cursor = document.getElementById("cylinderCursor");
          cursor.append(this.obj);
        }
    
        move(){
          this.flag=true;
          if(this.flag == true){
            this.y -= this.dy;
            this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
          }
        }
    
        scoring(){
          this.obj.setAttribute("opacity","0");
          score++;
        }
    
        }
    
        class Note4{
          constructor(x,y,z){
              this.y = y;
              this.dy = 0.005;
              this.x = x;
              this.z = z;
              this.flag=false;
            this.obj = document.createElement("a-circle");
            this.obj.setAttribute("radius",0.1);
            this.obj.setAttribute("position",{x:x, y:this.y, z:z});
            cursor = document.getElementById("cylinderCursor");
            cursor.append(this.obj);
          }
      
          move(){
            this.flag=true;
            if(this.flag == true){
              this.y -= this.dy;
              this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
            }
          }
      
          scoring(){
            this.obj.setAttribute("opacity","0");
            score++;
          }
      
          }
      