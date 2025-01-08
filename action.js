let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, notes = [], minotaur=[];

window.onload = function(){
    scene = document.querySelector("a-scene");
    camera = document.querySelector("a-camera");
    cursor = document.querySelector("a-cursor");
  
 
    for(let y= 0; y < 10; y+= 1){
        let x = rnd(-0.5,0.5);
     notes.push(new Note(x,y,0));             
      }

      for(let a = 40; a > 20;  a-= 19){
        let x = rnd(-3,3);
        let z = rnd(-3,3);
       minotaur.push(new Monster(x,0,z));
      }


      loop();
      function loop(){
      


      for (let note of notes) {
        note.move();
      }
      window.requestAnimationFrame( loop );
      
 
      
    }
}