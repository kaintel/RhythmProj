let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, notes = [], minotaurs = [];

window.onload = function(){
    scene = document.querySelector("a-scene");
    mainCamera = document.getElementById("mainCamera");
    cylinderCamera = document.getElementById("cylinderCamera");
    cursor = document.querySelector("a-cursor");
    cylinderCursor = document.querySelector("cylinderCursor");
 
    for(let y= 2; y < 10; y+= 0.1){
        let x = rnd(-0.5,0.5);
     notes.push(new Note(x,y,0));
             
      }


      for(let a = 1; a < 3;  a+=1){
        let x = rnd(-3,3);
        let z = 10;
       minotaurs.push(new Minotaur(x,0,z));
      }
    }

      loop();
      function loop(){

    

      for (let minotaur of minotaurs) {
    
        let d1 = distance(mainCamera, minotaur.obj);

        if(d1<1.6){
          minotaur.attack()
          cylinderCamera.setAttribute("active",true);
          mainCamera.setAttribute("active",false);
          for (let note of notes) {
            note.move();
  
        }
    
        }
      }
      
     
      
      window.requestAnimationFrame( loop );
      
    }
 


function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}