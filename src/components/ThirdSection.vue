<template>
    <div class="third-section">
    <!-- troisieme section-->
       <article id="secion3" class="section section3">
            <p>Une armée de guerrières plus fortes et plus vaillantes que les hommes appelées les Mino ( « nos mère » en langue fon ) et les Amazones par les colons</p>
            <div>
                       <button id="listenBtn2"><i class="fas fa-assistive-listening-systems"></i></button>
                    <audio src="@/assets/audio/section2.mp3" id="music3"></audio>
                    <div class="player3">
  <a id="play-btn3">
<i class="fa fa-play playing3" aria-hidden="true"></i>
<i class="fa fa-pause pausing3" aria-hidden="true" style="display:none"></i>
 </a>
</div>
                   </div>
            <a class="button" id="btn3" href="#section2"><navigate-btn></navigate-btn ></a>
            <div class="imgC">
                <img src="@/assets/img/men_and_the_amazone.svg" alt="les soldats et les amazones">
            </div>
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
}
  
</script>
<style scoped>

.section {
    margin: auto;

}

.button {
    width: 40px;
}


.section3{
    display: none;
    width: 80vw;
    margin: 0 auto;
}


.imgC{
    width: 50vw;
    margin: 20px auto;
}


</style>