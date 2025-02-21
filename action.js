let rnd = (l, u) => Math.random() * (u - l) + l
let scene, camera, note1s = [], note2s = [], note3s = [], note4s = [],
   minotaurs = [],monster2s = [], scorenotes = [], score = 0, combo = 0, miss = 0,
  clouds = [], skys = [], yourhealths = [], enemyhealths = [], doctors = [], startcameras = []; 

window.onload = function () {
  scene = document.querySelector("a-scene");
  mainCamera = document.getElementById("mainCamera");
  cylinderCamera = document.getElementById("cylinderCamera");
  cursor = document.querySelector("a-cursor");
  cylinderCursor = document.querySelector("cylinderCursor");
  startscreen = document.getElementById("startscreen");
  blacksky = document.getElementById("blacksky");
  skys.push(new Sky(0,0,0));
  startcameras.push(new Startcamera(0,0,0,10,10,310));
this.flag=false;
this.flag2=false;
this.flag3=false;

this.flagc1=false;
// monsters
    
yourhealths.push(new yourhealth(1.3,0.7,0,"cylinderCursor"));
enemyhealths.push(new enemyhealth(0, 0, 0,"cylinderCursor"));
hit();

minotaurs.push(new Minotaur(0, 0, 0));
monster2s.push(new Monster2(1, 0, 15));
doctors.push(new Doctor(-5, 0, 10));

  
}


loop();
function loop() {
  let enemySlain = document.querySelector('#slain');
  let die = document.querySelector('#Died');

for (let sky of skys){
  sky.rotate();
}

  for (let minotaur of minotaurs) {
    let d = distance(mainCamera, minotaur.obj);
    minotaur.idle();

    if (d < 2.1) {
      mainCamera.setAttribute("position", { x: 7, y: 2, z: 1 });
      mainCamera.setAttribute("active", "false");
      this.flagc1=true;
  
      blacksky.setAttribute("visible", "true");
      startscreen.setAttribute("visible", "true");
      for (let sky of skys){
        sky.start();
      }


      setTimeout(() => {
        new build(Note, Scorenote, "cylinderCursor", 0.005);
        this.flag = true;
        blacksky.setAttribute("visible", "false");
        startscreen.setAttribute("visible", "false");
        for (let sky of skys){
          sky.stop();
        }
              }, 2000);

    }

    if (this.flagc1==true) {
      for(let startcamera of startcameras){        
        startcamera.move();      
    }
    setTimeout(() => {
      this.flagc1=false;
    }, 2000);
  }
/////////////////////////////////////////////////////////////////////////////
        if (this.flag==true) {

          cylinderCamera.components.sound.playSound();
          cylinderCamera.setAttribute("active", true);
          mainCamera.setAttribute("active", false);
    
          if (score >= 10000) {
            reset();
            minotaur.dead();
            enemySlain.setAttribute('opacity', 1);
            display();
            setTimeout(() => {
              enemySlain.setAttribute('opacity', 0);
            }, 2000);  
          }

          if (miss >= 10){
            reset();
            die.setAttribute('opacity', 1);
            display();
            setTimeout(() => {
              die.setAttribute('opacity', 0);
            }, 2000);  
          }

      setTimeout(() => {

play();

      }, 1000);//time before notes start falling//

    }
  }


  for (let monster2 of monster2s) {
    let d = distance(mainCamera, monster2.obj);
    if (d < 2.1) {
      new build(Note, Scorenote, "cylinderCursor", 0.007);
      this.flag2 = true;
      mainCamera.setAttribute("position", { x: 10, y: 1.5, z: -5 });
    }
        if (this.flag2==true) {
          cylinderCamera.components.sound.playSound();
          cylinderCamera.setAttribute("active", true);
          mainCamera.setAttribute("active", false);
    
          if (score >= 10000) {
            reset();
            monster2.dead();
            enemySlain.setAttribute('opacity', 1);
            display();
            setTimeout(() => {
              enemySlain.setAttribute('opacity', 0);
            }, 2000);  
          }

          if (miss >= 10){
            reset();
            die.setAttribute('opacity', 1);
            display();
            setTimeout(() => {
              die.setAttribute('opacity', 0);
            }, 2000);  
          }

      setTimeout(() => {

play();

      }, 1000);//time before notes start falling//

    }
  }



  for (let doctor of doctors) {
    let d = distance(mainCamera, doctor.obj);
    if (d < 2.1) {
      new build(Note, Scorenote, "cylinderCursor", 0.009);
      this.flag3 = true;
      mainCamera.setAttribute("position", { x: 10, y: 1.5, z: -5 });
    }
        if (this.flag3==true) {
          cylinderCamera.components.sound.playSound();
          cylinderCamera.setAttribute("active", true);
          mainCamera.setAttribute("active", false);
    
          if (score >= 10000) {
            reset();
            doctor.dead();
            enemySlain.setAttribute('opacity', 1);
            display();
            setTimeout(() => {
              enemySlain.setAttribute('opacity', 0);
            }, 2000);  
          }

          if (miss >= 10){
            reset();
            die.setAttribute('opacity', 1);
            display();
            setTimeout(() => {
              die.setAttribute('opacity', 0);
            }, 2000);  
          }

      setTimeout(() => {

play();

      }, 1000);//time before notes start falling//

    }
  }


  window.requestAnimationFrame(loop);

}

function distance(obj1, obj2) {
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
  return d;
}