let gameState = {
  minotaurDead: false,
  monster2Dead: false,
  doctorDead: false
};

let isInitialized = false;

let rnd = (l, u) => Math.random() * (u - l) + l
let scene, camera, note1s = [], note2s = [], note3s = [], note4s = [],
   minotaurs = [],monster2s = [], scorenotes = [], score = 0, combo = 0, miss = 0, t=20000,
  clouds = [], skys = [], yourhealths = [], enemyhealths = [], doctors = [], startcameras = []; 

window.onload = function () {
  scene = document.querySelector("a-scene");
  mainCamera = document.getElementById("mainCamera");
  cylinderCamera = document.getElementById("cylinderCamera");
  cursor = document.querySelector("a-cursor");
  cylinderCursor = document.querySelector("cylinderCursor");
  startscreen = document.getElementById("startscreen");
  blacksky = document.getElementById("blacksky");
plane = document.getElementById("plane"); 

  skys.push(new Sky(0,0,0));
  startcameras.push(new Startcamera(0,0,0,10,10,310));
this.flag=false;
this.flag2=false;
this.flag3=false;


this.flagc1=false;

this.flagt1=false;
// monsters
yourhealths.push(new yourhealth(1.3,0.7,0,"cylinderCursor", 20));
enemyhealths.push(new enemyhealth(0, 0.6, 0,"cylinderCursor",t));

hit();

minotaurs.push(new Minotaur(0, 0, -60));
monster2s.push(new Monster2(0, 0, -120));
doctors.push(new Doctor(0, 0, -185));

isInitialized = true;

}


loop();
function loop() {

  if (!isInitialized || !mainCamera) {
    window.requestAnimationFrame(loop); 
    return;
  }


for (let sky of skys){
  sky.rotate();

}
handleMonster(minotaurs, 2.1, 20000, 20, 2000, 2000, 1000, 'minotaurDead', 5, 
  `#minotaurtext`,10,"src: url(sounds/ninelives.mp3);loop:true;volume:2;", "src: url(images/chop.png); transparent: false",30);
if (gameState.minotaurDead) {
  handleMonster(monster2s, 2.1, 20000, 20, 2000, 2000, 1000, 'monster2Dead', 7, 
    `#runnertext`,10, "src: url(sounds/audio25.mp3);loop:true;volume:2;", "src: url(images/punch.png); transparent: false",55);

} 
if (gameState.monster2Dead) {
   handleMonster(doctors, 2.1, 100000, 20, 2000, 2000, 1000, 'doctorDead', 10, 
    `#doctortext`,10, "src: url(sounds/audio27.mp3);loop:true;volume:2;", "src: url(images/shot.png); transparent: false",70);;
} 
  window.requestAnimationFrame(loop);

}
function checkZAxis( cross, monsters) {

  let playerPosition = mainCamera.object3D.position;

for (let monster of monsters) {
  let d = distance(mainCamera, monster.obj);
  if (cross >= d && !this.flagt1) {
  monster.chase(playerPosition);
  monster.attack();

}
}
  }



function handleMonster(monsters, distanceThreshold, scoreThreshold, missThreshold, 
  delayBeforeBuild, delayAfterOutcome, delayBeforePlay, monsterDead, speed, monstertitle, cross ,song, img,max) {

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
          monster.redo();
          this.flagt1 = true;
          opacityoff();
          display();
          cylinderCamera.setAttribute("sound", song);
          if(mainCamera.object3D.position.z <-50 && mainCamera.object3D.position.z>-95){
            mainCamera.setAttribute("position", { x: 0, y: 2, z: -35});
          }else if(mainCamera.object3D.position.z <-95 && mainCamera.object3D.position.z>-155){
            mainCamera.setAttribute("position", { x: 0, y: 2, z: -95});
          }else if(mainCamera.object3D.position.z <-155 && mainCamera.object3D.position.z>-200){
            mainCamera.setAttribute("position", { x: 0, y: 2, z: -155});
          }else{
            mainCamera.setAttribute("position", { x: 0, y: 2, z: 0});
          }
          
          mainCamera.setAttribute("active", "false");
          this.flagc1 = true;
         title.setAttribute("opacity", 1);
          blacksky.setAttribute("visible", "true");
          startscreen.setAttribute("visible", "true");

          for (let sky of skys) {
              sky.stop();
          }

          setTimeout(() => {
              new build(Note, Scorenote, "cylinderCursor", speed/1000, img, max);
              this.flag = true;
              this.flagc1 = false;
              blacksky.setAttribute("visible", "false");
              startscreen.setAttribute("visible", "false");
              for (let sky of skys) {
                sky.start();
            }
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