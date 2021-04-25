<template>
  <div id="app">
 <!--   <div v-if="$route.meta.header === 1" id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="header" v-if="$route.meta.header === 1">
      
    <input type="checkbox" id="check">
    <label for="check" class="open" id="black"><i class="fas fa-bars"></i></label>
    <nav>
    <label for="check" class="close"><i class="fas fa-times"></i></label>
    <ul>
        <li><a href="/home">Accueil</a></li>
        <li><a href="/biographie">Biographie de Tassi Hangbe</a></li>
        <li><a href="gallerie.php">Galerie</a></li>
        <li><a href="a_propos.php">A Propos</a></li>
        <li><a href="mentions_legales.php">Mentions legales</a></li>
        <li><a href="pre_quizz.php">Quizz</a></li>
        <li><a href="mailto:nullepart@mozilla.org"><i class="fas fa-envelope"></i></a></li>
    </ul>
</nav>
    </div>
    <div class="settings-card" v-if="$route.meta.header === 1">
    <div class="panel" >
               <div class="popup">
                   <h1>Quelle experience souhaitez-vous ?</h1>
                   <div class="info">Pour vous offrir la meilleure experience possible, merci de cocher les cases en bas avant de choisir un mode</div>
                   <div class="mode">
                       <div class="read">
                           <i class="fas fa-book"></i><br>
                           <button id="readMode" class="btn">Lire</button>
                       </div>
                       <div class="listen">
                           <i class="fas fa-assistive-listening-systems"></i> <br>
                           <button id="listenMode" class="btn">Ecouter</button>
                       </div>
                   </div>
                   <div class="settingsCheckbox">
                       <div class="bgmusic">
                           <input type="checkbox" id="bgMusic" name="bgMusic">
                           <label for="bgMusic">Musique de fond</label>
                           <audio id="myMusic" src="@/assets/audio/backsong.mp3" loop=""></audio>
                       </div>
                       <div class="fullScreen">
                           <input type="checkbox" id="fullScreen" name="fullScreen">
                           <label for="fullScreen">Plein ecran</label>
                       </div>
                   </div>
               </div>
           </div>
           <div class="settings flex">
                       <div class="volume">
                           <input type="range" min="0" max="100" value="50" class="volume-range">
                           <div class="icon">
                               <i class="fa fa-volume-up icon-size" aria-hidden="true"></i>
                           </div>
                           <div class="bar-hoverbox">
                               <div class="bar">
                                   <div class="bar-fill"></div>
                               </div>
                           </div>
                       </div>
                       <div class="openPanel">
                       <i class="fas fa-cogs"></i>
                       </div>
                   </div>
  </div>

    <settings-card></settings-card>
    <navigation-bar></navigation-bar>
    <div v-if="$route.meta.header === 1">
      <input type="checkbox" id="check">
      <label for="check" class="open" id="black"><i class="fas fa-bars"></i></label>
      <nav>
         <label for="check" class="close"><i class="fas fa-times"></i></label>
    <ul>
      <h1>test</h1>
        <li><router-link to="/home">Home</router-link></li>
        <li><a href="/biographie">Biographie de Tassi Hangbe</a></li>
        <li><router-link to="/galerie">Galerie</router-link> </li>
        <li><router-link to="/about">About</router-link></li>
        <li><a href="/mentions">Mentions legales</a></li>
        <li><a href="/quizz">Quizz</a></li>
        <li><a href="mailto:nullepart@mozilla.org"><i class="fas fa-envelope"></i></a></li>
    </ul>
      </nav>
   </div>
    
    <router-view />
  </div>
</template>


<script>
import NavigationBar from './components/NavigationBar.vue'
import $ from 'jquery'

export default {
  components: {
     NavigationBar
   },    
    mounted () {
      this.$nextTick(() => {
       $("#bgMusic").click(function () {
        if ($(this).prop("checked") == true) {
            alert("La musique va se lanncer.");
            $("#myMusic")[0].play();
        } else if ($(this).prop("checked") == false) {
            alert("La musique de fond va se mettre en pause");
            $("#myMusic")[0].pause();
        }
    });
         $("#fullScreen").click(function () {
        document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
    });
     $("#readMode").on('click', function () {
        // Suppression des classes si elles existent

        $(".panel").removeClass("block");
        $("#header").removeClass("none");
        $(".Container").removeClass("none");

        // ajout des classes si elles existent

        $(".panel").addClass("none");
        $("#header").addClass("block");
        $(".Container").addClass("block");


    });
    $(".openPanel").on('click', function () {
        // Suppression des classes si elles existent

        $(".panel").removeClass("none");

        // ajout des classes si elles existent
        $("#header").addClass("none");


    });
    $("#listenMode").on('click', function () {
        // Suppression des classes si elles existent

        $(".panel").removeClass("block");
        $("#header").removeClass("none");
        $(".Container").removeClass("none");

        // ajout des classes si elles existent

        $(".panel").addClass("none");
        $("#header").addClass("block");
        $(".Container").addClass("block");


    });

    $("#watchMode").on('click', function () {
        // Suppression des classes si elles existent

        $(".panel").removeClass("block");
        $("#header").removeClass("none");
        $(".Container").removeClass("none");

        // ajout des classes si elles existent

        $(".panel").addClass("none");
        $("#header").addClass("block");
        $(".Container").addClass("block");


    });
      })
  },
     methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
 
};
</script>
<style>

@import './assets/css/animations.css';
@import './assets/css/fonts.css';

::-webkit-scrollbar {
    width: 20px;
    background: black;
    display: none;
}

/* width 
::-webkit-scrollbar {
    width: 20px;
    background: black;
}

/* Track 
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px;
    border-radius: 10px;
    background: black;
}

/* Handle
::-webkit-scrollbar-thumb {
    background: #bb9a73;
    border-radius: 10px;
}
/* Handle on hover 
::-webkit-scrollbar-thumb:hover {
    background: #a58763;
}

*/

body{
  margin: 0;
    padding: 0;
    background-color: black;
    color: white;
}

h1{
    color: white;
}

img {
    max-width: 100%;
    height: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  z-index: 20;
}
/*

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*/

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.header{
    font-family: Poppins;
}

nav{
    position: fixed;
    z-index: 150;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#bb9a73;
    transition: all 0.5s ease ;
    clip-path: circle(0% at 30px 40px);
}
nav ul{
    list-style: none;
  
}
nav ul li a{
    text-decoration: none;
    text-align: center;
    display: block;
    font-size: 2rem;
    padding: 20px;
    color: black;
}
nav ul li a::after{
   content: "";
   display: block;
   width: 0;
   height: 2px;
   transition: 0.3s ease;
   background-color: black;
}
nav ul li a:hover::after{
    width: 100%;
 }
#check{
    display: none;
}

.open{
    font-size: 2rem;
    position: fixed;
    top: 10px;
    left: 10px;
    cursor: pointer;
    background-color: #bb9a73;
    padding: 12px;
    clip-path: circle();
    color: white;
}
.close{
    font-size: 2rem;
    position: fixed;
    top: 23px;
    left: 23px;
    cursor: pointer;
}

#black{
    background-color: transparent;
}

.header #check:checked ~ nav{
    clip-path: circle(100%);
}

.flex {
    display: flex;
    justify-content: space-around;
}

.flex p {
    width: 500px;
    margin: auto 50px;
}

/* panel */

.panel {
    height: 100vh;
    overflow: hidden;
    background: black;
}

.panel h1 {
    margin-top: 10%;
    font-size: 50px;
}

.fas {
    margin-bottom: 20px;
    font-size: 20px;
}

.panel .info {
    text-align-last: center;
    margin-top: 20px;
}

.settingsCheckbox {
    display: flex;
    width: 400px;
    margin: 0 auto;
    margin-top: 15%;
    justify-content: space-around;
}


.mode {
    display: flex;
    text-align: center;
    width: 600px;
    margin: 90px auto;
    justify-content: space-around;
}

.popup {
    height: 80vh;
    width: 80vw;
    margin: auto;
    margin-top: 10vh;
}

.btn {
    background-color: black;
    border: none;
    color: white;
    text-align: center;
    font-size: 30px;
    margin: 4px 2px;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
}

.btn:hover {
    border-bottom: 1px solid;
}

.settings {
    position: fixed;
    top: 30px;
    right: 100px;
}

.openPanel {
    margin-left: 20px;
}

.volume {
    display: flex;
    justify-content: center;
    align-items: center;
}

.volume input[type=range] {
    display: none;
  }

.bar-hoverbox {
    padding: 10px 15px;
    opacity: 0.7;
    transition: opacity .2s;
}

.bar-hoverbox :hover{
    opacity: 1;
        cursor: pointer;
}

 .bar {
    background: #999;
    height: 7px;
    width: 120px;
    border-radius: 15px;
    overflow: hidden;
     pointer-events: none;}

.bar-fill {
      background: #FFF;
      width: 0%;
      height: 100%;
      background-clip: border-box;
      pointer-events: none;
    }

/*Connexion affiché*/
.block {
    display: block;
}

/*Connexion caché*/

.none {
    display: none;
}

.section p {
    font-size: 25px;
    text-align: center;
    font-family: 'Indie Flower', cursive;
    color: white;
}


</style>
