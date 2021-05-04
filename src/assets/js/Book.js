import * as THREE from "three";
const section = document.querySelector("section.book")
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
section.appendChild( renderer.domElement );

const ambient = new THREE.AmbientLight(0x222222)
scene.add(ambient)

    // Create ambient light and add to scene.
    var light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);

    // Create directional light and add to scene.
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);



const cubeMaterials = [
      new THREE.MeshBasicMaterial( { color: 0xffffff } ),//right
      new THREE.MeshBasicMaterial( { color: 0xFF5733 } ),//left
      new THREE.MeshBasicMaterial( { color: 0xffffff } ),//top
      new THREE.MeshBasicMaterial( { color: 0xffffff } ),// bottom
      new THREE.MeshBasicMaterial( { color: 0xFF5733 } ),//front
      new THREE.MeshBasicMaterial( { color: 0xFF5733 } )//back
];

let material = new THREE.MeshFaceMaterial(cubeMaterials)

const geometry = new THREE.BoxGeometry(3.5, 5, 0.5);
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 6;

let currentTimeline = window.pageYOffset / 2500
let aimTimeline = window.pageYOffset / 2500

function animate(){
    requestAnimationFrame( animate );
    currentTimeline += (aimTimeline - currentTimeline) * 0.1

    const rx = currentTimeline * -0.5 + 0.5
    const ry = (currentTimeline * 0.9 + 0.1) * Math.PI * 2

    cube.rotation.set(rx,ry,0)

    renderer.render( scene, camera );
}

animate();

window.addEventListener("scroll", function(){
    aimTimeline = window.pageYOffset / 2500
})