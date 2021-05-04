<template>
  <div class="Container galerie">
    <h1>Bienvenue dans la Galerie</h1>
    <div class="wrapper">
      <div class="box item-1">
        <img src="@/assets/img/1-amazones.jpg" alt="Photo de groupe d'amazones" />
        <div class="overlay ovrl-left ovrl-1"></div>
        <div class="overlay ovrl-right ovrl-1"></div>
        <div class="locker">
          <i class="arrow fa fa-arrows-h" aria-hidden="true"></i>
        </div>
      </div>
      <div class="box item-2">
        <img src="@/assets/img/68fcc8_ee8dc31a71794950a6126cbecd3c5365_mv2.jpg" alt="Photo de groupe d'amazones" />
        <div class="overlay ovrl-left ovrl-2"></div>
        <div class="overlay ovrl-right ovrl-2"></div>
        <div class="locker">
          <i class="arrow fa fa-arrows-h" aria-hidden="true"></i>
        </div>
      </div>
      <div class="box item-3">
        <img src="@/assets/img/8848bf_c9fcf906c5f4a32a0f53a0d404e98f59.jpg" alt="Amazones en entrainement" />
        <div class="overlay ovrl-left ovrl-3"></div>
        <div class="overlay ovrl-right ovrl-3"></div>
        <div class="locker">
          <i class="arrow fa fa-arrows-h" aria-hidden="true"></i>
        </div>
      </div>
      <div class="box item-4">
        <img src="@/assets/img/amazones-du-dahomey-vers-1890-620x400.jpg" alt="Amazones et leur Roi" />
        <div class="overlay ovrl-left ovrl-4"></div>
        <div class="overlay ovrl-right ovrl-4"></div>
        <div class="locker">
          <i class="arrow fa fa-arrows-h" aria-hidden="true"></i>
        </div>
      </div>
      <div class="box item-5">
        <img
          src="@/assets/img/behanzin.jpg"
          alt="Amazones et leur Roi"
        />
        <div class="overlay ovrl-left ovrl-5"></div>
        <div class="overlay ovrl-right ovrl-5"></div>
        <div class="locker">
          <i class="arrow fa fa-arrows-h" aria-hidden="true"></i>
        </div>
      </div>
      <div class="box item-6">
        <img src="@/assets/img/guerres-franco-dahomeenes.jpg" alt="Guerre entre les colons et les amazones" />
        <div class="overlay ovrl-left ovrl-6"></div>
        <div class="overlay ovrl-right ovrl-6"></div>
        <div class="locker">
          <i class="arrow fa fa-arrows-h" aria-hidden="true"></i>
        </div>
      </div>
      <div class="box item-7">
        <img src="@/assets/img/images (1).jpg" alt="Visage d'une amazone" />
        <div class="overlay ovrl-left ovrl-7"></div>
        <div class="overlay ovrl-right ovrl-7"></div>
        <div class="locker">
          <i class="arrow fa fa-arrows-h" aria-hidden="true"></i>
        </div>
      </div>
      <div class="box item-8">
        <img
          src="@/assets/img/Les_survivantes_des_Amazones_de_Behanzin_(Dahomey).jpg"
          alt="Survivantes des Amazones de Behanzin"
        />
        <div class="overlay ovrl-left ovrl-8"></div>
        <div class="overlay ovrl-right ovrl-8"></div>
        <div class="locker">
          <i class="arrow fa fa-arrows-h" aria-hidden="true"></i>
        </div>
      </div>
      <div class="box item-9">
        <img src="@/assets/img/les-amazones-du-dahomey-ban2.jpg" alt="Photo de groupe d'amazones" />
        <div class="overlay ovrl-left ovrl-9"></div>
        <div class="overlay ovrl-right ovrl-9"></div>
        <div class="locker">
          <i class="arrow fa fa-arrows-h" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    this.$nextTick(() => {
      $(".box").on("mousedown", function () {
        const gate = $(this).children("div");
        $(this).children(".locker").hide();
        for (var i = 0; i < gate.length; i++) {
          if ($(gate[i]).hasClass("ovrl-left")) {
            $(gate[i]).toggleClass("move-right");
          }
          if ($(gate[i]).hasClass("ovrl-right")) {
            $(gate[i]).toggleClass("move-left");
          }
        }
        
        $(this).off();
      });
    });
  },
};
</script>

<style scoped>
body {
    background-color: black;
    text-align: center;
    color: #fff;
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

h1 {
    font-family: 'Courgette', cursive;
    color: white;
}

.wrapper {
    /*grande div */
    /* display: -webkit-box;
    display: -ms-flexbox; */
    display: flex;
    /* -ms-flex-wrap: wrap; */
    flex-wrap: wrap;
    /* max-width: 90%; */
    margin: 20px auto 0;
    justify-content: space-between;
}

.box {
    /*image */
    -webkit-box-flex: 1;
    -ms-flex: 1 1 25%;
    flex: 1 1 25%;
    margin: 50px 10px 10px 25px;
    position: relative;
}

img {
    width: 280px;
    height: 200px;
    -webkit-box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.75);
}

.overlay {
    position: absolute;
    margin: 0;
    top: 0;
    height: 200px;
    z-index: 98;
    background: #ac4d20;
}

.ovrl-left {
    width: 160px;
    left: 50%;
    -webkit-box-shadow: 9px 0px 19px 0px rgba(105, 109, 122, 1);
    box-shadow: 9px 0px 19px 0px rgba(105, 109, 122, 1);
    /*ombre de droite*/
    border-left: 0.5px solid rgba(255, 255, 255, 0.8);
    /*trait milieu*/
}

.ovrl-right {
    width: 160px;
    right: 50%;
    -webkit-box-shadow: -9px 0px 19px 0px rgba(105, 109, 122, 1);
    box-shadow: -9px 0px 19px 0px rgba(105, 109, 122, 1);
    /*ombre de gauche*/
}

/*rond au milieu*/
.locker {
    position: absolute;
    height: 20px;
    width: 20px;
    background: black;
    top: 43%;
    left: 48%;
    border: 1px solid white;
    border-radius: 50%;
    z-index: 99;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

i.arrow {
    font-size: 0.8em;
    color: #808000;
}

/*ANIMATION*/
.move-right {
    -webkit-animation-name: myRight;
    animation-name: myRight;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

.move-left {
    -webkit-animation-name: myLeft;
    animation-name: myLeft;
    -webkit-animation-duration: 1.3s;
    animation-duration: 1.3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

@-webkit-keyframes myRight {
    0% {
        left: 50%;
        opacity: 1;
    }

    100% {
        left: 80%;
        opacity: 0;
        display: none;
    }
}

@keyframes myRight {
    0% {
        left: 50%;
        opacity: 1;
    }

    100% {
        left: 80%;
        opacity: 0;
        display: none;
    }
}

@-webkit-keyframes myLeft {
    0% {
        right: 50%;
        opacity: 1;
    }

    100% {
        right: 80%;
        opacity: 0;
        display: none;
    }
}

@keyframes myLeft {
    0% {
        right: 50%;
        opacity: 1;
    }

    100% {
        right: 80%;
        opacity: 0;
        display: none;
    }
}

@media(min-width: 768px) and (max-width: 1388px) {

  .wrapper{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;
        margin: 50px auto 0;
  }

}

@media(max-width: 767px) {

  .wrapper{
        flex-direction: column;
  }

}


</style>

