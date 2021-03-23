<template>
  <div class="home">
    <settings-card></settings-card>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus necessitatibus rem laudantium totam accusamus expedita, ex harum eos modi eligendi nemo inventore, labore est ipsum. Accusamus animi excepturi mollitia. Nisi.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import SettingsCard from '../components/SettingsCard.vue';

export default {
  name: "Home",
  components: {
    SettingsCard,
  },
};
</script>
