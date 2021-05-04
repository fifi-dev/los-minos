<template>
  <div id="app">
    <div class="flex">
      <div id="background">
        <three-cube></three-cube>
      </div>

      <article id="entirequiz">
        <div class="container-quiz">
          <div class="header-quiz">
            <h1>Quiz</h1>
          </div>

          <div
            class="box"
            v-for="(question, index) in questions.slice(a, b)"
            :key="index"
            v-show="quiz"
          >
            <div class="box-question">
              <p>{{ question.question }}</p>
            </div>
            <div class="box-propositions">
              <ul>
                <li
                  v-for="(proposition, index) in question.propositions"
                  :key="index"
                  class="li"
                  @click="selectResponse(proposition, index)"
                  :class="correct ? check(proposition) : ''"
                >
                  {{ proposition.props }}
                  <div v-if="correct ? proposition.correct : ''"></div>
                  <div v-if="correct ? !proposition.correct : ''"></div>
                </li>
              </ul>
            </div>
            <h2>Question {{ b }}/{{ questions.length }}</h2>
          </div>
          <div class="box-score" v-if="score_show">
            <h2>Votre score est</h2>
            <h2>{{ score }}/{{ questions.length }}</h2>
            <div class="btn-restart">
              <button @click="restartQuiz">
                Recommencer <i class="fas fa-sync-alt"></i>
              </button>
            </div>
          </div>
          <div class="footer-quiz">
            <div v-if="progress < 100" class="box-button">
              <button
                @click="skipQuestion()"
                :style="next ? 'background-color: rgb(106, 128, 202)' : ''"
              >
                Passer
              </button>
              <button
                @click="nextQuestion()"
                :style="!next ? 'background-color: rgb(106, 128, 202)' : ''"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import ThreeCube from "../components/TestComponent";

export default {
  name: "App",
  components: {
    ThreeCube,
  },

  data() {
    return {
      questions: [
        //tassi hangbe
        {
          question: "Pour quoi Tasi Hangbè est-elle réputée d'être ?",
          propositions: [
            { props: "La reine sans pudeur", correct: true },
            { props: "La personne la plus orgueilleuse du royaume" },
            { props: "Une reine très émotive" },
          ],
        },
        {
          question: "Qui succède Tasi Hangbè ?",
          propositions: [
            { props: "Adama" },
            { props: "Son frère jumeau Akaba" },
            { props: "Agadja", correct: true },
          ],
        },
        {
          question: "Quel proche de la reine a été assassiné ?",
          propositions: [
            { props: "Son frère ainé" },
            { props: "Son père" },
            { props: "Son fils unique", correct: true },
          ],
        },
        {
          question: "De quoi le roi Akaba est-il mort ?",
          propositions: [
            { props: "De vieillesse" },
            { props: "La variole", correct: true },
            { props: "Arrêt cardiaque" },
          ],
        },
        {
          question: "Qui étaient les ennemis jurés du royaume ?",
          propositions: [
            { props: "Les Akames" },
            { props: "Les Congolais" },
            { props: "Les Ouéménous", correct: true },
          ],
        },
        {
          question: "Qu’est devenu le Royaume du Dahomey aujourd’hui ?",
          propositions: [
            { props: "Le Bénin", correct: true },
            { props: "Le Congo" },
            { props: "Le Togo" },
          ],
        },

        // femmes soldats


        {
          question: "Qui sont les Mino ?",
          propositions: [
            { props: "Le régiment de combat exclusivement féminin", correct: true },
            { props: "Les servantes de Tasi Hangbè" },
            { props: "Les esclaves du royaume" },
          ],
        },
        {
          question: "Quel était l’un des éléments de la tenue des guerrières ?",
          propositions: [
            { props: "Un bonnet blanc orné de caïmans bleus", correct: true },
            { props: "Un bonnet blanc avec des plumes rouges" },
            { props: "Un chapeau pointu noir" },
          ],
        },
        {
          question: "Quand le régiment des femmes soldats a-t-il été créé ?",
          propositions: [
            { props: "18e siècle", correct: true },
            { props: "17e siècle" },
            { props: "16e siècle" },
          ],
        },
        {
          question: "Quel est l’un des exercices pratiqués par les Mino ?",
          propositions: [
            { props: "Lutte au corps à corps", correct: true },
            { props: "La course" },
            { props: "La natation" },
          ],
        },
        {
          question: "Comment sont appelés les guerrières par les historiens européens ?",
          propositions: [
            { props: "Amazones du Dahomey", correct: true },
            { props: "Amazones du Habomey" },
            { props: "Amazones du Daliomai" },
          ],
        },
        {
          question: "Où vivaient les femmes soldats du Dahomey ?",
          propositions: [
            { props: "Dans les palais royaux", correct: true },
            { props: "Dans un appartement spatial" },
            { props: "Avec leur famille" },
          ],
        },
        {
          question: "De quoi les guerrières étaient conditionnées à faire pour solidifier l’esprit de guerrière ?",
          propositions: [
            { props: "Des rituels magicoreligieux", correct: true },
            { props: "Une danse traditionnelle" },
            { props: "Une activité relaxante comme le yoga" },
          ],
        },
        {
          question: "A quoi devaient s’astreindre les femmes qui devenaient femmes soldats ?",
          propositions: [
            { props: "Au célibat", correct: true },
            { props: "Ne prendre soin d’elle" },
            { props: "Ne pas sortir" },
          ],
        },
        {
          question: "Quand le régiment des femmes soldats a-t-il disparu ?",
          propositions: [
            { props: "A la fin du 19e siècle", correct: true },
            { props: "Au début fin du 18e siècle" },
            { props: "A la fin du 17e siècle" },
          ],
        },
      ],
      a: 0,
      b: 1,
      next: true,
      score_show: false,
      quiz: true,
      score: 0,
      correct: false,
      progress: 0,
    };
  },
  computed: {},
  methods: {
    selectResponse(e) {
      this.correct = true;
      this.next = false;
      if (e.correct) {
        this.score++;
      }
    },
    check(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      if (this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
      }
    },
    skipQuestion() {
      if (!this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;

      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
      }
    },

    restartQuiz() {
      Object.assign(this.$data, this.$options.data()); // reset data in vue
    },
  },
};
</script>

<style scoped>

#app{
  overflow-y: hidden;
}
.flex {
  display: flex;
  justify-content: center;
}

/* #background{
  z-index: -9999;
} */
#entirequiz {
  position: absolute;
  margin: 0 auto;
  z-index: -0;
  margin: 0;
  padding: 0;
  display: flex;
  min-height: 100vh;
  justify-items: center;
  color: #000;
}

.container-quiz {
  /* filter: blur(2px); */
  display: flex;
  max-width: 500px;
  width: 100%;
  /* height: 85%; */
  background-color: white;
  text-align: center;
  flex-flow: column;
  border: 1px solid #e7eae0;
  border-radius: 10px;
  margin: auto;
}

.header-quiz {
  display: flex;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #e7eae0;
  justify-content: center;
  align-items: center;
  background-color: #e7eae0;
  border-radius: 10px 10px 0px 0px;
  color: #000;
}

.header-quiz h1{
  color: #000;
}

.container-quiz .box {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
  margin: auto;
}

.box-question {
  margin-top: 20px;
}

.box-question p {
  margin: 20px 0 0;
}

.box-propositions {
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
}

ul {
  display: flex;
  width: 80%;
  margin: 0;
  padding: 0;
  flex-flow: column;
}

li {
  list-style: none;
  line-height: 2;
  border: 1px solid #cdd2d2;
  margin-bottom: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
}

li:hover {
  background-color: #e7eae0;
}

li > div {
  float: right;
  margin-top: 7px;
  margin-right: 7px;
  color: white;
}

.check {
  color: rgb(74, 219, 74);
}

.close {
  color: rgb(240, 117, 100);
}

.footer-quiz {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  border-top: 1px solid #e7eae0;
  background-color: #e7eae0;
  border-radius: 0px 0px 10px 10px;
}

.box {
  text-align: center;
  margin: 0;
}

.box-button {
  display: flex;
  width: 100%;
}

.footer-quiz .box-button button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 10px;
  letter-spacing: 2px;
  background-color: #a09f9ff5;
}

li.correct {
  border: 1px solid rgb(74, 219, 74);
  background-color: rgb(74, 219, 74);
  color: white;
  font-weight: 600;
}

li.incorrect {
  border: 1px solid rgb(240, 117, 100);
  background-color: rgb(240, 117, 100);
  color: white;
  font-weight: 600;
}

.box-score {
  display: flex;
  max-width: 500px;
  /* width: 100%;
  height: 70%; */
  flex-flow: column;
}

.box-score h2 {
  margin-top: 40px;
}

i {
  display: none;
  color: white;
}

.btn-restart {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-top: 50px;
}

.btn-restart button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  background-color: rgb(106, 128, 202);
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.next {
  background-color: rgb(106, 128, 202);
}
/* 
@media screen and (max-width: 900px) {
    .container-quiz {
        width: 60%;
    }
}

@media screen and (max-width: 720px) {
    .container-quiz {
        width: 80%;
    }
    .footer-quiz .box-button button {
        width: 100px;
    }
}  */
</style>