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
        <li><a href="/galerie">Galerie</a></li>
        <li><a href="/about">A Propos</a></li>
        <li><a href="/mentions">Mentions legales</a></li>
        <li><a href="/pre_quizz">Quizz</a></li>
        <li><a href="mailto:nullepart@mozilla.org"><i class="fas fa-envelope"></i></a></li>
    </ul>
</nav>
    </div>
    <div class="settings flex">
        <div class="bgmusic">
                           <input type="checkbox" id="bgMusic" name="bgMusic" checked>
                        <!--   <audio id="myMusic" src="@/assets/audio/backsong.mp3" loop="" autoplay></audio> -->
                       </div>
                       <div class="player">
  <a id="play-btn">
<i class="fa fa-play playing" aria-hidden="true"></i>
<i class="fa fa-pause pausing" aria-hidden="true" style="display:none"></i>
 </a>
  <a id="volume-btn">
<i class="fa fa-volume-up volume" aria-hidden="true"></i>
<i class="fa fa-volume-off muting" aria-hidden="true" style="display:none"></i>
  </a>
  <span class="btn">
		<input type="range" min="0" max="1" step="0.1" id="volumeRange">
	</span>
  <div class="progress">
		<div class="currentValue"></div>
	</div>
</div>

                       <div class="fullScreen">
                           <button id="fullScreen"><i class="fas fa-expand"></i></button>
                       </div>
                   </div>
   <transition
   mode="out-in"
   enter-active-class="animate__animated animate__fadeIn"
   leave-active-class="animate__animated animate__fadeOut"
   >
    <router-view />
    </transition>
    
<div class="audioC">
 <audio id="myMusic" class="myMusic" src="@/assets/audio/backsong.mp3" loop="" autoplay></audio>
</div>
  </div>
</template>


<script>
import $ from 'jquery'

export default {
    
data() {
      return {
          isOff: false
      }
    },

  components: {
    // NavigationBar
   }, 
   
   
mounted() {

    $(document).ready(function() {
    Mute();
     bindEvents3();
     bindEvents4();
     bindEvents5();
     bindEvents6();
     bindEvents7();
});
    $("#bgMusic").click(function () {
        if ($(this).prop("checked") == true) {
            alert("La musique va se lanncer.");
            $("#myMusic")[0].play();
        } else if ($(this).prop("checked") == false) {
            alert("La musique de fond va se mettre en pause");
            $("#myMusic")[0].pause();
        }
    });

function Mute() {
        $('#volume-btn').bind('click', function() {
            if ($('#myMusic')[0].muted) {
                $('.volume').show();
                $('.muting').hide();
            } else {
                $('.volume').hide();
                $('.muting').show();
            }
            $('#myMusic')[0].muted = !$('#myMusic')[0].muted;
        });
    }

$('#volumeRange').bind('change', function(){
		$('#myMusic')[0].volume = $(this).val();
	});

        $("#fullScreen").click(function () {
        document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
    });


var playing = false;

function bindEvents3() {
    $('#play-btn3').bind('click', function() {
        if (playing) {
            console.log(' pas play');
            $('.playing3').show();
            $('#music3')[0].pause();
            $('.pausing3').hide();

        } else {
            $('#music3')[0].play();
            console.log(' play');
            $('.playing3').hide();
            $('.pausing3').show();
        }
   
        playing = !playing;

    });
}

var playing4 = false;

function bindEvents4() {
    $('#play-btn4').bind('click', function() {
        if (playing4) {
            console.log(' pas play');
            $('.playing4').show();
            $('#music4')[0].pause();
            $('.pausing4').hide();

        } else {
            $('#music4')[0].play();
            console.log(' play');
            $('.playing4').hide();
            $('.pausing4').show();
        }
   
        playing4 = !playing4;

    });
}

var playing5 = false;

function bindEvents5() {
    $('#play-btn5').bind('click', function() {
        if (playing5) {
            console.log(' pas play');
            $('.playing5').show();
            $('#music5')[0].pause();
            $('.pausing5').hide();

        } else {
            $('#music5')[0].play();
            console.log(' play');
            $('.playing5').hide();
            $('.pausing5').show();
        }
   
        playing5 = !playing5;

    });
}

var playing6 = false;

function bindEvents6() {
    $('#play-btn6').bind('click', function() {
        if (playing6) {
            console.log(' pas play');
            $('.playing6').show();
            $('#music6')[0].pause();
            $('.pausing6').hide();

        } else {
            $('#music6')[0].play();
            console.log(' play');
            $('.playing6').hide();
            $('.pausing6').show();
        }
   
        playing6 = !playing6;

    });
}


var playing7 = false;

function bindEvents7() {
    $('#play-btn7').bind('click', function() {
        if (playing7) {
            console.log(' pas play');
            $('.playing7').show();
            $('#music7')[0].pause();
            $('.pausing7').hide();

        } else {
            $('#music7')[0].play();
            console.log(' play');
            $('.playing7').hide();
            $('.pausing7').show();
        }
   
        playing7 = !playing7;

    });
}
  
   
    
    },
   
     methods: {
         changeOn(){
                let oAudio = document.querySelector("#audio");
               if(this.isOff){
                                 oAudio.play();//Let the audio file start playing     
               }else{
                                 oAudio.pause();//Make the audio file pause 
               }
               this.isOff = !this.isOff;
           },
           audioAutoPlay() {
                let audio = document.getElementById('audio');
                    this.isOff = false;
                    audio.play();
                document.removeEventListener('touchstart',this.audioAutoPlay);
            },



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
    color: white;
}

.fa {
    color: white;
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

.isOn{
    width: 28px;
    height: 28px;
    position: fixed;
    z-index: 2000;
    top: 20px;
    left: 20px;
     -webkit-animation: rotating 1.2s linear infinite;
    animation: rotating 1.2s linear infinite;
    background: url("/assets/img/globe.svg") 0 0 no-repeat;
    background-size:100%; 
}
@keyframes rotating {
    from { -webkit-transform: rotate(0) }
    to { -webkit-transform: rotate(360deg) }
 }
@-webkit-keyframes rotating {
    from { -webkit-transform: rotate(0) }
    to { -webkit-transform: rotate(360deg) }
 }
.isOff{
    width: 28px;
    height: 28px;
    position: fixed;
    z-index: 2000;
    top: 20px;
    left: 20px;
    background: url("/assets/img/ama.svg") 0 -28px no-repeat;
    background-size:100%; 
}

#fullScreen{
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
}

.volume-range{
    margin-right: 30px;
}

.bgmusic{
    margin-right: 20px;
}

</style>
