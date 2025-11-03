function startQuiz() {
  const naam = document.getElementById('spelerNaam').value.trim();

 if (!naam) {
    alert('Vul alsjeblieft je naam in!');
  } else {
    alert('Welkom, ' + naam + '!  De quiz begint nu.');
    window.location.href = "/Ashwan/quiz.html"
  }
}
 document.addEventListener("keydown", function(event) {
    
      document.getElementById("output").textContent =
        "Je drukte op: " + event.key;
   
      if (event.key === "Enter") {
        console.log("Je drukte op Enter!");
      } else if (event.key === "ArrowUp") {
        console.log("Pijl omhoog!");
      }
    });

