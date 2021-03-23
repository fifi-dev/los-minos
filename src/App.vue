<template>
  <div id="app">
    <div v-if="$route.meta.header === 1" id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <navigation-bar></navigation-bar>
    <div v-if="$route.meta.header === 1">
      <input type="checkbox" id="check">
      <label for="check" class="open" id="black"><i class="fas fa-bars"></i></label>
      <nav>
         <label for="check" class="close"><i class="fas fa-times"></i></label>
    <ul>
      <h1>test</h1>
        <li><router-link to="/home">Home</router-link></li>
        <li><a href="/biographie">Biographie de Tassi Hangbe</a></li>
        <li><router-link to="/galerie">Galerie</router-link> </li>
        <li><router-link to="/about">About</router-link></li>
        <li><a href="/mentions">Mentions legales</a></li>
        <li><a href="/quizz">Quizz</a></li>
        <li><a href="mailto:nullepart@mozilla.org"><i class="fas fa-envelope"></i></a></li>
    </ul>
      </nav>
   </div>
    <navigation-bar></navigation-bar>
    <router-view />
  </div>
</template>


<script>
import NavigationBar from './components/NavigationBar.vue'
export default {
  components: { NavigationBar },
 
}
</script>
<style>
@import './assets/css/animations.css';
@import './assets/css/fonts.css';


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


body{
  margin: 0;
    padding: 0;
    background-color: black;
    color: white;
}

img {
    max-width: 100%;
    height: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  z-index: 20;
}
/*

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*/

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
    background-color: white;
}

.header #check:checked ~ nav{
    clip-path: circle(100%);
}



</style>
