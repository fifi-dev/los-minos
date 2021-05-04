import * as THREE from "three";
import * as OrbitControls from "three-orbitcontrols";
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			const canvas = document.querySelector('#canvasContainer');
			const renderer = new THREE.WebGLRenderer({canvas});
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
      const controls = new OrbitControls( camera, renderer.domElement );
	  controls.minDistance = 5;
        controls.maxDistance = 8;

			const geometry = new THREE.SphereGeometry(10, 10, 10);
			const material = new THREE.MeshNormalMaterial( { wireframe: true } );
			const sphere = new THREE.Mesh( geometry, material );
			scene.add( sphere );

      controls.update();

			camera.position.z = 5;

			const animate = function () {
				requestAnimationFrame( animate );

				sphere.rotation.x += 0.003;
				sphere.rotation.y += 0.003;
        controls.update();

				renderer.render( scene, camera );
			};

			animate();