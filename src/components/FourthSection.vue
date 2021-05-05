<template>
    <div class="fourth-section">
        <!-- quatrième section-->
               <article class="section flex none" id="section4">
                   <div class="portaitImg">
                       <img src="@/assets/img/ama_portrait.png" alt="portait d'une amazone du dahomey">
                   </div>
                   <div class="rightSide">
                       <p> Ces femmes aux têtes rasées coiffé d’un bonnet blanc orné de caïmans bleus avec une démarche virile et le regard noir ne prétendaient pas les égaler, les hommes, mais les surpassent.</p>
                       <img src="@/assets/img/army.jpg" alt="armé rang" style="width:400px;">
                       <p>Une armée de femme unique au monde au XVIIIe siècle. </p>
                       <div>
                       <button id="listenBtn2"><i class="fas fa-assistive-listening-systems"></i></button>
                    <audio src="@/assets/audio/section3.mp3" id="music4"></audio>
                    <div class="player4">
  <a id="play-btn4">
<i class="fa fa-play playing4" aria-hidden="true"></i>
<i class="fa fa-pause pausing4" aria-hidden="true" style="display:none"></i>
 </a>
</div>
                   </div>
                       
                   </div>
                   <a class="button" id="btn4" href="#"><navigate-btn></navigate-btn></a>
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
    margin: auto;
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