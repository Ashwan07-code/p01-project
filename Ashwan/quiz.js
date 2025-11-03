
const vragen = [
    {
        vraag: "Welke Japanse fabrikant bracht het model 'Fireblade' uit vraag1?",
        opties: ["Yamaha", "Honda", "Suzuki", "Kawasaki"],
        correct: 1 // Honda
    },

    {
        vraag: "Wat is de hoofdstad van Japan? vraag2",
        opties: ["Osaka", "Seoul", "Tokyo", "Kyoto"],
        correct: 2 // Tokyo
    },


    {

        vraag: "Wat betekent 'cc' in de context van een motorblok? vraag3",
        opties: ["Compressiecoëfficiënt", "Cilindercompressie", "Cubic Centimeters", "Carburateurcapaciteit"],
        correct: 2 // Cubic Centimeters

    },

    {

        vraag: "Wat is de maximale cilinderinhoud voor een A1-rijbewijs in Europa? vraag 4",
        opties: ["1250cc", "500cc", "125cc", "250cc"],
        correct: 2 // 125cc

    },

    {

        vraag: "Welke motorfabrikant gebruikt de slogan: 'Ready to Race'? vraag 5",
        opties: ["Yamaha", "KTM", "Ducati", "Aprilia"],
        correct: 1 // KTM

    },

    {

        vraag: "In welk land werd de motorfabrikant Ducati opgericht? vraag6",
        opties: [" Frankrijk", "Duitsland", "Spanje", "Italië"],
        correct: 3 // Italië

    },

    {

        vraag: "Wat is de naam van BMW's populaire adventuremodel vraag7",
        opties: ["GSX", "GS", "XR", "GTR"],
        correct: 1 // GS

    },

    {

        vraag: "Welk merk produceert de 'Hayabusa? vraag8",
        opties: ["Kawasaki", "Yamaha", " Suzuki", "Honda"],
        correct: 2 // Suzuki

    },





    {

        vraag: "Harley-Davidson komt uit de VS, maar in welke staat is het bedrijf opgericht? vraag9",
        opties: ["Texas", "Californië", "Wisconsin ", "Florida"],
        correct: 2 //Wisconsin

    },



    {

        vraag: "Welk model van Yamaha staat bekend als een “naked bike” met een krachtige 847cc driecilinder vraag 10?",
        opties: ["R6", "MT-09 Tracer", "MT-09 ", "XSR700"],
        corect: 2 //MT-09

    },



    {

        vraag: "Wat is het klassieke Britse merk dat de 'Bonneville' produceert? vraag 11",
        opties: ["BSA", "Triumph", "Norton", " Royal Enfield"],
        correct: 1 //Triumph

    },



    {

        vraag: "Waarvoor dient een quickshifter op een motorfiets? vraag 12",
        opties: ["Sneller starten", "Schakelen zonder koppeling", "Snelheid verhogen", "Motor laten afremmen"],
        correct: 1 //Schakelen zonder koppeling

    },

    {

        vraag: "Wat is het verschil tussen een kettingaandrijving en een cardanaandrijving? vraag 13",
        opties: ["De ketting is stiller", "De cardan heeft minder onderhoud nodig", "De ketting is duurder", "De cardan maakt je motor sneller"],
        correct: 2 // De cardan heeft minder onderhoud nodig
    },


    {

        vraag: "Hoe vaak moet je gemiddeld de olie van je motor verversen? vraag14",
        opties: ["Elke 30.000 km", "Elke 15.000 km", "Elke 5.000 tot 10.000 km", " Nooit, als je een 4-takt hebt"],
        correct: 2 // Elke 5.000 tot 10.000 km

    },


    {

        vraag: "Wat doet de koppeling op een motorfiets? vraag15",
        opties: ["Regelt de luchtinlaat", "Remt het achterwiel af", "Verbreekt de verbinding tussen motor en versnellingsbak", "Schakelt de motor uit"],
        correct: 2 // Verbreekt de verbinding tussen motor en versnellingsbak

    },


    {

        vraag: "Welk merk produceert de 'Hayabusa? vraag16",
        opties: ["Kawasaki", "Yamaha", " Suzuki", "Honda"],
        correct: 2 // Suzuki

    },


    {

        vraag: "Wat is het voordeel van een V-twin motorblok ten opzichte van een viercilinder? vraag17",
        opties: ["Meer vermogen bij hoge toeren", "Meer koppel bij lage toeren", " Lager brandstofverbruik", " Geen trillingen"],
        correct: 2 // Meer koppel bij lage toeren

    },


    {

        vraag: "Wie is de bekendste MotoGP-coureur met het nummer 46? vraag18",
        opties: ["Marc Márquez", "Casey Stoner", " Valentino Rossi", "Jorge Lorenzo"],
        correct: 2 // Valentino Rossi

    },


    {

        vraag: "In welk jaar werd de eerste motorfiets uitgevonden? vraag19",
        opties: ["1817", "1884", "1885 ", "1901"],
        correct: 2 // 1885 

    },


    {

        vraag: "Welke Europese fabrikant is bekend van het model “SuperDuke”? vraag20",
        opties: ["Ducati", "Aprilia", " BMW", " KTM"],
        correct: 3 //  KTM
    },



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
        window.location.href = "/Ashwan/klaar.html"
    }
function startQuiz() {
  const naam = document.getElementById('spelerNaam').value.trim();

 if (!naam) {
    alert('Vul alsjeblieft je naam in!');
  } else {
    alert('Welkom, ' + naam + '!  De quiz begint nu.');
    window.location.href = "/Ashwan/quiz.html"
  }
}

 
});

 document.addEventListener("keydown", function(event) {

      document.getElementById("output").textContent =
        "Je drukte op: " + event.key;
      
      
      if (event.key === "Enter") {
        console.log("Je drukte op Enter!");
      } else if (event.key === "ArrowUp") {
        console.log("Pijl omhoog!");
      }
    });

    

    let autoCorrectGebruikt = false;

autoCorrectBtn.addEventListener("click", () => {
  if (autoCorrectGebruikt) return;

  const huidigeVraag = vragen[huidigeVraagIndex];
  const juist = huidigeVraag.correct; 

  const antwoorden = document.querySelectorAll(".antwoord");


  antwoorden[juist].style.backgroundColor = "limegreen";


  autoCorrectGebruikt = true;
});

    laadVraag();


