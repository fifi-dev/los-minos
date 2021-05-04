<template>
<div class="seventh-section">
    <!-- septième section-->
               <article class="section flex none" id="section7">
                       <p>De plus elle étaient conditionnées a des rituels magicoreligieux qui permettaient à solidifier l’esprit de guerrière. <br>
                        <button id="listenBtn6"><i class="fas fa-assistive-listening-systems"></i></button>
                       <a class="button" id="btn7" href="#"><navigate-btn></navigate-btn></a>
                       </p>
                   <div class="listen" >
                       <!-- @click.prevent="playSound('@/assets/audio/section2.mp3')" -->
                    <audio id="audio2" src="@/assets/audio/section7.mp3"></audio>
                   </div>
                   <div class="ritualsImg">
                       <img src="@/assets/img/rituals_people.png" alt="people doing rituals">
                   </div>
               </article>
               
               </div>
</template>

<script>
import NavigateBtn from './NavigateBtn.vue';
export default {
    data() {
            return {
              //  BtnVisible: false,
                //showContent: false,
            }
        },
  components: {
    NavigateBtn
  },

  created() {
    //setTimeout(() => this.BtnVisible = true, 6000)
},

};
</script>

<style scoped>

.section {
    margin: auto;

}

.section p {
    font-size: 25px;
    text-align: center;
    font-family: 'Indie Flower', cursive;
}

.button {
    width: 40px;
    scroll-behavior: smooth;
}

.ritualsImg {
    width: 500px;
    text-align: center;
    margin: auto 10px;
}

.listen {
    margin: auto 0px;
}


</style>