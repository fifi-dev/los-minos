<template>
    <div class="sixth-section">
         <!-- sixième section-->
     <article class="section" id="section6">
                   <p>En service un jour sur deux, les guerrières subissent un
                       entrainement physique quotidien très dur.</p>
                       <div class="listen" >
                       <!-- @click.prevent="playSound('@/assets/audio/section2.mp3')" -->
                       <button id="listenBtn2"><i class="fas fa-assistive-listening-systems"></i></button>
                    <audio id="audio2" src="@/assets/audio/section2.mp3"></audio>
                   </div>
                     <div class="carrousel">
	<div class="card" id="c0">h</div>
	<div class="card" id="c1"></div>
	<div class="card" id="c2"></div>
	<div class="card" id="c3"></div>
	<div class="card" id="c4"></div>
	<div class="card" id="c5"></div>
	<div class="card" id="c6"></div>
	<div class="card" id="c7"></div>
</div> 
                  <!--  <vue-carrousel></vue-carrousel> -->
                   <a class="button" id="btn6" href="#section7"><navigate-btn></navigate-btn ></a>
               </article>
</div>
</template>

<script>
import NavigateBtn from './NavigateBtn.vue';
export default {
    data() {
            return {
                BtnVisible: false,
                //showContent: false,
            }
        },
  components: {
    NavigateBtn
  },

};
</script>

<style scoped>

.section {
    height: 100vh;
    overflow: hidden;
     margin: 10vh auto;
    margin-bottom: 20vh;

}

.section {
    height: 100vh;
    overflow: hidden;
    margin-bottom: 20vh;

}

.section p {
    font-size: 25px;
    text-align: center;
    font-family: 'Indie Flower', cursive;
}
.swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    z-index: 100;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    background-color: black;
    border-radius: 8px;
    margin: 0 10px;
}


.picture {
    width: 320px;
    height: 320px;
    overflow: hidden;
}

.picture img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.detail {
    padding: 25px 20px;
    font-weight: 600;
    text-align: center;
}

.detail h3 {
    margin: 0;
    font-size: 18px;
}

.detail span {
    display: block;
    font-size: 16px;

}

#section6{
    display: none;
}

.detail a {
    text-decoration: none;
    color: #bb9a73;
}

/* */
.carrousel
{
	-webkit-perspective: 250px;
	-moz-perspective: 250px;
	width: 600px;
	height: 300px;
	top:100px;
	position: relative;
	margin: 0 auto;
}

@-webkit-keyframes carrousel
{
  from
  {
	  -webkit-transform: rotateY( 360deg ) translateZ( 100px ) rotateY( -360deg );
	  -moz-transform: rotateY( 360deg ) translateZ( 100px ) rotateY( -360deg );
	  z-index: 10;
	  opacity: 0.9
  }
  50%
  {
    z-index: -10;
  }
  to 
  {
	  -webkit-transform: rotateY( 0deg ) translateZ( 100px ) rotateY( 0deg );
    -moz-transform: rotateY( 0deg ) translateZ( 100px ) rotateY( 0deg );
	  z-index: 10;
	  opacity: 0.9
  }
}

@-moz-keyframes carrousel
{
  from
  {
	  -moz-transform: rotateY( 360deg ) translateZ( 100px ) rotateY( -360deg );
	  z-index: 10;
	  opacity: 0.9
  }
  50%
  {
    z-index: -10;
  }
  to
  {
	  -moz-transform: rotateY( 0deg ) translateZ( 100px ) rotateY( 0deg );
	  z-index: 10;
	  opacity: 0.9
  }
}

.card
{
	width: 100px;
	height: 150px;
	background-color:white;
  font-size: 40px;
	opacity: 0;
	position: absolute;
	top:80px;
	left:10;
	border: solid white 2px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0,0,0,.5);
  text-align: center;
  -webkit-animation-name: carrousel;
  -moz-animation-name: carrousel;
  -webkit-animation-duration: 8s;
  -moz-animation-duration: 8s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
 }

.card:hover
{
  border: solid #4466cc 3px;
  box-shadow: 0px 0px 10px #4466cc;
}

#c7
{
  background-image: url("../assets/img/fighting_ama.svg");
   background-repeat: no-repeat;
  background-size: cover;
}
#c6
{
  background-image: url("../assets/img/running_ama.svg");
   background-repeat: no-repeat;
  background-size: cover;
	-webkit-animation-delay: -1s;
	-moz-animation-delay: -1s;
}
#c5
{
  background-image: url("../assets/img/bomb.svg");
   background-repeat: no-repeat;
  background-size: contain;
	-webkit-animation-delay: -2s;
	-moz-animation-delay: -2s;
}
#c4
{
  background-image: url("../assets/img/fighting_ama.svg");
   background-repeat: no-repeat;
  background-size: cover;
	-webkit-animation-delay: -3s;
	-moz-animation-delay: -3s;
}
#c3
{
  background-image: url("../assets/img/fighting_ama.svg");
   background-repeat: no-repeat;
  background-size: cover;
	-webkit-animation-delay: -4s;
	-moz-animation-delay: -4s;
}
#c2
{
  background-image: url("../assets/img/fighting_ama.svg");
   background-repeat: no-repeat;
  background-size: cover;
	-webkit-animation-delay: -5s;
	-moz-animation-delay: -5s;
}
#c1
{
  background-image: url("../assets/img/fighting_ama.svg");
  background-repeat: no-repeat;
  background-size: cover;
	-webkit-animation-delay: -6s;
	-moz-animation-delay: -6s;
}
#c0
{
  background-image: url("../assets/img/fighting_ama.svg");
   background-repeat: no-repeat;
  background-size: cover;
	-webkit-animation-delay: -7s;
	-moz-animation-delay: -7s;
}


 /* */


</style>