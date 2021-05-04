<template>
<div id="app">


  <article id="entirequiz">
    <section class="bloc_questions">
      <div id="quiz">
        <div class="debut">
          <h1>Quiz</h1>
        </div>
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

  </article>


</div>
</template>

<script>


</script>



<style scoped>

#entirequiz{
  background-color: aqua;
  z-index: 9999;
}
</style>