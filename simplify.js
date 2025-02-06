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
    for (let yourhealth of yourhealths) {
    yourhealth.returnhealth();
    }
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