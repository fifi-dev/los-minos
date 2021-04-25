<template>
  <div>
    <h1>coucou</h1>
  </div>
</template>

<script type="module">
import * as THREE from "three";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(10, 10, 10);
const material = new THREE.MeshNormalMaterial({ wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;
// camera.position.z = 70;

const animate = function () {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.003;
  sphere.rotation.y += 0.003;

  renderer.render(scene, camera);
};

animate();
</script>