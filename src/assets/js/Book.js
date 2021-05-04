import * as THREE from "three";
const section = document.querySelector("section.book")
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
section.appendChild( renderer.domElement );

const ambient = new THREE.AmbientLight(0x222222)
scene.add(ambient)

const light = new THREE.DirectionalLight(0xffffff)
light.position.set(0,0,6)
scene.add(light)



// const loader = new THREE.CubeTextureLoader();
// loader.setPath( '/img/book/' );

// const textureCube = loader.load( [
// 	'back.png', 'side.png',
// 	'bottom.png', 'sidee.png',
// 	'front.png', 'top.png'
// ] );

// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, envMap: textureCube } );

// const loader = new THREE.CubeTextureLoader()

// const urls = [
//     "back.png", "bottom.png", "front.png", "side.png", "sidee.png", "top.png"
// ]

// const materials = urls.map(url =>{
//     return new THREE.MeshLambertMaterial({
//         envMap: loader.load(url)
//     })
// })

// const cubeMaterials = [
//     new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load("../img/book/side.png"), side: THREE.DoubleSide}), //right
//     new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load("../img/book/sidee.png"), side: THREE.DoubleSide}), //left
//     new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load("../img/book/top.png"), side: THREE.DoubleSide}), //top
//     new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load("../img/book/bottom.png"), side: THREE.DoubleSide}), // bottom
//     new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load("../img/book/front.png"), side: THREE.DoubleSide}), //front
//     new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load("../img/book/back.png"), side: THREE.DoubleSide}) //back
// ];

const cubeMaterials = [
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load("../img/book/side.png"), side: THREE.DoubleSide } ),
      new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } ),
      new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } ),
      new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } ),
      new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } ),
      new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } )
];



// const loader = new THREE.TextureLoader()

// const urls = [
//     "../img/book/back.png", "../img/book/bottom.png", "../img/book/front.png", "../img/book/side.png", "../img/book/sidee.png", "../img/book/top.png"
// ]

// const materials = urls.map(url =>{
//     return new THREE.MeshLambertMaterial({
//         map: loader.load(url)
//     })
// })

let material = new THREE.MeshFaceMaterial(cubeMaterials)

const geometry = new THREE.BoxGeometry(3.5, 5, 0.5);
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 6;

let currentTimeline = window.pageYOffset / 3000
let aimTimeline = window.pageYOffset / 3000

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
    aimTimeline = window.pageYOffset / 3000
})