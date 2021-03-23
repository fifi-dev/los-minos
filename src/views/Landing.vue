<template>
  <div class="landing">
    <logo-animation></logo-animation>
  </div>
</template>

<script>
import LogoAnimation from '../components/LogoAnimation.vue';

export default {
  name: "Home",
  components: {
    LogoAnimation,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}
</style>