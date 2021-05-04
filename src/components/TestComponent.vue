<template>
  <div>
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

canvas {
  width: 100vw;
  height: 100vh;
  top:0;
  left:0;
}
</style>