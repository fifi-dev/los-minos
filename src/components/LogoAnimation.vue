<template>
  <div class="logo-animation">
    <div class="container">
        <div id="typewriter" class="typewriter">
            <h1>&lsaquo;/AGSTUDIO/&rsaquo;</h1>
        </div>
        <div class="appear">
            <div id="logo" class="logo">
                <img src="@/assets/img/logo_1.png" alt="">
            </div>
            <div class="div_button">
                <a class="button" href="/home">
                <circle-button></circle-button>
                </a>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import CircleButton from './CircleButton.vue';
export default {
  name: "logo_animation",
  components: {
    CircleButton
  },
  mounted () {
      this.$nextTick(() => {
        $("#typewriter").delay(4000).fadeOut(100);
        $(".appear").delay(4100).fadeIn();
      })
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.typewriter {
    width: 600px;
    margin: auto;
    margin-top: 25vh;
    background-color: darkgoldenrod;
}

h1 {
    font-size: 70px;
    color: white;
}

.typewriter h1 {
    overflow: hidden;
    /* On s'assure que rien n'apparait avant l'animation */
    border-right: .15em solid orange;
    /* The typwriter cursor */
    white-space: nowrap;
    /* Keeps the content on a single line */
    margin: 0 auto;
    /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em;
    /* Adjust as needed */
    animation:
        typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;
}

.logo {
    width: 40vw;
    margin: 2% auto;
    animation-name: bounceIn;
    animation-duration: 450ms;
    animation-timing-function: linear;
}

.appear{
    display: none;
}

.button{
    margin-left: 50%;
}

@media(min-width: 768px) and (max-width: 1388px) {

.appear{
      margin-top: 4%;
}

.logo {
    width: 35vw;
}

.div_button{
    margin-top: 5%;
}

}

@media(max-width: 767px) {

.appear{
      margin-top: 10%;
}

.logo {
    width: 50vw;
}

.div_button{
    margin-top: 15%;
}

}
</style>
