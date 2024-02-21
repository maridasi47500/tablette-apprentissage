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

function speak(myvalue,rate=1) {
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

    utterThis.rate = rate;
    synth.speak(utterThis);
  }
}
window.resous="azertyuiopqsdfghjklmwxcvbn".split("")
window.Jeu="azertyuiopqsdfghjklmwxcvbn".split("")
$(function(){
	$(".lirelespoems").click(function(){
		var methis=$(this)[0];
		var mot=methis.dataset.poem;
		speak(mot,0.5);
	});
	$(".lirelesmots").click(function(){
		var methis=$(this)[0];
		var mot=methis.dataset.mot;
		speak((mot.split("").join(", ")+";"),0.8);
		speak(mot);
	});
	$(".Jeu").click(function(){
		var methis=$(this)[0];

		if (methis.dataset.nombre === $('[data-jeunombre]')[0].dataset.jeunombre){
			speak('yes');
			window.Jeu.splice(window.Jeu.indexOf(methis.dataset.lettre.toLowerCase()),1);
		        if (window.Jeu.length === 0){
                             window.Jeu="azertyuiopqsdfghjklmwxcvbn".split("");
		        }
			jeu.dataset.jeunombre=$("[data-jeu][data-lettre="+window.Jeu[Math.floor(Math.random() * (window.Jeu.length - 1 + 1) + 1)].toUpperCase()+"]")[0].dataset.nombre;
			speak($('[data-jeu][data-nombre='+jeu.dataset.jeunombre+']')[0].dataset.jeu);
		}else{

	speak('wrong');
		}
	});
	$(".Hellothere").click(function(){
		var methis=$(this)[0];

		if (methis.dataset.nombre === $('[data-monnombre]')[0].dataset.monnombre){
			speak('yes');
			window.resous.splice(window.resous.indexOf(methis.dataset.lettre.toLowerCase()),1);
		        if (window.resous.length === 0){
                             window.resous="azertyuiopqsdfghjklmwxcvbn".split("");
		        }
			exemplejeresous.dataset.monnombre=(Math.floor(Math.random() * (window.resous.length - 1 + 1) + 1));
			speak($('[data-q][data-nombre='+exemplejeresous.dataset.monnombre+']')[0].dataset.q);
		}else{

	speak('wrong');
		}
	});
});
