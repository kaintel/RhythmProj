
class Note {
  constructor(x, y, z, c) {
    this.y = y;
    this.dy = 0.003;
    this.x = x;
    this.z = z;
    this.flag = false;
    this.obj = document.createElement("a-circle");
    this.obj.setAttribute("radius", 0.1);
    this.obj.setAttribute("position", { x: x, y: this.y, z: z });
    cursor = document.getElementById(c);
    cursor.append(this.obj);
  }

  move() {
    this.flag = true;
    if (this.flag == true) {
      this.y -= this.dy;
      this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    }
  }

  scoring() {
    this.obj.setAttribute("opacity", "0");
    combo++;
      score+= 100*combo;
  }
  
  miss() {
    this.obj.setAttribute("opacity", "0");
    combo = 0;
    miss += 1;
  }

}


