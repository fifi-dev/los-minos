<template>
  <div class="home">
  <!--    <div>
       <h1 v-show="elementVisible" class="hideElement"> Vous allez decouvrir une histoire peu raconté </h1>
        <h1 v-show="elementVisible2" class="hideElement"> Une histoire de combattantes </h1>
        <h1 v-show="elementVisibl3" class="hideElement"> Mais surtout une histoire de femme... </h1>
        <h1 v-show="elementVisible4" class="hideElement"> Prenez votre thé et montez le son... </h1>
    </div> -->
    <div class="settings-card" v-if="$route.meta.header === 1">
    <div class="panel" >
               <div class="popup">
                   
                   <h1>Quelle experience souhaitez-vous ?</h1>
                   <div class="info">Pour vous offrir la meilleure experience possible, merci de cocher les cases en bas avant de choisir un mode</div>
                   <div class="mode">
                       <div class="read">
                           <i class="fas fa-book"></i><br>
                           <button id="readMode" class="btn">Découvrir</button>
                       </div>
                   </div>
                   <div class="settingsCheckbox">
                       <div class="bgmusic">
                           <input type="checkbox" id="bgMusic" name="bgMusic">
                           <label for="bgMusic">Musique de fond</label>
                        <!--   <audio id="myMusic" src="@/assets/audio/backsong.mp3" loop="" autoplay></audio> -->
                       </div>
                       <div class="fullScreen">
                           <input type="checkbox" id="fullScreen" name="fullScreen">
                           <label for="fullScreen">Plein ecran</label>
                       </div>
                   </div>
               </div>
           </div>
           
  </div>
           <div class="Container none">
             <settings-card></settings-card>
               <!-- Première section-->
               <first-section></first-section>
               <!-- Deuxième section-->
               <second-section></second-section>
               <!-- troisieme section-->
               <third-section></third-section>
               <!-- quatrième section-->
               <fourth-section></fourth-section>
               <!-- cinquième section-->
               <fifth-section></fifth-section>
               <!-- sixième section-->
              <sixth-section></sixth-section>
               <!-- septième section-->
               <seventh-section></seventh-section>
           </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import SettingsCard from '../components/SettingsCard.vue';
//import { Swiper, SwiperSlide } from 'swiper/vue';
//import VueCarrousel from '../components/VueCarrousel'

import SeventhSection from '../components/SeventhSection'
import SixthSection from '../components/SixthSection'
import FifthSection from '../components/FifthSection'
import FourthSection from '../components/FourthSection'
import ThirdSection from '../components/ThirdSection'
import SecondSection from '../components/SecondSection'
import FirstSection from '../components/FirstSection'
import $ from 'jquery'

export default {
  name: "Home",
  
  data() {
            return {
                elementVisible: false,
                elementVisible2: false,
                //showContent: false,
            }
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



    $("#btn1").on('click', function(){
    $('#section2').fadeIn(500);
     $('#section1').fadeOut();
    });

    $("#btn2").on('click', function(){
    $('.section3').fadeIn(500);
     $('#section2').fadeOut();
    });

    $("#btn3").on('click', function(){
    $("#section4").removeClass("none");
    $('#section4').fadeIn();
     $('.section3').fadeOut();
    });

    $("#btn4").on('click', function(){
    $('#section5').fadeIn(500);
     $('#section4').fadeOut();
    });

    $("#btn5").on('click', function(){
    $('#section6').fadeIn(500);
     $('#section5').fadeOut();
    });

    $("#btn6").on('click', function(){
    $("#section7").removeClass("none");
    $('#section7').fadeIn(500);
     $('#section6').fadeOut();
    });

    $("#btn7").on('click', function(){
    $("#section1").fadeIn("none");
    $("#section2").fadeIn("none");
    $("#section3").fadeIn("none");
    $("#section4").fadeIn("none");
    $("#section5").fadeIn("none");
    $("#section7").fadeIn("none");
    });


$("#slider").slider({
value : 75,
step  : 1,
range : 'min',
min   : 0,
max   : 100,
slide : function(){
    var value = $("#slider").slider("value");
    $("#myMusic").volume = (value / 100);
}
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
  components: {
   // SettingsCard,
//   Swiper,
 //  SwiperSlide,
 //VueCarrousel,
 FirstSection,
 SecondSection,
 ThirdSection,
 FourthSection,
 FifthSection,
 SixthSection,
 SeventhSection,
 
  },
   created() {
            setTimeout(() => this.elementVisible = true, 2000),
            setTimeout(() => this.elementVisible2 = true, 5500),
            setTimeout(() => this.elementVisible = false, 5000),
            setTimeout(() => this.elementVisible2 = false, 8000)
        },
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
    scroll-behavior: smooth;
}

.section {
    height: 100vh;
    overflow: hidden;
    margin: 10vh auto;
    margin-bottom: 20vh;
}


.section p {
    font-size: 25px;
    text-align: center;
    font-family: 'Indie Flower', cursive;
}


::-webkit-scrollbar {
    width: 20px;
    background: black;
}
/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px;
    border-radius: 10px;
    background: black;
    display: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #bb9a73;
    border-radius: 10px;
    display: none;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #a58763;
    display: none;
}


.section p {
    font-size: 25px;
    text-align: center;
    margin: 2vh 5vw;
    font-family: 'Indie Flower', cursive;
}

.Container {
    padding-top: 50px;
}

.section {
    height: 100vh;
    overflow: hidden;
    margin-bottom: 20vh;

}

.button {
    width: 40px;
}

</style>