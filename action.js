let rnd = (l, u) => Math.random() * (u - l) + l
let scene, camera, note1s = [], note2s = [], note3s = [], note4s = [],
  minotaurs = [], monster2s = [], scorenotes = [], score = 0, combo = 0, miss = 0,
  clouds = [], skys = [];

window.onload = function () {
  scene = document.querySelector("a-scene");
  mainCamera = document.getElementById("mainCamera");
  cylinderCamera = document.getElementById("cylinderCamera");
  cursor = document.querySelector("a-cursor");
  cylinderCursor = document.querySelector("cylinderCursor");

  skys.push(new Sky(0,0,0));
// notes
  for (let y = 2; y < 20; y += rnd(0.2, 2)) {
    let x = -0.3;
    note1s.push(new Note1(x, y, 0));
  }

  for (let y = 2; y < 20; y += rnd(0.2, 2)) {
    let x = -0.1;
    note2s.push(new Note2(x, y, 0));
  }

  for (let y = 2; y < 20; y += rnd(0.2, 2)) {
    let x = 0.1;
    note3s.push(new Note3(x, y, 0));
  }

  for (let y = 2; y < 20; y += rnd(0.2, 2)) {
    let x = 0.3;
    note4s.push(new Note4(x, y, 0));
  }
// scorenote
  for (let x = -0.3; x < 0.4; x += 0.2) {
    let y = -0.5;
    scorenotes.push(new Scorenote(x, y, 0));
  }
// monsters
  for (let a = 1; a < 2; a += 1) {
    let x = rnd(-3, 3);
    let z = 10;
    minotaurs.push(new Minotaur(x, 0, z));
  }

  for (let a = 1; a < 2; a += 1) {
    let x = rnd(-3, 3);
    let z = 15;
    monster2s.push(new Monster2(x, 0, z));
  }

  for (let a = 0; a < 1 ; a += 1) {
    
  }
 
  window.addEventListener("keydown", function (e) {

    for (let note1 of note1s) {
      if (note1.y > -0.55 && note1.y < -0.45 && e.key == "s") {
        note1.scoring();
        note1s.splice(note1s.indexOf(note1), 1);
        document.querySelectorAll('#output')[0].setAttribute('value', `score: ${Math.round(score)}`);
        document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
      }
    }
  })

  window.addEventListener("keydown", function (e) {

    for (let note2 of note2s) {
      if (note2.y > -0.55 && note2.y < -0.45 && e.key == "d") {
        note2.scoring();
        note2s.splice(note2s.indexOf(note2), 1);
        document.querySelectorAll('#output')[0].setAttribute('value', `score: ${Math.round(score)}`);
        document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
      }
    }
  })

  window.addEventListener("keydown", function (e) {

    for (let note3 of note3s) {
      if (note3.y > -0.55 && note3.y < -0.45 && e.key == "j") {
        note3.scoring();
        note3s.splice(note3s.indexOf(note3), 1);
        document.querySelectorAll('#output')[0].setAttribute('value', `score: ${Math.round(score)}`);
        document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
      }
    }
  })

  window.addEventListener("keydown", function (e) {

    for (let note4 of note4s) {
      if (note4.y > -0.55 && note4.y < -0.45 && e.key == "k") {
        note4.scoring();
        note4s.splice(note4s.indexOf(note4), 1);
        document.querySelectorAll('#output')[0].setAttribute('value', `score: ${Math.round(score)}`);
        document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
      }
    }
  })
  
}

function reset(){
  mainCamera.setAttribute("active", true);
  cylinderCamera.setAttribute("active", false);
  score = 0;
  combo = 0;
  for (let note1 of note1s) {
    note1.y += 4;
  }
  for (let note2 of note2s) {
    note2.y += 4;
  }
  for (let note3 of note3s) {
    note3.y += 4;
  }
  for (let note4 of note4s) {
    note4.y += 4;
  }
  this.flag = false;
  miss = 0;
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
    if (d < 1.6) {
      this.flag = true;
      mainCamera.setAttribute("position", { x: 7, y: 1.5, z: -5 });
    }
        if (this.flag==true) {
          minotaur.attack()
          cylinderCamera.setAttribute("active", true);
          mainCamera.setAttribute("active", false);
    
          if (score >= 10000) {
            reset();
            minotaur.dead();
            enemySlain.setAttribute('opacity', 1);
            setTimeout(() => {
              enemySlain.setAttribute('opacity', 0);
            }, 2000);  

          }

          if (miss >= 10){
            reset();
            die.setAttribute('opacity', 1);
            setTimeout(() => {
              die.setAttribute('opacity', 0);
            }, 2000);  
          }

      setTimeout(() => {
        for (let note1 of note1s) {
          note1.move();
          if (note1.y < -0.55) {
            note1.miss();
            document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
            note1s.splice(note1s.indexOf(note1), 1);
          }
        }
        for (let note2 of note2s) {
          note2.move();
          if (note2.y < -0.55) {
            note2.miss();
            document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
            note2s.splice(note2s.indexOf(note2), 1);
          }
        }
        for (let note3 of note3s) {
          note3.move();
          if (note3.y < -0.55) {
            note3.miss();
            document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
            note3s.splice(note3s.indexOf(note3), 1);
          }
        }
        for (let note4 of note4s) {
          note4.move();
          if (note4.y < -0.55) {
            note4.miss();
            document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
            note4s.splice(note4s.indexOf(note4), 1);
          }
        }
      }, 1000);//time before notes start falling//

    }
  }

  for (let monster2 of monster2s) {

    let d = distance(mainCamera, monster2.obj);
    if (d < 1.6) {
      monster2.attack()
      cylinderCamera.setAttribute("active", true);
      mainCamera.setAttribute("active", false);

      setTimeout(() => {
        for (let note of notes) {
          note.move();

        }
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