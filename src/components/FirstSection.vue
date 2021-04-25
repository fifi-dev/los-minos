<template>
    <div class="first-section">
     <article class="section flex">
         <div class="margin">
         <h1>Les Amazones du Dahomey</h1>
            <a class="button" href="#section2"><navigate-btn></navigate-btn ></a>
         </div>
         <div class="boxContain">
               <div class="item">
              <img src="@/assets/img/ama.svg" alt="portrait amazone">
        </div> 
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
    margin: 10vh auto;
    

}

.margin{
    margin-left: 10vw;
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
    font-size: 60px;
    padding-top: 25vh;
}

.boxContain{
    margin: 0 auto;
}

.item{
    width: 450px;
}

</style>