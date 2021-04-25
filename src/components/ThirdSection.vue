<template>
    <div class="third-section">
    <!-- troisieme section-->
       <article class="section" id="setion3">
            <p>Une armée de guerrières plus fortes et plus vaillantes que les hommes appelées les Mino ( « nos mère » en langue fon ) et les Amazones par les colons</p>
            <div class="listen" >
                       <!-- @click.prevent="playSound('@/assets/audio/section2.mp3')" -->
                       <button id="listenBtn2"><i class="fas fa-assistive-listening-systems"></i></button>
                    <audio id="audio2" src="@/assets/audio/section2.mp3"></audio>
                   </div>
            <a class="button" href="#section4"><navigate-btn></navigate-btn ></a>
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

};
</script>
<style scoped>

.section {
    height: 100vh;
    overflow: hidden;
    margin-bottom: 20vh;

}

.button {
    width: 40px;
}

#setion3{
    width: 80vw;
    margin: 0 auto;
}

.imgC{
    width: 60vw;
    margin: 20px auto;
}


</style>