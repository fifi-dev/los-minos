<template>
    <div class="third-section">
    <!-- troisieme section-->
       <article id="secion3" class="section section3">
            <p>Une armée de guerrières plus fortes et plus vaillantes que les hommes appelées les Mino ( « nos mère » en langue fon ) et les Amazones par les colons</p>
            <div class="listen" >
                       <!-- @click.prevent="playSound('@/assets/audio/section2.mp3')" -->
                       <div class="bgAudio2">
                           <input type="checkbox" id="bgMusic" name="bgMusic">
                         <audio id="myAudio2" src="@/assets/audio/section2.mp3" loop=""></audio> 
                       </div>
                   </div>
            <a class="button" id="btn3" href="#section3"><navigate-btn></navigate-btn ></a>
            <div class="imgC">
                <img src="@/assets/img/men_and_the_amazone.svg" alt="les soldats et les amazones">
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
  mounted () {
      this.$nextTick(() => {
           $("#bgMusic").click(function () {
        if ($(this).prop("checked") == true) {
            alert("La musique va se lanncer.");
            $("#myAudio2")[0].play();
        } else if ($(this).prop("checked") == false) {
            alert("La musique de fond va se mettre en pause");
            $("#myAudio2")[0].pause();
        }
    });
      })
  }

}
  
</script>
<style scoped>

.section {
    height: 100vh;
    overflow: hidden;
     margin: 10vh auto;
    margin-bottom: 20vh;

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