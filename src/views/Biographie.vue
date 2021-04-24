<template>
  <div class="bio">
      <p>boy</p>
  </div>
</template>

<style scoped>
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

#page-wrap {
  display: flex;
  margin: 100px 40px 0;
  height: 80vh;
  text-align: justify;
  position: relative;
}

.part:nth-child(2n + 1) p {
  width: 450px;
  text-align: center;
  position: absolute;
  bottom: 0;
  margin-left: 25px;
}

.part {
  width: 500px;
  scroll-snap-align: start;
  margin: 0 80px 0 10px;
  text-align: center;
}

p {
  font-size: 1.2em;
  margin: 0 0 15px 0;
  text-align: center;
}

#img1 {
  width: 240px;
  height: 280px;
  text-align: center;
}

.part img {
  width: 370px;
  height: 200px;
  margin-bottom: 40px;
  text-align: center;
}

#histoire {
  width: 100%;
  margin-top: 20px;
  text-align: center;
  position: fixed;
}

#histoire h1 {
  /* text-align: center; */
  /* left:635px ; */
  font-size: 2.2em;
  letter-spacing: -1px;
}
</style>