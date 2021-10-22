// explore.js


window.addEventListener('DOMContentLoaded', init);

function init() {

  const vSelect = document.getElementById('voice-select'); //refers to voices we can select
  const input_text = document.getElementById('text-to-speak'); // refers to text input
  let speechSynth = window.speechSynthesis; //variale used for Speech Synthesis
  let vArr = [];  //Empty array that stores the voices
  var btn = document.querySelector("button");

  
  btn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(input_text.value); //Create a new speech request for inpt txt
    var opt = vSelect.selectedOptions[0].getAttribute('data-name'); //gets the user selected option

    /* Loops through our voices array and assigns the top and bottom voice to the one user chose */
    for(var iterator = 0; iterator < vArr.length; iterator++){
      if(vArr[iterator].name === opt){    
        utterance.voice = vArr[iterator];
      }
  }

  speechSynth.speak(utterance);  //Speak input text

  });
  
  
  function populateVoiceList() {
  
    vArr = speechSynth.getVoices()  //Stores voices into arr
  
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