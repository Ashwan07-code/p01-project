      document.getElementById("QuizBtn1").addEventListener("click", function() {
        window.location.href = "Bilal/index.html";
      });

      document.getElementById("QuizBtn2").addEventListener("click", function() {
        window.location.href = "Souf/index.html";
      });

      document.getElementById("QuizBtn3").addEventListener("click", function() {
        window.location.href = "Ashwan/index.html";
      });
       document.getElementById("verstuur").addEventListener("click", function() {
    
      const naam = document.getElementById("naam").value;
      const leeftijd = document.getElementById("leeftijd").value;

      console.log("Naam:", naam);
      console.log("Leeftijd:", leeftijd);

    
      alert(`Hallo ${naam}! Welkom in de quiz.`);
    });
  