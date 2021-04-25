<template>
<div class="seventh-section">
    <!-- septième section-->
               <article class="section flex" id="section7">
                   <p>De plus elle étaient conditionnées a des rituels magicoreligieux qui permettaient à solidifier l’esprit de guerrière. </p>
                   <div class="listen" >
                       <!-- @click.prevent="playSound('@/assets/audio/section2.mp3')" -->
                       <button id="listenBtn2"><i class="fas fa-assistive-listening-systems"></i></button>
                    <audio id="audio2" src="@/assets/audio/section2.mp3"></audio>
                   </div>
                   <div class="ritualsImg">
                       <img src="@/assets/img/rituals_people.png" alt="people doing rituals">
                   </div>
               </article>
               </div>
</template>

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