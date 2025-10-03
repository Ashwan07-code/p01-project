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
        vraag: "Hoe noemen we het voertuig dat mensen en bagage naar het vliegtuig brengt?",
        opties: ["Taxi", "Brandweerwagen", "Shuttlebus", "Trein"],
        correct: 2
    },
    {
        vraag: "Wat is het snelste voertuig om rond mee te komen? ",
        opties: ["Fiets", "Auto", "Tram", "Vliegtuig"],
        correct: 3
    },
    {
        vraag: "Waar gaan koffers en tassen heen voordat ze in het vliegtuig worden geladen? ",
        opties: ["Boven op het vliegtuig", "Bagageband", "In de cockpit", "In de cabine"],
        correct: 1
    },
    {
        vraag: "Hoe noem je de plek waar vliegtuigen opstijgen en landen? ",
        opties: ["Hangar", "Start- en landingsbaan (runway)", "Terminal", "Bagageruim"],
        correct: 1
    },
    {
        vraag: "Wie begroet de passagiers meestal bij de ingang van het vliegtuig?",
        opties: ["Piloot", "Bagage medewerker", "Douane", "Steward of stewardess"],
        correct: 3
    },
    {
        vraag: "Hoe noemen we het “veiligheidsfilmpje” dat je voor de vlucht ziet?",
        opties: ["Nieuwsuitzending", "Filmtrailer", "Veiligheids instructies", "Reclamevideo"],
        correct: 2
    },
    {
        vraag: "Hoe noem je het moment dat het vliegtuig de grond verlaat?",
        opties: ["Taxiën", "Landing", "Opstijgen", "Parkeren"],
        correct: 2
    },
    {
        vraag: "Hoe noemen we het “veiligheidsfilmpje” dat je voor de vlucht ziet?",
        opties: ["Taxiën", "Landing", "Veiligheids instructies", "Reclamevideo"],
        correct: 3
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
        knop.classList.remove("groen", "rood", "geselecteerd");
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

volgendeBtn.addEventListener("click", () => {
    if (geselecteerdAntwoord === null) {
        alert("KIES een antwoord voordat je doorgaat!");
        return;
    }

    if (huidigeVraagIndex < vragen.length - 1) {
        huidigeVraagIndex++;
        laadVraag();
    } else {
        alert(`Quiz klaar! Je eindscore is ${score}/${vragen.length}`);
    }
});

laadVraag();
