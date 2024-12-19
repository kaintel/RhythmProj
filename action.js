let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, notes = [];

window.onload = function(){
    scene = document.querySelector("a-scene");
    camera = document.querySelector("a-camera");
    cursor = document.querySelector("a-cursor");
  
 
    for(let y= 0; y < 10; y+= 0.1){
        let x = rnd(-0.5,0.5);

     notes.push(new Note(x,y,0));
             
      }
      loop();
      function loop(){
      


      for (let note of notes) {
        note.move();
      }
      window.requestAnimationFrame( loop );
      
 
      
    }
}