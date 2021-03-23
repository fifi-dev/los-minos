<template>
  <div class="landing">
    <logo-animation></logo-animation>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import LogoAnimation from '../components/LogoAnimation.vue';

export default {
  name: "Home",
  components: {
    HelloWorld,
    LogoAnimation,
  },
};
</script>