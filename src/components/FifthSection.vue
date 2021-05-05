<template>
    <div class="fifth-section">
         <!-- cinquième section-->
               <article class="section" id="section5">
                   <div class="kingdomImg">
                       <img src="@/assets/img/kingdom_dahomey.svg" alt="amazones et le roi">
                   </div>
                   <p>Éduquées au combat, elles vouent leur vie entière à la défense du roi et de son royaume.</p>
                   <div>
                       <button id="listenBtn2"><i class="fas fa-assistive-listening-systems"></i></button>
                    <audio src="@/assets/audio/section5.mp3" id="music5"></audio>
                    <div class="player5">
  <a id="play-btn5">
<i class="fa fa-play playing5" aria-hidden="true"></i>
<i class="fa fa-pause pausing5" aria-hidden="true" style="display:none"></i>
 </a>
</div>
                   </div>
                   <a class="button" id="btn5" href="#"><navigate-btn v-show="BtnVisible"></navigate-btn ></a>
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

  created() {
    setTimeout(() => this.BtnVisible = true, 6000)
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


.kingdomImg {
    margin: 50px 0;
    text-align: center;
}

.kingdomImg img {
    text-align: center;
    width: 390px;
}

#section5{
    display: none;
}

.picture {
    width: 320px;
    height: 320px;
    overflow: hidden;
}

.picture img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.detail {
    padding: 25px 20px;
    font-weight: 600;
    text-align: center;
}

.detail h3 {
    margin: 0;
    font-size: 18px;
}

.detail span {
    display: block;
    font-size: 16px;

}

.detail a {
    text-decoration: none;
    color: #bb9a73;
}


</style>