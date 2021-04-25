<template>
  <div class="quizz">
        <section class="bloc_questions">
            <div id="quiz">
                    <h1>Quiz</h1>
                <div class="container">

                    <h2 id="question"></h2>

                    <h3 id="score"></h3>

                    <div class="choices">
                        <button id="guess0" class="btn">
                            <p id="choice0"></p>
                        </button>

                        <button id="guess1" class="btn">
                            <p id="choice1"></p>
                        </button>

                        <button id="guess2" class="btn">
                            <p id="choice2"></p>
                        </button>
                    </div>

                    <p id="progress"></p>



                    <div id="reco">
                        <a href="">Recommencer</a>
                    </div>
                </div>
            </div>



        </section>
  </div>
</template>

<script>

// class Question {
//     constructor(text, choices, answer) {
//       this.text = text;
//       this.choices = choices;
//       this.answer = answer;
//     }
//     isCorrectAnswer(choice) {
//       return this.answer === choice;
//     }
//   }

//   const answerIndicatorContainer = document.querySelector(".answer-indicator");

//   let questions = [
//     //tassi hangbe
//     new Question("Pour quoi Tasi Hangbè est-elle réputée d'être ?", ["La reine sans pudeur","La personne la plus orgueilleuse du royaume", "Une reine très émotive"], "La reine sans pudeur"),

//     new Question("Qui succède Tasi Hangbè ?", ["Agadja","Son frère jumeau Akaba", "Adama"], "Agadja"),

//     new Question("Quel proche de la reine a été assassiné ?", ["Son frère ainé","Son père", "Son fils unique"], "Son fils unique"),

//     new Question("De quoi le roi Akaba est-il mort ?", ["De vieillesse","La variole", "Arrêt cardiaque"], "La variole"),

//     new Question("Qui étaient les ennemis jurés du royaume ?", ["Les Akames","Les Ouéménous", "Les Congolais"], "Les Ouéménous"),

//     new Question("Qu’est devenu le Royaume du Dahomey aujourd’hui ?", ["Le Congo", "Le Togo", "Le Bénin"], "Le Bénin"),



//     // femmes soldats

//     new Question("Qui sont les Mino ?", ["Les esclaves du royaume","Les servantes de Tasi Hangbè", "Le régiment de combat exclusivement féminin"], "Le régiment de combat exclusivement féminin"),

//     new Question("Quel était l’un des éléments de la tenue des guerrières ?", ["Un bonnet blanc orné de caïmans bleus","Un bonnet blanc avec des plumes rouges", "Un chapeau pointu noir"], "Un bonnet blanc orné de caïmans bleus"),

//     new Question("Quand le régiment des femmes soldats a-t-il été créé  ?", ["18e siècle","16e siècle", "17e siècle"], "18e siècle"),

//     new Question("Quel est l’un des exercices pratiqués par les Mino ?", ["Lutte au corps à corps","La course", "La natation"], "Lutte au corps à corps"),

//     new Question("Comment sont appelés les guerrières par les historiens européens ?", ["Amazones du Dahomey ","Amazones du Habomey", "Amazones du Daliomai"], "Amazones du Dahomey"),

//     new Question("Où vivaient les femmes soldats du Dahomey ?", ["Dans un appartement spatial","Avec leur famille", "Dans les palais royaux"], "Dans les palais royaux"),

//     new Question("De quoi les guerrières étaient conditionnées à faire pour solidifier l’esprit de guerrière ?", ["Une danse traditionnelle","Des rituels magicoreligieux", "Une activité relaxante comme le yoga"], "Des rituels magicoreligieux"),

//     new Question("A quoi devaient s’astreindre les femmes qui devenaient femmes soldats ?", ["Ne prendre soin d’elle","Au célibat", "Ne pas sortir"], "Au célibat"),
    
//     new Question("Quand le régiment des femmes soldats a-t-il disparu ?", ["A la fin du 19e siècle","Au début fin du 18e siècle", "A la fin du 17e siècle"], "A la fin du 19e siècle"),

//   ];
  
//   class Quiz {
//     constructor(questions) {
//       this.score = 0;
//       this.questions = questions;
//       this.currentQuestionIndex = 0;
//     }

//     getCurrentQuestion() {
//       return this.questions[this.currentQuestionIndex];
//     }

//     guess(answer) {
//       if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
//         this.score++;
//         // document.getElementsByClassName("answer-indicator").style.backgroundColor = "rgb(10, 221, 73)";
//       }
//       this.currentQuestionIndex++;
//     }

//     hasEnded() {
//       return this.currentQuestionIndex >= this.questions.length;
//     }
//   }
  
//   const display = {
//     elementShown: function(id, text) {
//       let element = document.getElementById(id);
//       element.innerHTML = text;
//     },

//     endQuiz: function() {
//       endQuizHTML = `
//         <h1>Quiz terminé !</h1>
//         <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
//       this.elementShown("quiz", endQuizHTML);
//     },

//     question: function() {
//       this.elementShown("question", quiz.getCurrentQuestion().text);
//     },

//     choices: function() {
//       let choices = quiz.getCurrentQuestion().choices;
  
//       guessHandler = (id, guess) => {
//         document.getElementById(id).onclick = function() {
//           quiz.guess(guess);
//           quizApp();
//         }
//       }

//       // affichage choix + prise en compte du choix
//       for(let i = 0; i < choices.length; i++) {
//         this.elementShown("choice" + i, choices[i]);
//         guessHandler("guess" + i, choices[i]);
//       }
//     },
    
//     progress: function() {
//       let currentQuestionNumber = quiz.currentQuestionIndex + 1;
//       this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
//     },
//   };
  
//   // Game logic
//   quizApp = () => {
//     if (quiz.hasEnded()) {
//       display.endQuiz();
//     } else {
//       display.question();
//       display.choices();
//       display.progress();
//     } 
//   }
//   // Create Quiz
//   let quiz = new Quiz(questions);
//   quizApp();
</script>



<style scoped>
/* width */
::-webkit-scrollbar {
    width: 20px;
    background: black;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px;
    border-radius: 10px;
    background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #bb9a73;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #a58763;
}


article{
    display: flex;
    height: 722px;
    justify-items: center;
}


.bloc_questions{
    background-color: #000000;
    /* width: 80%; */
    display: grid;
    justify-items: center;
    text-align: center;
    min-height: 100vh;
    color: #dfe4ea;
}

#quiz h1 {
    text-transform: uppercase;
    font-size: 3rem;
  }

  #quiz h3 {
    color: #db5c17;
    font-size: 1.5rem;
    margin-bottom: 60px;
  }

  body .container{
      /* margin-top: 50px; */
      align-items: center;
      justify-items: center;
      width: 950px;
      height: 500px;
  }

  body .container .choices {
    display: flex;
    /* flex-wrap: wrap; */
    margin: 3rem auto 3rem;
    width: 800px;
  }
  body .container .choices button {
    width: 400px;
    height: 90px;
    border-radius: 15px;
    cursor: pointer;
    border: none;
    margin: 1rem;
    outline: none;
    background: #dfe4ea;
    user-select: none;
    font-weight: 600;
  }
  body .container .choices button:hover {
    background: #db5c17;
    transition: 0.5s;
  }
  body .container .choices button:active {
    transform: scale(0.9);
    transition: transform 0.1s;
  }
  body .container .choices button p {
    font-size: 1.1rem;
  }
  body #progress {
    font-size: 1.3rem;
    color: #db5c17;
    margin-bottom: 60px;
  }


  #reco a{
    font-size: 1.3rem;
    text-decoration: none;
    padding: 20px;
    border-radius: 15px;
    height: 170px;
    cursor: pointer;
    border: none;
    /* font-weight: 600;
    margin: 2rem auto 0; */
    color: #dfe4ea;
    background-color: #db5c17;
    
  }
  
  #reco a:hover{
    color: #db5c17;
    background-color: #dfe4ea;
  }
</style>