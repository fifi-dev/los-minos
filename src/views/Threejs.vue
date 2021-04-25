<template>
  <div id="rendu">

  <!-- <canvas id="renduback" width="300" height="200" style="border:1px solid purple;"></canvas> -->
  </div>
</template>

<script type="module">
import * as THREE from "three";
import * as OrbitControls from "three-orbitcontrols";
const scene = new THREE.Scene();

// const backgroundquizz = document.getElementById('renduback')
//   const fov = 75;
//   const aspect = 2;  // the canvas default
//   const near = 0.1;
//   const far = 5;
//   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.z = 2;
// backgroundquizz.width = 673;
// backgroundquizz.height = 472;
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth,window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();

// const renderer = new THREE.WebGLRenderer({backgroundquizz});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls( camera, renderer.domElement );
const geometry = new THREE.SphereGeometry(10, 10, 10);
const material = new THREE.MeshNormalMaterial({ wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// camera.position.z = 5;
controls.update();
camera.position.z = 70;

const animate = function () {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.003;
  sphere.rotation.y += 0.003;
    controls.update();
  renderer.render(scene, camera);
  
};

animate();
</script>


<style scoped>

canvas{
    z-index: -99;
}

</style>