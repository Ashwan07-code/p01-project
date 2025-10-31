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

const vragen = [
  {
    vraag:
      "Hoe noemen we het voertuig dat mensen en bagage naar het vliegtuig brengt?",
    opties: ["Taxi", "Brandweerwagen", "Shuttlebus", "Trein"],
    correct: 2,
  },
  {
    vraag: "Wat is het snelste voertuig om rond mee te komen? ",
    opties: ["Fiets", "Auto", "Tram", "Vliegtuig"],
    correct: 3,
  },
  {
    vraag:
      "Waar gaan koffers en tassen heen voordat ze in het vliegtuig worden geladen? ",
    opties: [
      "Boven op het vliegtuig",
      "Bagageband",
      "In de cockpit",
      "In de cabine",
    ],
    correct: 1,
  },
  {
    vraag: "Hoe noem je de plek waar vliegtuigen opstijgen en landen? ",
    opties: [
      "Hangar",
      "Start- en landingsbaan (runway)",
      "Terminal",
      "Bagageruim",
    ],
    correct: 1,
  },
  {
    vraag: "Wie begroet de passagiers meestal bij de ingang van het vliegtuig?",
    opties: ["Piloot", "Bagage medewerker", "Douane", "Steward of stewardess"],
    correct: 3,
  },
  {
    vraag:
      "Hoe heet de persoon die veiligheidsintructies uitlegd voor het vliegtuig opstijgt?",
    opties: ["Steward/stweardess", "Douane", "Passangier", "Piloot"],
    correct: 0,
  },
  {
    vraag: "Hoe noem je het moment dat de vliegtuig de grond verlaat?",
    opties: ["Taxiën", "Landing", "Opstijgen", "Parkeren"],
    correct: 2,
  },
  {
    vraag: "Hoe noemen we het “veiligheidsfilmpje” dat je voor de vlucht ziet?",
    opties: ["Taxiën", "Landing", "Veiligheids instructies", "Reclamevideo"],
    correct: 2,
  },
  {
    vraag: "hoe heet het moment dat een vliegtuig weer landt? ",
    opties: ["Uitchecken ", "landen", "opstijgen", "boarding"],
    correct: 1,
  },
  {
    vraag: "Welke gordel moet je vastmaken tijdens het opstijgen en landen?  ",
    opties: ["Veiligheidsgordel", "Zwemvest ", "Parachuteriem ", "Autogordel"],
    correct: 0,
  },
  {
    vraag: "Waarvoor gebruik je een boardingpass?",
    opties: [
      "Om geld te wisselen",
      "Om toegang te krijgen tot het vliegtuig ",
      "Om bagage te wegen",
      "Om drankjes te bestellen",
    ],
    correct: 1,
  },
  {
    vraag:
      "Wat voor voertuig rijdt voor het vliegtuig uit om het naar de startbaan te begeleiden?",
    opties: [
      " Politiewagen ",
      " Pushback truck (sleepvoertuig)",
      "Taxi ",
      "Bus",
    ],
    correct: 1,
  },
  {
    vraag:
      "Hoe noem je het gebouw op het vliegveld waar je incheckt en door de controle gaat? ",
    opties: ["Terminal", " Hangar ", "Startbaan", "Bagageruim "],
    correct: 0,
  },
  {
    vraag:
      "Hoe noemen we de stoelen helemaal voorin het vliegtuig met meer luxe en ruimte? ",
    opties: [
      " Bagageruimte ",
      " Cockpit ",
      "Business class of first class ",
      "Economy class ",
    ],
    correct: 3,
  },
  {
    vraag:
      "Wat doet de steward of stewardess als het vliegtuig turbulentie krijgt?",
    opties: [
      "Gordel vastmaken en iedereen vragen dit ook te doen",
      "zelf het vliegtuig besturen",
      "Gratis eten uitdelen",
      "Het vliegtuig laten landen",
    ],
    correct: 0,
  },
  {
    vraag:
      "Welke taal wordt bijna altijd gebruikt naast de moedertaal van de luchtvaartmaatschappij?",
    opties: ["Engels", " Spaans", "Mandarijns", "Frans"],
    correct: 0,
  },
  {
    vraag: "Wat geeft een piloot vaak door via de intercom tijdens de vlucht?",
    opties: [
      "Muziek concert",
      "Informatie over de vlucht",
      "Recepten",
      "Reclames",
    ],
    correct: 1,
  },
  {
    vraag: "Hoe noem je het kleine raam bij je stoel in het vliegtuig?",
    opties: [
      "Parabrisa",
      "Raampje / vliegtuigraam",
      "Ventilatiegat ",
      "Voorruit",
    ],
    correct: 1,
  },
  {
    vraag:
      "Wat staat meestal op de vleugel van het vliegtuig, zodat je het bedrijf herkent?",
    opties: [
      "Reclames",
      " Nummerplaten",
      "Vlag van het land",
      "Logo of naam van de luchtvaartmaatschappij ",
    ],
    correct: 3,
  },
  {
    vraag:
      "Hoe noem je de ruimte waar alle koffers onder de passagiersstoelen liggen?",
    opties: ["Stoelruimte ", "Terminal", "Bagageruim / vrachtruim", "Cockpit"],
    correct: 2,
  },
];

const vraagElement = document.getElementById("vraag");
const antwoordKnoppen = document.querySelectorAll(".antwoord-btn");
const controleerBtn = document.getElementById("controleerBtn");
const volgendeBtn = document.getElementById("volgendeBtn");
const scoreElement = document.getElementById("score");
const autoCorrectBtn = document.getElementById("autoCorrectBtn");
const quizContainer = document.getElementById("quiz-container");
const scoreboard = document.getElementById("scoreboard");
const eindScore = document.getElementById("eindScore");
const herstartBtn = document.getElementById("herstartBtn");

let huidigeVraagIndex = 0;
let score = 0;
let geselecteerdAntwoord = null;
let antwoordGeklikt = false;
let autoCorrectGebruikt = false;

function laadVraag() {
  const huidigeVraag = vragen[huidigeVraagIndex];
  vraagElement.textContent = huidigeVraag.vraag;
  antwoordKnoppen.forEach((knop, index) => {
    knop.textContent = huidigeVraag.opties[index];
    knop.classList.remove("groen", "rood", "geselecteerd");
    knop.disabled = false;
  });
  geselecteerdAntwoord = null;
  antwoordGeklikt = false;
}

antwoordKnoppen.forEach((knop, index) => {
  knop.addEventListener("click", () => {
    geselecteerdAntwoord = index;
    antwoordKnoppen.forEach((k) => k.classList.remove("geselecteerd"));
    knop.classList.add("geselecteerd");
    antwoordGeklikt = true;
  });
});

controleerBtn.addEventListener("click", () => {
  if (!antwoordGeklikt) return;
  const huidigeVraag = vragen[huidigeVraagIndex];

  antwoordKnoppen.forEach((knop, index) => {
    knop.disabled = true;
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

// --- Power-Up knop aangepast ---
autoCorrectBtn.addEventListener("click", () => {
  if (autoCorrectGebruikt) {
    alert("Je kunt deze Power-Up⚡ maar één keer gebruiken!");
    return;
  }

  const huidigeVraag = vragen[huidigeVraagIndex];
  const correctIndex = huidigeVraag.correct;

  antwoordKnoppen.forEach((knop, index) => {
    knop.disabled = true;
    knop.classList.remove("geselecteerd", "rood", "groen");
    if (index === correctIndex) {
      knop.classList.add("groen");
    }
  });

  score++;
  scoreElement.textContent = `Score: ${score}/${vragen.length}`;
  geselecteerdAntwoord = correctIndex;
  antwoordGeklikt = true;

  autoCorrectGebruikt = true;

  // Visuele indicatie dat Power-Up gebruikt is
  autoCorrectBtn.style.backgroundColor = "#555";
  autoCorrectBtn.style.cursor = "not-allowed";
});

volgendeBtn.addEventListener("click", () => {
  if (!antwoordGeklikt) {
    alert("KIES een antwoord voordat je doorgaat!");
    return;
  }

  if (huidigeVraagIndex < vragen.length - 1) {
    huidigeVraagIndex++;
    laadVraag();
  } else {
    quizContainer.style.display = "none";
    scoreboard.style.display = "block";
    eindScore.textContent = `Je eindscore is ${score} van de ${vragen.length} punten!`;
  }
});

herstartBtn.addEventListener("click", () => {
  huidigeVraagIndex = 0;
  score = 0;
  autoCorrectGebruikt = false;
  autoCorrectBtn.disabled = false;
  autoCorrectBtn.style.backgroundColor = "#777";
  autoCorrectBtn.style.cursor = "pointer";
  scoreElement.textContent = `Score: 0/${vragen.length}`;
  laadVraag();
  quizContainer.style.display = "block";
  scoreboard.style.display = "none";
});

laadVraag();

