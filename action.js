let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, note1s = [], note2s = [], note3s = [], note4s = [],
minotaurs = [],monster2s = [], scorenotes = [], missbars = [], score = 0, combo=0,
clouds = [];

window.onload = function(){
    scene = document.querySelector("a-scene");
    mainCamera = document.getElementById("mainCamera");
    cylinderCamera = document.getElementById("cylinderCamera");
    cursor = document.querySelector("a-cursor");
    cylinderCursor = document.querySelector("cylinderCursor");
 
    for(let x= -0.3; x <0.4; x+=0.2){
      let y = -0.8;
   missbars.push(new Missbar(x,y,0));
           
    }

    for(let y= 2; y < 20; y+=rnd(0.2,2)){
      let x = -0.3;
   note1s.push(new Note1(x,y,0));
           
    }

    for(let y= 2; y < 10; y+=rnd(0.2,2)){
        let x = -0.1;
     note2s.push(new Note2(x,y,0));
             
      }

      for(let y= 2; y <10; y+=rnd(0.2,2)){
        let x = 0.1;
     note3s.push(new Note3(x,y,0));
             
      }
  

    for(let y= 2; y <10; y+=rnd(0.2,2)){
      let x = 0.3;
   note4s.push(new Note4(x,y,0));
           
    }

    for(let x= -0.3; x <0.4; x+=0.2){
      let y = -0.5;
   scorenotes.push(new Scorenote(x,y,0));
           
    }


      for(let a = 1; a < 3;  a+=1){
        let x = rnd(-3,3);
        let z = 10;
       minotaurs.push(new Minotaur(x,0,z));
      }


      for(let a = 1; a < 2;  a+=1){
        let x = rnd(-3,3);
        let z = 15;
       monster2s.push(new Monster2(x,0,z));
      }

      window.addEventListener("keydown",function(e){
        
        for (let scorenote of scorenotes) {
          for (let note1 of note1s) {
           
            let d = distance(scorenote.obj, note1.obj);
            if(d <0.15 && note1.y <-0.45 && e.key == "s"){            
  note1.scoring();
  document.querySelectorAll('#output')[0].setAttribute('value', `score: ${Math.round(score)}`);
  document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);

      
      }
    }
    }
    })


    window.addEventListener("keydown",function(e){
        
      for (let scorenote of scorenotes) {
        for (let note2 of note2s) {
   
          let d = distance(scorenote.obj, note2.obj);
          
          if(d <0.15 && e.key == "d"){            
note2.scoring();
document.querySelectorAll('#output')[0].setAttribute('value', `score: ${score}`);
        }  
      }
    }
  })

    window.addEventListener("keydown",function(e){
        
      for (let scorenote of scorenotes) {
        for (let note3 of note3s) {
   
          let d = distance(scorenote.obj, note3.obj);

          if(d <0.15 && e.key == "j"){            
note3.scoring();
document.querySelectorAll('#output')[0].setAttribute('value', `score: ${score}`);
        }  
      }
    }
  })

  window.addEventListener("keydown",function(e){
        
    for (let scorenote of scorenotes) {
      for (let note4 of note4s) {
 
        let d = distance(scorenote.obj, note4.obj);

        if(d <0.15 && e.key == "k"){            
note4.scoring();
document.querySelectorAll('#output')[0].setAttribute('value', `score: ${score}`);

      }  
    }
  }
})
    
    }

      loop();
      function loop(){

    for(let cloud of clouds){
      cloud.move();
    }

      for (let minotaur of minotaurs) {
    
        let d = distance(mainCamera, minotaur.obj);
        
        if(d<1.6){
          minotaur.attack()
          cylinderCamera.setAttribute("active",true);
          mainCamera.setAttribute("active",false);
     
        setTimeout(() => {
          for (let note1 of note1s) {
            note1.move();
  
        }
        for (let note2 of note2s) {
          note2.move();

      }
      for (let note3 of note3s) {
        note3.move();

    }
    for (let note4 of note4s) {
      note4.move();

  }
        }, 1000);//time before notes start falling//
    
        }
      }


      for (let monster2 of monster2s) {
    
        let d = distance(mainCamera, monster2.obj);
        
        if(d<1.6){
          monster2.attack()
          cylinderCamera.setAttribute("active",true);
          mainCamera.setAttribute("active",false);
     
        setTimeout(() => {
          for (let note of notes) {
            note.move();
  
        }
        }, 1000);//time before notes start falling//
    
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