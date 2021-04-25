<template>
    <div class="first-section">
     <article class="section">
         <div class="boxContain">
              <div class="item">
              <img src="@/assets/img/ama.svg" alt="portrait amazone">
        </div> 
             <h1>Les Amazones du Dahomey</h1>
            <a class="button" href="#section2"><navigate-btn></navigate-btn ></a>
         </div>
          <div class="item">
              <img src="@/assets/img/globe.svg" alt="globe africa">
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

.boxContain{
    position: relative;
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

h1{
    font-family: 'Indie Flower', cursive;
    font-size: 64px;
    padding-top: 10vh;
}

.item{
    width: 200px;
}

</style>