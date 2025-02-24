let gameState = {
  minotaurDead: false,
  monster2Dead: false,
  doctorDead: false
};

let isInitialized = false;

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

this.flagE1=false;

this.flagc1=false;
// monsters
    
yourhealths.push(new yourhealth(1.3,0.7,0,"cylinderCursor"));
enemyhealths.push(new enemyhealth(0, 0.6, 0,"cylinderCursor"));
hit();

minotaurs.push(new Minotaur(0, 0, -20));
monster2s.push(new Monster2(0, 0, -50));
doctors.push(new Doctor(0, 0, -80));

isInitialized = true;

}


loop();
function loop() {

  if (!isInitialized || !mainCamera) {
    window.requestAnimationFrame(loop); 
    return;
  }




  checkZAxis(-10, minotaurs);

for (let sky of skys){
  sky.rotate();

}
handleMonster(minotaurs, 2.1, 10000, 10, 2000, 2000, 1000, 'minotaurDead', 5, 
  `#minotaurtext`,"src: url(sounds/ninelives.mp3);loop:false;volume:2;",-10);
if (gameState.minotaurDead) {
  handleMonster(monster2s, 2.1, 15000, 10, 2000, 2000, 1000, 'monster2Dead', 7, 
    `#runnertext`,"src: url(sounds/ninelives.mp3);loop:false;volume:2;",-25);
} 
if (gameState.monster2Dead) {
   handleMonster(doctors, 2.1, 10000, 10, 2000, 2000, 1000, 'doctorDead', 9, 
    `#doctortext`,"src: url(sounds/ninelives.mp3);loop:false;volume:2;",-55);;
} 
  window.requestAnimationFrame(loop);

}
function checkZAxis(cross, monsters) {
  let cameraZ = mainCamera.object3D.position.z;
  let playerPosition = mainCamera.object3D.position;

  if (cameraZ < cross) {
for (let monster of monsters) {
  console.log("success");
  monster.chase(playerPosition);
  monster.attack();
}
    
  }
}



function handleMonster(monsters, distanceThreshold, scoreThreshold, missThreshold, 
  delayBeforeBuild, delayAfterOutcome, delayBeforePlay, monsterDead, speed, monstertitle, song, cross ) {

  let enemySlain = document.querySelector('#slain');
  let die = document.querySelector('#Died');
let title = document.querySelector(monstertitle);
 remainhealth = scoreThreshold-score;
resetenemyhealth = scoreThreshold;
checkZAxis(cross, monsters);
  for (let monster of monsters) {

      let d = distance(mainCamera, monster.obj);
     

      if (d < distanceThreshold ) {
          // Trigger the monster encounter
          display();
          cylinderCamera.setAttribute("sound", song);
          mainCamera.setAttribute("position", { x: 0, y: 2, z: 0 });
          mainCamera.setAttribute("active", "false");
          this.flagc1 = true;
         title.setAttribute("opacity", 1);
          blacksky.setAttribute("visible", "true");
          startscreen.setAttribute("visible", "true");
          for (let sky of skys) {
              sky.stop();
          }

          setTimeout(() => {
              new build(Note, Scorenote, "cylinderCursor", speed/1000);
              this.flag = true;
              this.flagc1 = false;
              blacksky.setAttribute("visible", "false");
              startscreen.setAttribute("visible", "false");
          }, delayBeforeBuild);
      }

      if (this.flagc1) {
          for (let startcamera of startcameras) {
              startcamera.move();
          }
      }

      if (this.flag) {
          cylinderCamera.components.sound.playSound();
          cylinderCamera.setAttribute("active", true);
          mainCamera.setAttribute("active", false);

          // Check for win condition
          if (score >= scoreThreshold) {
              reset();
              monster.dead();
              
              enemySlain.setAttribute('opacity', 1);
              gameState[monsterDead] = true;
             
              setTimeout(() => {
                  title.setAttribute("opacity", 0);
              }, delayAfterOutcome);

              setTimeout(() => {
                enemySlain.setAttribute('opacity', 0);
            }, 4000);
          }

          // Check for lose condition
          if (miss >= missThreshold) {
              reset();
              die.setAttribute('opacity', 1);
            
              
              setTimeout(() => {
                  title.setAttribute("opacity", 0);
              }, delayAfterOutcome);

              
              setTimeout(() => {
                die.setAttribute('opacity', 0);
            }, 4000);
          }

          setTimeout(() => {
              play();
          }, delayBeforePlay); // Time before notes start falling
      }
  }
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