const readlineSync = require("readline-sync");

var score = 0;
highscores = [{
  Name: "Tony Stark",
  Score: 10
},
{
  Name: "Pepper Potts",
  Score: 9,
},
{
  Name: "Spider Man",
  Score: 8,
},
{
  Name: "Steve Rogers",
  Score: 5,
},
{
  Name: "Black Widow",
  Score: 3,
}
];

var name = readlineSync.question("What's your name?");
console.log("Welcome, ", name, "\n", "This is a quiz for TRUE IRON-MAN FAN QUIZ\n");

function play(question, answer) {
  currentAnswer = readlineSync.question(question);


  if (currentAnswer.toUpperCase() === answer.toUpperCase()) {
    score += 1;
    console.log("You are right!");
  } else {
    console.log("you are wrong!");
    console.log("The right answer is: ", answer)
  }
  console.log("Your score is: ", score)
  console.log("===============")

}


var QnAs = [{
  question: "When did Iron Man first appear in comics? ",
  answer: "1963"
},
{
  question: "What year did the first Iron Man movie come out? ",
  answer: "2009"
},
{
  question: "What is the name of the actor who plays Iron Man? ",
  answer: "Robert Downey Jr"
},
{
  question: "What is the name of Tony Stark's love interest?",
  answer: "Pepper Potts"
},
{
  question: "What is Pepper Potts' superhero name? ",
  answer: "Rescue"
},
{
  question: "Who is Iron Man's MCU protegé? ",
  answer: "Spider Man"
},
{
  question: "What is the name of Tony Stark's company? ",
  answer: "Stark Industries"
},
{
  question: "What;s the name of Iron Man's computer system? ",
  answer: "Jarvis"
},
{
  question: "Who was the villain of Iron Man 3? ",
  answer: "The Mandarin"
}

];


for (var i = 0; i < QnAs.length; i++) {
  play(QnAs[i].question, QnAs[i].answer)
}

console.log("Your final score is=> ", score, "\n")
console.log("highscores=>")
for (var i = 0; i < highscores.length; i++) {
  if(score>=highscores[i].Score){
    console.log("You have beaten ", highscores[i].Name)
  }
  
}
console.log("\nif you have beaten anyone's score, then claim a position in scoreboard by taking a screenshot of your score and send it to me!!")
