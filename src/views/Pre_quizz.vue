<template>
    <section class="bloc_questions">
              <div id="logo">
                  <img src="img/logo_1.png" alt="le_logo">
              </div>

              <hr>

              <div id="quiz">
                  <h1>Connaissez-vous réellement <span>"Les femmes soldats du Dahomey" </span>?</h1>

                  <div id="begin"><a href="quizz.php">Commencer !</a></div>

                  <div id="wow">
                      <img src="img/quiz.jpg" alt="les_amazones">
                  </div>

              </div>

    </section>
</template>

<style scoped>

.bloc_questions{
  background-color: #000000;
  width: 80%;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  min-height: 100vh;
  color: #dfe4ea;
}

#logo img{
  width: 250px;
}

hr {
  border: 3px double rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  overflow: visible;
  text-align: center;
  width: 400px;
}

#quiz{
  width: 100%;
}


#quiz h1 {
    text-transform: uppercase;
}

#quiz h1 span{
  color: #db5c17;
}

#begin {
  margin-top: 60px;
}

#begin a:active {
  transform: scale(0.9);
  transition: transform 0.1s;
}

#begin a{
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

#begin a:hover{
  color: rgb(255, 255, 255);
  background-color: #db5c17;
}

#wow{
margin: 70px auto 0;
}

#wow img{
  width: 900px;
  height: 200px;
}

.results{
padding:0 40px ;
background-color:  #dfe4ea;
width: 20%;
display: flex;
align-items: center;
justify-items: center;
text-align: center;
min-height: 100vh;
}

.les_cercles{
flex-direction: column;
width: 40px;
align-items: center;
margin-right: 35px;
}


.les_cercles h1{
  font-size: 40px;
}

.les_cercles h1 i{
  margin-bottom: 140px;
}

.les_cercles h1 i:last-child{
  margin-bottom: 0;
}


.les_parties div{
  margin-bottom: 162px;
}

.les_parties div:last-child{
  margin-bottom: 0;
}

.les_parties div span{
  font-size: 1.1em;
  font-weight: bold;
}

</style>