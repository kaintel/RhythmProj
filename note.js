class Note1{
    constructor(x,y,z){
        this.y = y;
        this.dy = 0.01;
        this.x = x;
        this.z = z;
        this.missed = 1;
        this.flag=false;
        this.flag2=false;
        this.flag3=false;
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
      if (combo >= 3){
        this.flag2 = true;
      }
      if(this.flag2 == true){
        score*=1.2;
        if (combo >= 6){
          this.flag3 = true;
        }
      }
      if (this.flag3 == true){
        score*=2;
      }

      console.log(this.flag2);
    }



   miss(){
    combo = 0;
    this.obj.setAttribute("opacity","0");
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
      