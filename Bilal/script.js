const quizCategorie = prompt("Welke quiz wilt u spelen? (1, 2, 3)");
const quiz = parseInt(quizCategorie);
console.log(quiz);

if (quiz === 1) {
    // quiz 1 vragen
    alert("Welkom bij quiz 1!");

} else if (quiz === 2) {
    // quiz 2 vragen
    alert("Welkom bij quiz 2!");

} else if (quiz === 3) {
    //quiz 3 vragen
alert("Welkom bij quiz 3!");
} else {
    console.log("Die quiz bestaat niet!");
}

