let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, notes = [], minotaurs=[];

window.onload = function(){
    scene = document.querySelector("a-scene");
    camera = document.querySelector("a-camera");
    cursor = document.querySelector("a-cursor");
  
this.flag = false;
    for(let y= 2; y < 10; y+= 1){
        let x = rnd(-0.5,0.5);
     notes.push(new Note(x,y,0));             
      }

      for(let a = 40; a > 20;  a-= 19){
        let x = rnd(-3,3);
        let z = rnd(-3,3);
       minotaurs.push(new Minotaur(x,0,z));
      }


      loop();

}



      function loop(){

      

      for (let minotaur of minotaurs) {
        // minotaur.attack();
        let d1 = distance(camera, minotaur.obj);

        if(d1 < 1.5){     
     this.flag=true;
     minotaur.attack();
   
          }

        if(this.flag){
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