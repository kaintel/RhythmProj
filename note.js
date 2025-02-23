
class Note {
  constructor(x, y, z, c, dy) {
    this.y = y;
    this.dy = dy;
    this.x = x;
    this.z = z;

    this.obj = document.createElement("a-circle");
    this.obj.setAttribute("radius", 0.1);
    this.obj.setAttribute("material", "src: url(images/chop.png); transparent: false");
    this.obj.setAttribute("position", { x: x, y: this.y, z: z });
    cursor = document.getElementById(c);
    cursor.append(this.obj);
  }

  move() {
      this.y -= this.dy;
      this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    
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


