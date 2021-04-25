<template>
  <div class="settings-card">
    <div class="panel">
               <div class="popup">
                   <h1>Quelle experience souhaitez-vous ?</h1>
                   <div class="info">Pour vous offrir la meilleure experience possible, merci de cocher les cases en bas avant de choisir un mode</div>
                   <div class="mode">
                       <div class="read">
                           <i class="fas fa-book"></i><br>
                           <button id="readMode" class="btn">Lire</button>
                       </div>
                       <div class="listen">
                           <i class="fas fa-assistive-listening-systems"></i> <br>
                           <button id="listenMode" class="btn">Ecouter</button>
                       </div>
                   </div>
                   <div class="settingsCheckbox">
                       <div class="bgmusic">
                           <input type="checkbox" id="bgMusic" name="bgMusic">
                           <label for="bgMusic">Musique de fond</label>
                           <audio id="myMusic" src="audio/backsong.mp3" loop=""></audio>
                       </div>
                       <div class="fullScreen">
                           <input type="checkbox" id="fullScreen" name="fullScreen">
                           <label for="fullScreen">Plein ecran</label>
                       </div>
                   </div>
               </div>
           </div>
           <div class="settings flex">
                       <div class="volume">
                           <input type="range" min="0" max="100" value="50" class="volume-range">
                           <div class="icon">
                               <i class="fa fa-volume-up icon-size" aria-hidden="true"></i>
                           </div>
                           <div class="bar-hoverbox">
                               <div class="bar">
                                   <div class="bar-fill"></div>
                               </div>
                           </div>
                       </div>
                       <div class="openPanel">
                       <i class="fas fa-cogs"></i>
                       </div>
                   </div>
  </div>
</template>

<script>
export default {
    //
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

.panel {
    height: 100vh;
    overflow: hidden;
    background: black;
}

.panel h1 {
    margin-top: 10%;
    font-size: 50px;
}

.fas {
    margin-bottom: 20px;
    font-size: 20px;
}

.panel .info {
    text-align-last: center;
    margin-top: 20px;
}

.settingsCheckbox {
    display: flex;
    width: 400px;
    margin: 0 auto;
    margin-top: 15%;
    justify-content: space-around;
}


.mode {
    display: flex;
    text-align: center;
    width: 600px;
    margin: 90px auto;
    justify-content: space-around;
}

.popup {
    height: 80vh;
    width: 80vw;
    margin: auto;
    margin-top: 10vh;
}

.btn {
    background-color: black;
    border: none;
    color: white;
    text-align: center;
    font-size: 30px;
    margin: 4px 2px;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
}

.btn:hover {
    border-bottom: 1px solid;
}

.settings {
    position: fixed;
    top: 30px;
    right: 100px;
}

.openPanel {
    margin-left: 20px;
}

.volume {
    display: flex;
    justify-content: center;
    align-items: center;
}

.volume input[type=range] {
    display: none;
  }

.bar-hoverbox {
    padding: 10px 15px;
    opacity: 0.7;
    transition: opacity .2s;
}

.bar-hoverbox :hover{
    opacity: 1;
        cursor: pointer;
}

 .bar {
    background: #999;
    height: 7px;
    width: 120px;
    border-radius: 15px;
    overflow: hidden;
     pointer-events: none;}

.bar-fill {
      background: #FFF;
      width: 0%;
      height: 100%;
      background-clip: border-box;
      pointer-events: none;
    }


</style>
