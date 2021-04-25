<template>
  <div>
      <div class="quizz">
        <section class="bloc_questions">
            <div id="quiz">
                    <h1>Quiz</h1>
                <div class="container">

                    <h2 id="question"></h2>

                    <h3 id="score"></h3>

                    <div class="choices">
                        <button id="guess0" class="btn">
                            <p id="choice0"></p>
                        </button>

                        <button id="guess1" class="btn">
                            <p id="choice1"></p>
                        </button>

                        <button id="guess2" class="btn">
                            <p id="choice2"></p>
                        </button>
                    </div>

                    <p id="progress"></p>



                    <div id="reco">
                        <a href="">Recommencer</a>
                    </div>
                </div>
            </div>



        </section>
  </div>
  </div>
</template>

// <script type="module">
// import * as THREE from "three";
// import * as OrbitControls from "three-orbitcontrols";
// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// const controls = new OrbitControls( camera, renderer.domElement );
// const geometry = new THREE.SphereGeometry(10, 10, 10);
// const material = new THREE.MeshNormalMaterial({ wireframe: true });
// const sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);

// camera.position.z = 5;
// controls.update();
// // camera.position.z = 70;

// const animate = function () {
//   requestAnimationFrame(animate);

//   sphere.rotation.x += 0.003;
//   sphere.rotation.y += 0.003;
//     controls.update();
//   renderer.render(scene, camera);
  
// };

// animate();
</script>


<style scoped>

.quizz{
    z-index: 1000;
}
/* width */
::-webkit-scrollbar {
    width: 20px;
    background: black;
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px;
    border-radius: 10px;
    background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #bb9a73;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #a58763;
}


article{
    display: flex;
    height: 722px;
    justify-items: center;
}


.bloc_questions{
    background-color: #000000;
    /* width: 80%; */
    display: grid;
    justify-items: center;
    text-align: center;
    min-height: 100vh;
    color: #dfe4ea;
}

#quiz h1 {
    text-transform: uppercase;
    font-size: 3rem;
  }

  #quiz h3 {
    color: #db5c17;
    font-size: 1.5rem;
    margin-bottom: 60px;
  }

  body .container{
      /* margin-top: 50px; */
      align-items: center;
      justify-items: center;
      width: 950px;
      height: 500px;
  }

  body .container .choices {
    display: flex;
    /* flex-wrap: wrap; */
    margin: 3rem auto 3rem;
    width: 800px;
  }
  body .container .choices button {
    width: 400px;
    height: 90px;
    border-radius: 15px;
    cursor: pointer;
    border: none;
    margin: 1rem;
    outline: none;
    background: #dfe4ea;
    user-select: none;
    font-weight: 600;
  }
  body .container .choices button:hover {
    background: #db5c17;
    transition: 0.5s;
  }
  body .container .choices button:active {
    transform: scale(0.9);
    transition: transform 0.1s;
  }
  body .container .choices button p {
    font-size: 1.1rem;
  }
  body #progress {
    font-size: 1.3rem;
    color: #db5c17;
    margin-bottom: 60px;
  }


  #reco a{
    font-size: 1.3rem;
    text-decoration: none;
    padding: 20px;
    border-radius: 15px;
    height: 170px;
    cursor: pointer;
    border: none;
    /* font-weight: 600;
    margin: 2rem auto 0; */
    color: #dfe4ea;
    background-color: #db5c17;
    
  }
  
  #reco a:hover{
    color: #db5c17;
    background-color: #dfe4ea;
  }
</style>