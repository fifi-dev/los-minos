<template>
  <div class="home">
    <div>
        <h1 v-show="elementVisible" class="hideElement"> Vous allez decouvrir une histoire peu raconté </h1>
        <h1 v-show="elementVisible2" class="hideElement"> Une histoire de combattantes </h1>
        <h1 v-show="elementVisibl3" class="hideElement"> Mais surtout une histoire de femme... </h1>
        <h1 v-show="elementVisible4" class="hideElement"> Prenez votre thé et montez le son... </h1>
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

export default {
  name: "Home",
  data() {
            return {
                elementVisible: false,
                elementVisible2: false,
                //showContent: false,
            }
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

::-webkit-scrollbar {
    width: 20px;
    background: black;
    display: none;
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