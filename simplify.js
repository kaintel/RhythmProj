function display(){
    document.querySelectorAll('#output')[0].setAttribute('value', `score: ${Math.round(score)}`);
    document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
    document.querySelectorAll('#output')[2].setAttribute('value', `hp: ${remainhealth}/${resetenemyhealth}`);
  }
  
  function reset(){
    setTimeout(() => {
      mainCamera.setAttribute("active", true);
      cylinderCamera.setAttribute("active", false);
      score = 0;
      combo = 0;
      miss = 0;
      remainhealth = resetenemyhealth;
      for (let yourhealth of yourhealths) {
        yourhealth.returnhealth();
        }
        for (let enemyhealth of enemyhealths) {
          enemyhealth.returnhealth(); 
          }
    },2000);


    for (let note1 of note1s) {
      note1.obj.setAttribute("opacity", 0);
    }
    for (let note2 of note2s) {
      note2.obj.setAttribute("opacity", 0);
    }
    for (let note3 of note3s) {
      note3.obj.setAttribute("opacity", 0);
    }
    for (let note4 of note4s) {
      note4.obj.setAttribute("opacity", 0);
    }
    for (let scorenote of scorenotes) {
      scorenote.obj.setAttribute("opacity", 0);
    }
        for (let sky of skys){
          sky.start();
        }
        for(let startcamera of startcameras){
          startcamera.returncamera();
        }

note1s.length = 0;
note2s.length = 0;
note3s.length = 0;
note4s.length = 0;
scorenotes.length = 0;
this.flag = false;
this.flag2 = false;
this.flag3 = false; 
display();

  }

  function missed(){
    Miss.setAttribute('opacity', 1);
    setTimeout(() => {
      Miss.setAttribute('opacity', 0);
    },300);
}
  

  function play(){
    for (let yourhealth of yourhealths) {
    
    for (let note1 of note1s) {
        note1.move();
        if (note1.y < -0.55) {
          note1.miss();
          yourhealth.damage();
          document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
          note1s.splice(note1s.indexOf(note1), 1);
missed();
        }
      }
      for (let note2 of note2s) {
        note2.move();
        if (note2.y < -0.55) {
          note2.miss();
          yourhealth.damage();
          document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
          note2s.splice(note2s.indexOf(note2), 1);
          missed();
        }
      }
      for (let note3 of note3s) {
        note3.move();
        if (note3.y < -0.55) {
          note3.miss();
          yourhealth.damage();
          document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
          note3s.splice(note3s.indexOf(note3), 1);
          missed();
        }
      }
      for (let note4 of note4s) {
        note4.move();
        if (note4.y < -0.55) {
          note4.miss();
          yourhealth.damage();
          document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
          note4s.splice(note4s.indexOf(note4), 1);
          missed();
        }
      }
    }
  }


  class build{
    constructor(n,sn,c,dy){
      for (let y = 2; y < 20; y += rnd(0.2, 2)) {
        let x = -0.45;
        note1s.push(new n(x, y, 0, c, dy));
      }
    
      for (let y = 2; y < 20; y += rnd(0.2, 2)) {
        let x = -0.15;
        note2s.push(new n(x, y, 0, c, dy));
      }
    
      for (let y = 2; y < 20; y += rnd(0.2, 2)) {
        let x = 0.15;
        note3s.push(new n(x, y, 0, c, dy));
      }
    
      for (let y = 2; y < 20; y += rnd(0.2, 2)) {
        let x = 0.45;
        note4s.push(new n(x, y, 0, c, dy));
      }
    // scorenote
      for (let x = -0.45; x < 0.45; x += 0.3) {
        let y = -0.5;
        scorenotes.push(new sn(x, y, 0, c));
      }
    }
  }

function hit(){
  for( let enemyhealth of enemyhealths){
    window.addEventListener("keydown", function (e) {
  
      for (let note1 of note1s) {
        if (note1.y > -0.55 && note1.y < -0.45 && e.key == "s") {
          note1.scoring();
          note1s.splice(note1s.indexOf(note1), 1);
          enemyhealth.damage();
          display();
          c1.setAttribute('opacity', 1);
          setTimeout(() => {
            c1.setAttribute('opacity', 0);
          },100)
        }
      }
    })
  
  
    window.addEventListener("keydown", function (e) {
  
      for (let note2 of note2s) {
        if (note2.y > -0.55 && note2.y < -0.45 && e.key == "d") {
          note2.scoring();
          note2s.splice(note2s.indexOf(note2), 1);
          enemyhealth.damage();
          display();
          c2.setAttribute('opacity', 1);
          setTimeout(() => {
            c2.setAttribute('opacity', 0);
          },100)
        }
      }
    })
  
    window.addEventListener("keydown", function (e) {
  
      for (let note3 of note3s) {
        if (note3.y > -0.55 && note3.y < -0.45 && e.key == "j") {
          note3.scoring();
          note3s.splice(note3s.indexOf(note3), 1);
          enemyhealth.damage();
          display();
          c3.setAttribute('opacity', 1);
          setTimeout(() => {
            c3.setAttribute('opacity', 0);
          },100)
        }
      }
    })
  
    window.addEventListener("keydown", function (e) {
  
      for (let note4 of note4s) {
        if (note4.y > -0.55 && note4.y < -0.45 && e.key == "k") {
          note4.scoring();
          note4s.splice(note4s.indexOf(note4), 1);
          enemyhealth.damage();
          display();
          c4.setAttribute('opacity', 1);
          setTimeout(() => {
            c4.setAttribute('opacity', 0);
          },100)
        }
      }
    })
  }
  }




  class Startcamera {
    constructor(x, y, z, dx, dz, r) {
      this.y = y;
      this.dx = dx;
      this.dz = dz;
      this.x = x;
      this.z = z;
  this.rx = x;
  this.rz = z;
  this.ry = y;
      this.obj = document.createElement("a-camera");
      this.obj.setAttribute("position", { x: x, y:y, z: z });
      this.obj.setAttribute("look-controls", "enabled", "false");
      this.obj.setAttribute("wasd-controls", "enabled", "false");
      this.obj.setAttribute("active", "false");
      this.obj.setAttribute("rotation", { x: 0, y: r, z: 0 });
      scene.append(this.obj);
    }
  
    move() {
        this.x += this.dx;
        this.z -= this.dz;
        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
        this.obj.setAttribute("active", "true");
      
    }

    returncamera(){
      this.x = this.rx;
      this.z = this.rz;
      this.obj.setAttribute("position", { x: this.rx, y:this.ry, z: this.rz });
    }
  
  }

