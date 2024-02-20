const synth = window.speechSynthesis;
let voices = [];
  voices = synth.getVoices().sort(function (a, b) {
    const aname = a.name.toUpperCase();
    const bname = b.name.toUpperCase();

    if (aname < bname) {
      return -1;
    } else if (aname == bname) {
      return 0;
    } else {
      return +1;
    }
  });

function speak(myvalue) {
  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }

  if (myvalue !== "") {
    const utterThis = new SpeechSynthesisUtterance(myvalue);

    utterThis.onend = function (event) {
      console.log("SpeechSynthesisUtterance.onend");
    };

    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };

    //const selectedOption =
     // "French (France)";
    const selectedOption =
      "English (Great Britain)";


    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    utterThis.pitch = 50; 

    utterThis.rate = 1;
    synth.speak(utterThis);
  }
}
