<template>
  <div class="logo-animation">
    <div class="container">
      <div id="typewriter" class="typewriter">
        <h1>&lsaquo;/AGSTUDIO/&rsaquo;</h1>
      </div>
      <div class="appear">
        <div id="logo" class="logo">
          <img src="@/assets/img/logo_1.png" alt="" />
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
import CircleButton from './CircleButton.vue';
import $ from 'jquery'
export default {
  name: "logo_animation",
  components: {
    CircleButton,
  },
  mounted() {
    this.$nextTick(() => {
      $("#typewriter").delay(4000).fadeOut(100);
      $(".appear").delay(4100).fadeIn();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.panel {
   display: none;
}
.typewriter {
  max-width: 600px;
  margin: auto;
  margin-top: 25vh;
}

h1 {
  font-size: 70px;
  color: white;
}

.div_button {
  padding: 50px;
  height: 50%;
}

.typewriter h1 {
  overflow: hidden;
  /* On s'assure que rien n'apparait avant l'animation */
  border-right: 0.15em solid orange;
  /* The typwriter cursor */
  white-space: nowrap;
  /* Keeps the content on a single line */
  margin: 0 auto;
  /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em;
  /* Adjust as needed */
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

.logo {
  /* width: 40vw; */
  width: 100%;
  height: 50%;
  animation-name: bounceIn;
  animation-duration: 450ms;
  animation-timing-function: linear;
}

.logo img {
  width: 100%;
  max-width: 500px;
  height: auto;
}
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.appear {
  display: none;
  height: 100%;
}
</style>
