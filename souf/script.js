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
        opties: ["Een sportfiets", "Een grote auto met veel ruimte", "Een racewagen", "Een kleine stadsauto"],
        correct: 1
    },
    {
        vraag: "Wat is een hybride auto?",
        opties: ["Een auto met alleen een elektrische motor", "Een auto met een zonnepaneel", "Een auto die op stroom én benzine rijdt", "Een auto die op water rijdt",],
        correct: 2
    }
      

    
]

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