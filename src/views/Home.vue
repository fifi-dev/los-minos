<template>
  <div class="home">
    <settings-card></settings-card>
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
