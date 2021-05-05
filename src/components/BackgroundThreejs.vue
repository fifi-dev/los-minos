<template>
  <div id="pageCanvas">
  <canvas id="canvasContainer"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Component',
  mounted() {
    import('../assets/js/ThreejsScene.js');
  }
};
</script>

<style scoped>
#pageCanvas{
  overflow: hidden;
}
canvas {
  width: 80vw;
  height: 2vh;
  top:0;
  left:0;
}
</style>