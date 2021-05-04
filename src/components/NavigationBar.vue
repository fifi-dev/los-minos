<template>
  <div class="navigation-bar">
      <input type="checkbox" id="check">
<label for="check" class="open" id="black"><i class="fas fa-bars"></i></label>
<nav>
    <label for="check" class="close"><i class="fas fa-times"></i></label>
    <ul>
      <h1>test</h1>
        <li><a href="/home">Accueil</a></li>
        <li><a href="/biographie">Biographie de Tassi Hangbe</a></li>
        <li><a href="/galerie">Galerie</a></li>
        <li><a href="/about">A Propos</a></li>
        <li><a href="/mentions">Mentions legales</a></li>
        <li><a href="/pre_quizz">Quizz</a></li>
        <li><a href="mailto:nullepart@mozilla.org"><i class="fas fa-envelope"></i></a></li>
    </ul>
</nav>
  </div>
</template>

<script>
export default {
    //
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
nav{
    position: fixed;
    z-index: 150;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#bb9a73;
    transition: all 0.5s ease ;
    clip-path: circle(0% at 30px 40px);
}
nav ul{
    list-style: none;
  
}
nav ul li a{
    text-decoration: none;
    text-align: center;
    display: block;
    font-size: 2rem;
    padding: 20px;
    color: black;
}
nav ul li a::after{
   content: "";
   display: block;
   width: 0;
   height: 2px;
   transition: 0.3s ease;
   background-color: black;
}
nav ul li a:hover::after{
    width: 100%;
 }
#check{
    display: none;
}

.open{
    font-size: 2rem;
    position: fixed;
    top: 10px;
    left: 10px;
    cursor: pointer;
    background-color: #bb9a73;
    padding: 12px;
    clip-path: circle();
    color: white;
}
.close{
    font-size: 2rem;
    position: fixed;
    top: 23px;
    left: 23px;
    cursor: pointer;
}

#black{
    background-color: rgb(0, 0, 0);
}

.header #check:checked ~ nav{
    clip-path: circle(100%);
}
</style>
