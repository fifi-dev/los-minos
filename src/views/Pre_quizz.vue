<template>
  <section class="bloc_questions">
    <div id="logo">
      <img src="@/assets/img/logo_1.png" alt="le_logo" />
    </div>

    <div id="hr_quiz">
      <hr />
    </div>

    <div id="quiz">
      <h1>
        Connaissez-vous réellement
        <span>"Les femmes soldats du Dahomey" </span>?
      </h1>

      <div id="begin"><a href="/quizz.html">Commencer !</a></div>

      <div id="img_quiz">
        <img src="@/assets/img/quiz.jpg" alt="les_amazones" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bloc_questions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  min-height: 100vh;
  color: #dfe4ea;
}

#logo {
  margin-top: 30px;
}

#logo img {
  width: 100%;
  max-width: 250px;
  height: auto;
}

#hr_quiz {
  width: 100%;
  text-align: center;
}

#hr_quiz hr {
  border: 3px double rgb(255, 255, 255);
  overflow: visible;
  text-align: center;
  max-width: 400px;
}

#quiz {
  width: 100%;
}

#quiz h1 {
  text-transform: uppercase;
}

#quiz h1 span {
  color: #db5c17;
}

#begin {
  margin-top: 60px;
}

#begin a:active {
  transform: scale(0.9);
  transition: transform 0.1s;
}

#begin a {
  font-size: 1.3rem;
  text-decoration: none;
  color: #db5c17;
  padding: 30px;
  border-radius: 15px;
  background-color: #dfe4ea;
  height: 170px;
  cursor: pointer;
  border: none;
  font-weight: 600;
  margin: 2rem auto 0;
}

#begin a:hover {
  color: rgb(255, 255, 255);
  background-color: #db5c17;
}

#img_quiz {
  margin: 70px auto 0;
  width: 100%;
  height: 200px;
}

#img_quiz img {
  width: 100%;
  max-width: 900px;
  height: auto;
}

.results {
  padding: 0 40px;
  background-color: #dfe4ea;
  width: 20%;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  min-height: 100vh;
}

.les_cercles {
  flex-direction: column;
  width: 40px;
  align-items: center;
  margin-right: 35px;
}

.les_cercles h1 {
  font-size: 40px;
}

.les_cercles h1 i {
  margin-bottom: 140px;
}

.les_cercles h1 i:last-child {
  margin-bottom: 0;
}

.les_parties div {
  margin-bottom: 162px;
}

.les_parties div:last-child {
  margin-bottom: 0;
}

.les_parties div span {
  font-size: 1.1em;
  font-weight: bold;
}
</style>