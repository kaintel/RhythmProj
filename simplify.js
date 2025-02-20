function display(){
    document.querySelectorAll('#output')[0].setAttribute('value', `score: ${Math.round(score)}`);
    document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
  }
  
  function reset(){
    mainCamera.setAttribute("active", true);
    cylinderCamera.setAttribute("active", false);
    score = 0;
    combo = 0;
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
    for (let yourhealth of yourhealths) {
      yourhealth.returnhealth();
      }
      for (let enemyhealth of enemyhealths) {
        enemyhealth.returnhealth(); 
        }
note1s.length = 0;
note2s.length = 0;
note3s.length = 0;
note4s.length = 0;
scorenotes.length = 0;

this.flag = false;
this.flag2 = false;
    miss = 0;

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
        }
      }
      for (let note2 of note2s) {
        note2.move();
        if (note2.y < -0.55) {
          note2.miss();
          yourhealth.damage();
          document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
          note2s.splice(note2s.indexOf(note2), 1);
        }
      }
      for (let note3 of note3s) {
        note3.move();
        if (note3.y < -0.55) {
          note3.miss();
          yourhealth.damage();
          document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
          note3s.splice(note3s.indexOf(note3), 1);
        }
      }
      for (let note4 of note4s) {
        note4.move();
        if (note4.y < -0.55) {
          note4.miss();
          yourhealth.damage();
          document.querySelectorAll('#output')[1].setAttribute('value', `combo: ${combo}`);
          note4s.splice(note4s.indexOf(note4), 1);
        }
      }
    }
  }


  class build{
    constructor(n,sn,c){
      for (let y = 2; y < 20; y += rnd(0.2, 2)) {
        let x = -0.3;
        note1s.push(new n(x, y, 0, c));
      }
    
      for (let y = 2; y < 20; y += rnd(0.2, 2)) {
        let x = -0.1;
        note2s.push(new n(x, y, 0, c));
      }
    
      for (let y = 2; y < 20; y += rnd(0.2, 2)) {
        let x = 0.1;
        note3s.push(new n(x, y, 0, c));
      }
    
      for (let y = 2; y < 20; y += rnd(0.2, 2)) {
        let x = 0.3;
        note4s.push(new n(x, y, 0, c));
      }
    // scorenote
      for (let x = -0.3; x < 0.4; x += 0.2) {
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
        }
      }
    })
  }
  }



  
  