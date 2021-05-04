<template>
    <div class="second-section">
    <article class="section" id="section2">
                   <a class="button" id="btn2" href="#section3"><navigate-btn></navigate-btn ></a>
                   <p>Il était une fois, dans le royaume de Dahomey</p>
                   <div class="image-slider">
<div><img src="@/assets/img/royaume dahomey.jpg"></div>
<img src="@/assets/img/africa_map.png">
</div>
                   <div class="listen" >
                       <!-- @click.prevent="playSound('@/assets/audio/section2.mp3')" -->
                       <button id="listenBtn2"><i class="fas fa-assistive-listening-systems"></i></button>
                    <audio id="audio2" src="@/assets/audio/section2.mp3"></audio>
                   </div>

               </article>
    </div>
</template>
<script>
import NavigateBtn from './NavigateBtn.vue';
import $ from 'jquery'

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
  mounted (){
      this.$nextTick(() => {
          $("#listenBtn2").click(function() {
                        $("#audio2").play();
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

<style scoped>
.section {
    margin: auto;

}

#section2{
    display: none;
}
 

.button {
    width: 40px;
    scroll-behavior: smooth;
}

.section p {
    font-size: 25px;
    text-align: center;
    font-family: 'Indie Flower', cursive;
}

.image-slider {
  position: relative;
  display: inline-block;
  line-height: 0;
  margin-top: 5vh;
}

.image-slider > div {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 25px;
  max-width: 100%;
  overflow: hidden;
  resize: horizontal;
}

.image-slider > div:before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 13px;
  height: 13px;
  padding: 5px;
  background: linear-gradient(-45deg, white 50%, transparent 0);
  background-clip: content-box;
  cursor: ew-resize;
  -webkit-filter: drop-shadow(0 0 2px black);
  filter: drop-shadow(0 0 2px black);
}

.image-slider img {
  user-select: none;
  max-width: 400px;
}



</style>