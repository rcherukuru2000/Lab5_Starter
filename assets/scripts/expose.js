// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //need eventlsitener
  var img = document.querySelector('img');
  var list = document.querySelector("#horn-select");
  var aud = document.querySelector(".hidden");
  var btn = document.querySelector("button");
  var party = false;
  var volInput = document.querySelector("[type='range']");
  var volumeCtrl = document.querySelector("#volume-controls");
  var volImg = volumeCtrl.querySelector('img');
  const jsConfetti = new JSConfetti();


  list.addEventListener('change', (event) => {
    var dest = event.target.value;
  
    if (event.target.value == "select") {
      img.src = 'assets/images/no-image.png';
    } else {
      party = false;
      if(event.target.value == "party-horn") {
        party = true;
      }

      img.src = 'assets/images/' + dest + '.svg';
      aud.src = 'assets/audio/' + dest + '.mp3';
    }
  })

  volInput.addEventListener('input',() => {
    aud.volume = volInput.value/100;
    
    if(volInput.value == 0) {
      volImg.src = 'assets/icons/volume-level-0.svg';
    }
    else if(volInput.value >= 1 && volInput.value < 33) {
      volImg.src = 'assets/icons/volume-level-1.svg';
    }
    else if(volInput.value >= 33 && volInput.value < 67) {
      volImg.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volImg.src = 'assets/icons/volume-level-3.svg';
    }
  })

  btn.addEventListener('click', (event) => {
    if (party == true) {
      jsConfetti.addConfetti();
    }
    aud.play();
  })

}