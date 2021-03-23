<template>
  <div class="circle-button">
      <div class="outer">
          <div class="mask">
              <div class="ring">  </div>
          </div>
          <p class="hoverMe">Survolez</p>
          <p class="navigate">Entrer</p>
      </div>
  </div>
</template>

<script>
export default {
//
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.outer {
  width: 180px;
  height: 180px;
  margin: 10px auto;
  position:relative;
  border-radius: 110px;
  border: solid 1px #ffffff;
  cursor: pointer;
  animation: bounceIn 2s infinite;
}

.outer:hover{
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    -o-animation-play-state: paused;
    animation-play-state: paused;
}

.outer p{
  position: absolute;
  top: 70px;
  left: 35%;
  color: white;
}

.outer:hover .hoverMe{
    opacity: 0;
    transition: all 0.6s ease;
}


.outer .navigate{
  left: 40%;
  opacity: 0;
  transition: all 0.8s ease;
}

.outer:hover .navigate{
  opacity: 1;
  transition: all 0.8s ease;
}

.mask {
  position:absolute;
  top: 50px;
  width: 190px;
  height: 90px;
  overflow: hidden;
	/* Firefox */
	-moz-transition: all 0.6s ease;
	/* WebKit */
	-webkit-transition: all 0.6s ease;
	/* Opera */
	-o-transition: all 0.6s ease;
	/* Standard */
	transition: all 0.6s ease;
}
.outer:hover .mask {
transform:rotate(270deg);
-ms-transform:rotate(270deg); /* IE 9 */
-webkit-transform:rotate(270deg); 
height: 180px;
  top: -5px;
  left: -5px;
}
.ring {
  position: absolute;
  top:-50px;
  left: 0px;
  width: 165px;
  height: 165px;
  border: solid 8px #ffffff;
  border-radius: 120px;
  
	/* Firefox */
	-moz-transition: all 0.6s ease;
	/* WebKit */
	-webkit-transition: all 0.6s ease;
	/* Opera */
	-o-transition: all 0.6s ease;
	/* Standard */
	transition: all 0.6s ease;
}

.outer:hover .ring {
  top: 0px;
}



</style>
