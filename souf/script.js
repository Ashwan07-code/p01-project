const quizCategorie = prompt("Welke quiz wilt u spelen? (1, 2, 3)");
const quiz = parseInt(quizCategorie);
console.log(quiz);

if (quiz === 1) {
    alert("Welkom bij quiz 1!");

} else if (quiz === 2) {
    alert("Welkom bij quiz 2!");

} else if (quiz === 3) {
    alert("Welkom bij quiz 3!");
} else {
    console.log("Die quiz bestaat niet!");
}
const volgendeKnop = document.getElementById('volgendeBtn');

volgendeKnop.addEventListener('click', () => {


});
const vragen = [
 {
    vraag: "Wat is een SUV?",
    opties: ["Een grote auto met veel ruimte", "Een sportfiets", "Een racewagen", "Een kleine stadsauto"],
    correct: 0
  },
  {
    vraag: "Wat is een hybride auto?",
    opties: ["Een auto met alleen een elektrische motor", "Een auto met een zonnepaneel", "Een auto die op stroom én benzine rijdt", "Een auto die op water rijdt"],
    correct: 2
  },
  {
    vraag: "Wat is een elektrische auto?",
    opties: ["Een auto met een ketting", "Een auto die op stroom rijdt", "Een auto die zelf rijdt", "Een dieselauto"],
    correct: 1
  },
  {
    vraag: "Waarom is een grote kofferbak handig?",
    opties: ["Voor meer snelheid", "Voor meer spullen meenemen", "Voor beter sturen", "Voor betere muziek"],
    correct: 1
  },
  {
    vraag: "Wat is een coupé?",
    opties: ["Een sportieve auto met 2 deuren", "Een bestelbus", "Een motorfiets", "Een taxi"],
    correct: 0
  },
  {
    vraag: "Wat doet cruise control?",
    opties: ["Houdt je auto schoon", "Helpt bij parkeren", "Houdt je snelheid vast", "Zet de auto stil"],
    correct: 2
  },
  {
    vraag: "Waarom is juiste bandenspanning belangrijk?",
    opties: ["Voor een mooier uiterlijk", "Voor veiligheid en zuiniger rijden", "Voor betere muziek", "Voor een zachtere rit"],
    correct: 1
  },
  {
    vraag: "Wat is een automaat?",
    opties: ["Een auto die zelf schakelt", "Een auto zonder stuur", "Een auto zonder deuren", "Een sportmotor"],
    correct: 0
  },
  {
    vraag: "Wat doet een airco?",
    opties: ["Maakt muziek", "Koelt de auto", "Start de motor", "Reinigt de banden"],
    correct: 1
  },
  {
    vraag: "Wanneer gebruik je zomerbanden?",
    opties: ["In de winter", "Alleen bij regen", "In de lente en zomer", "Altijd"],
    correct: 2
  },
  {
    vraag: "Waarom olie verversen?",
    opties: ["Voor frisse geur", "Om motor goed te houden", "Voor meer snelheid", "Om minder te remmen"],
    correct: 1
  },
  {
    vraag: "Wat is ABS?",
    opties: ["Een soort band", "Een radiosysteem", "Een remhulp die slippen voorkomt", "Een alarmsysteem"],
    correct: 2
  },
  {
    vraag: "Waarom een achteruitrijcamera?",
    opties: ["Voor selfies", "Voor beter zicht achter je", "Om sneller te rijden", "Om muziek af te spelen"],
    correct: 1
  },
  {
    vraag: "Wat doet de autoradio?",
    opties: ["Speelt muziek", "Regelt de ramen", "Opent de deuren", "Schakelt automatisch"],
    correct: 0
  },
  {
    vraag: "Hoe verbruik je minder brandstof?",
    opties: ["Hard optrekken", "Ramen open", "Rustig rijden", "Muziek hard zetten"],
    correct: 2
  },
  {
    vraag: "Wat is een brandstofmeter?",
    opties: ["Een thermometer", "Een klok", "Laat zien hoeveel benzine je nog hebt", "Een remsysteem"],
    correct: 2
  },
  {
    vraag: "Wat doet de katalysator?",
    opties: ["Start de auto", "Maakt uitlaatgassen schoner", "Geeft gas", "Koelt de banden"],
    correct: 1
  },
  {
    vraag: "Wat is een dakdrager?",
    opties: ["Een kofferbak", "Een lamp", "Een rek voor spullen op het dak", "Een antenne"],
    correct: 2
  },
  {
    vraag: "Wat zijn LED-koplampen?",
    opties: ["Oude lampen", "Felle en zuinige lampen", "Binnenverlichting", "Remlichten"],
    correct: 1
  },
  {
    vraag: "Hoe controleer je het oliepeil?",
    opties: ["Met een peilstok", "Door te ruiken", "Via de radio", "Met de afstandsbediening"],
    correct: 0
  }
];


const vraagElement = document.getElementById("vraag");
const antwoordKnoppen = document.querySelectorAll(".antwoord-btn");
const controleerBtn = document.getElementById("controleerBtn");
const volgendeBtn = document.getElementById("volgendeBtn");
const scoreElement = document.getElementById("score");

let huidigeVraagIndex = 0;
let score = 0;
let geselecteerdAntwoord = null;


function laadVraag() {
    const huidigeVraag = vragen[huidigeVraagIndex];
    vraagElement.textContent = huidigeVraag.vraag;
    antwoordKnoppen.forEach((knop, index) => {
        knop.textContent = huidigeVraag.opties[index];
        knop.classList.remove("groen", "rood");
        knop.disabled = false;
    });
    geselecteerdAntwoord = null;
}


antwoordKnoppen.forEach((knop, index) => {
    knop.addEventListener("click", () => {
        geselecteerdAntwoord = index;

        antwoordKnoppen.forEach(k => k.classList.remove("geselecteerd"));
        knop.classList.add("geselecteerd");
    });
});


controleerBtn.addEventListener("click", () => {
    if (geselecteerdAntwoord === null) return;
    const huidigeVraag = vragen[huidigeVraagIndex];

    antwoordKnoppen.forEach((knop, index) => {
        knop.disabled = true; //
        if (index === huidigeVraag.correct) {
            knop.classList.add("groen");
        } else if (index === geselecteerdAntwoord) {
            knop.classList.add("rood");
        }
    });

    if (geselecteerdAntwoord === huidigeVraag.correct) {
        score++;
        scoreElement.textContent = `Score: ${score}/${vragen.length}`;
    }
});


volgendeBtn.addEventListener("click", () => {
    if (huidigeVraagIndex < vragen.length - 1) {
        huidigeVraagIndex++;
        laadVraag();
    } else {
        alert(`Quiz klaar! Je eindscore is ${score}/${vragen.length}`);
    }
});


laadVraag();