function toonStatistieken(vragen, gegevenAntwoorden) {
  let juist = 0;
  let fout = 0;
  const overzicht = document.getElementById("antwoord-overzicht");
  overzicht.innerHTML = "";

  vragen.forEach((vraag, index) => {
    const gekozen = gegevenAntwoorden[index];
    const correct = vraag.juist;
    const goed = gekozen === correct;

    if (goed) {
      juist++;
    } else {
      fout++;
    }

    const vraagElement = document.createElement("div");
    vraagElement.innerHTML = `
      <p><strong>Vraag ${index + 1}:</strong> ${vraag.vraag}</p>
      <p style="color: ${goed ? 'green' : 'red'}">
        Jouw antwoord: ${gekozen || 'Geen antwoord'} ${goed ? '✓' : '✗'}
      </p>
      ${!goed ? `<p>Correct antwoord: ${correct}</p>` : ''}
      <hr>
    `;
    overzicht.appendChild(vraagElement);
  });

  const totaal = juist + fout;
  const percentage = totaal === 0 ? 0 : Math.round((juist / totaal) * 100);

  document.getElementById("juist").textContent = juist;
  document.getElementById("fout").textContent = fout;
  document.getElementById("score").textContent = percentage + "%";
  document.getElementById("resultaten").style.display = "block";
}


document.addEventListener("DOMContentLoaded", function () {
  const vragen = [
    {
      vraag: "Welke Japanse fabrikant bracht het model 'Fireblade' uit vraag1?",
      juist: "Honda"
    },
    {
      vraag: "Wat is de hoofdstad van Japan? vraag2",
      juist: "Tokyo"
    },
    {
      vraag: "Wat betekent 'cc' in de context van een motorblok? vraag3",
      juist: "Cubic Centimeters"

    },

     {
      vraag: "Wat is de maximale cilinderinhoud voor een A1-rijbewijs in Europa? vraag4",
      juist: "125cc"
    },

    {
      vraag: "Welke motorfabrikant gebruikt de slogan: 'Ready to Race'? vraag5",
      juist: "KTM"
    },


    {
      vraag: "In welk land werd de motorfabrikant Ducati opgericht? vraag6",
      juist: "Italië"
    },


    {
      vraag: "Wat is de naam van BMW's populaire adventuremodelvraag7",
      juist: "GS"
    },


    {
      vraag:  "Welk merk produceert de 'Hayabusa?   vraag8",
      juist: "Suzuki"
    },


    {
      vraag: "Harley-Davidson komt uit de VS, maar in welke staat is het bedrijf opgericht? vraag9",
      juist: "Wisconsin"
    },


    {
      vraag: "Welk model van Yamaha staat bekend als een “naked bike” met een krachtige 847cc driecilinder vraag10",
      juist: "MT-09"
    },

    {
      vraag: "Wat is het klassieke Britse merk dat de 'Bonneville' produceert? vraag11",
      juist: "Triumph"
    },


    {
      vraag: "Waarvoor dient een quickshifter op een motorfiets? vraag12",
      juist: "Schakelen zonder koppeling"
    },


    {
      vraag: "Wat is het verschil tussen een kettingaandrijving en een cardanaandrijving? vraag13",
      juist: "De cardan heeft minder onderhoud nodig"
    },

    {
      vraag: "Hoe vaak moet je gemiddeld de olie van je motor verversen? vraag14",
      juist: "Elke 5.000 tot 10.000 km"
    },

    {
      vraag: "Wat doet de koppeling op een motorfiets? vraag15",
      juist: " Verbreekt de verbinding tussen motor en versnellingsbak"
    },

    {
      vraag:  "Welk merk produceert de 'Hayabusa? vraag16",
      juist: "Suzuki"
    },

    {
      vraag: "Wat is het voordeel van een V-twin motorblok ten opzichte van een viercilinder? vraag17",
      juist: " Meer koppel bij lage toeren"
    },


    {
      vraag:  "Wie is de bekendste MotoGP-coureur met het nummer 46? vraag18",
      juist: "Valentino Rossi"
    },

    {
      vraag:  "In welk jaar werd de eerste motorfiets uitgevonden? vraag19",
      juist: "1885 "
    },

    {
      vraag:  "Welke Europese fabrikant is bekend van het model “SuperDuke”? vraag20",
      juist: "KTM"
    },




  ];


  const gegevenAntwoorden = ["Honda", "Tokyo", "Cubic Centimeters"]; 

  
  toonStatistieken(vragen, gegevenAntwoorden);
});
