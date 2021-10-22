// explore.js



window.addEventListener('DOMContentLoaded', init);

function init() {

  const vSelect = document.getElementById('voice-select'); //refers to voices we can select
  let speechSynth = window.speechSynthesis; //variale used for Speech Synthesis
  //let vLevel = 1; //Temp variable used for volume adjustment
  let vArr = [];  //Empty array that stores the voices

  function populateVoiceList() {
  
    vArr = speechSynth.getVoices()  //Stores voices into arr
    vSelect.innerHTML = '';
  
    /* Lops through our voices array */
    for(let iterator = 0; iterator < vArr.length; iterator++) {
      var opt = document.createElement('option'); 
      opt.textContent = vArr[iterator].name + ' (' + vArr[iterator].lang + ')';
      opt.setAttribute('data-lang', vArr[iterator].lang);
      opt.setAttribute('data-name', vArr[iterator].name);
      vSelect.appendChild(opt);
    }
  
  };

  populateVoiceList(); //function call

  if (speechSynth.onvoiceschanged !== undefined && typeof speechSynth !== 'undefined') {
    speechSynth.onvoiceschanged = populateVoiceList;
  }
  
}