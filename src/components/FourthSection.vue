<template>
    <div class="fourth-section">
        <!-- quatrième section-->
               <article class="section flex" id="section4">
                   <div class="portaitImg">
                       <img src="@/assets/img/ama_portrait.png" alt="portait d'une amazone du dahomey">
                   </div>
                   <div class="rightSide">
                       <p> Ces femmes aux têtes rasées coiffé d’un bonnet blanc orné de caïmans bleus avec une démarche virile et le regard noir ne prétendaient pas les égaler, les hommes, mais les surpassent.</p>
                       <img src="@/assets/img/army.jpg" alt="armé rang" style="width:400px;">
                       <p>Une armée de femme unique au monde au XVIIIe siècle. </p>
                       <div class="listen"  @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')">
                   <i class="fas fa-assistive-listening-systems"></i>
                   </div>
                       
                   </div>
                   <a class="button" href="#section5"><navigate-btn id="btn4"></navigate-btn></a>
               </article>
    </div>
</template>

<script>
import NavigateBtn from './NavigateBtn.vue';
export default {
    data() {
            return {
                BtnVisible: false,
                //showContent: false,
            }
        },
  components: {
    NavigateBtn
  },

};
</script>

<style scoped>

.section {
    height: 100vh;
    overflow: hidden;
    margin-bottom: 20vh;

}

.section p {
    font-size: 25px;
    text-align: center;
    font-family: 'Indie Flower', cursive;
}

.portaitImg {
    width: 450px;
    margin-top: 45px;
}

#section4 .button {
    position: absolute;
    left: 0;
}

.rightSide {
    margin-top: 70px;
    text-align: center;
}

.rightSide img {
    margin: 30px 0;
}
</style>