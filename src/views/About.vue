<template>
  <div class="about">
           <h1>A PROPOS</h1>
           <article id="Notre_projet">
               <h2>Notre projet</h2>
               <p>Nous sommes un groupe de quatres filles vivant en France mais venant de 4 pays différents d'Afrique.
                   Nous avons voulu lier notre projet à nos origines tout en respectant les consignes du thème imposé.
                   Ce dernier était la création d'un site immersif et interactif sur une personnalité,
                   une période de l'histoire de France ou une personne de notre choix.
                   Nous avons donc eu l'idée de mettre en avant un personnage féminin et africain pour notre site.
                   Ce sont les fameuses guerrières Amazones du Dahomey, actuellement, le Bénin.</p>
           </article>

           <article id="nous">
               <h2>Qui sommes nous</h2>
               <section id="descriptions">
                   <section>
                       <div class="description_perso">
                           <div class="img"><img src="@/assets/img/eole.png" alt=""></div>
                           <div class="nom_description">
                               <h3>Eole GAUTHE</h3>
                               <p>Eole est capvierdienne béninoise française . Née en France, elle vécu 18 ans au Bénin,
                                   le pays d’origine de son père. Entouré des personnes multiculturelle, elle a une grande ouverture d’esprit. Elle étudie le
                                   développement web afin de s’orienter en temps que chef de projet et pourquoi pas un jour créer sa propre boîte de digital</p>
                           </div>
                       </div>
                       <div class="description_perso">
                           <div class="img"><img src="@/assets/img/coco.png" alt=""></div>
                           <div class="nom_description">
                               <h3>Coralie OUEDRAOGO</h3>
                               <p>Coralie est Burkinabè mais a étudiée durant 7 années au Bénin. Elle a pu y bénéficier d'une formation militaire. Grace à cette formation,
                                   elle a pu découvrir de nouveaux horizons, apprendre à être autonôme et à vivre en groupe. Titulaire d'un BAC Littéraire,
                                   elle a décidé de suivre ses rêves. C'est ainsi qu'elle s'est écartée du domaine littéraire de même que
                                   celui militaire pour se spécialiser en dévellopement web avec pour ambition d'un jour avoir sa propre entreprise.</p>
                           </div>
                       </div>
                   </section>
                   <section>
                       <div class="description_perso">
                           <div class="img"><img src="@/assets/img/fifi.png" alt=""></div>
                           <div class="nom_description">
                               <h3>Fideline BAZANA</h3>
                               <p>Curieuse et prévoyante. Au collège, Fideline avait déjà fait une liste des métiers souhaitait faire de l’ingénieur aéronautique
                                   jusqu’à l’ingénieur cyber sécurité. Fideline savait déjà que l’ordinateur allait être son meilleur allier dans le futur.
                                   Ainsi en entrant à l’IIM, et malgré une grande hésitation avec l'axe création et du design,
                                   elle ouvrit la porte du développement web.</p>
                           </div>
                       </div>
                       <div class="description_perso">
                           <div class="img"><img src="@/assets/img/dona.png" alt=""></div>
                           <div class="nom_description">
                               <h3>Dona DENKEY DANDJEIN</h3>
                               <p>Dona est une jeune étudiante de 18 ans. Née en France, elle est d'origine Camerounaise et Togolaise.
                                   Dona cherche toujours à avoir plus de connaissances concernant l'Afrique et ses origines
                                   c'est pour cela qu'elle a accepté de se lancer dans un projet qui a pour sujet une histoire africaine. Observatrice,
                                   Rigoureuse, Curieuse,
                                   son objectif professionnel est de devenir développeuse web et/ou mobile de préférence dans le secteur de la santé.</p>
                           </div>
                       </div>
                   </section>
               </section>

           </article>
  </div>
</template>
<style scoped>

 h2{
    text-align: center;
}
h3{
    color: #bb9a73;
    margin-left: 20px;
}
h1{
    color: white;
    padding-top: 30px;
    text-decoration: underline white;
}
h1, #Notre_projet h2{
    padding-bottom: 15px;
}
#Notre_projet {
    height: 55vh;
    color: white;
}
.about{
   margin-left: 5%;
   margin-right: 5%;
   font-family: Poppins;
}
#nous{
    height: 115vh;
    padding-top: 50px;
}
#nous h2{
    margin-bottom: 25px;
    color: white;
}
#descriptions{
    width: 95%;
    display: flex;
}
.description_perso{
    padding-bottom: 50px;
    display: flex;
    margin-left: 30px;
    margin-top: 10px;
}
.description_perso p{
    color: white;
    height: 25vh;
    text-align: left;
    padding-left: 20px;
    margin-top: 10px;
}
.description_perso img{
  height: 20vh;
}
.nom_description{
    width: 75%;
    margin-left: 15px;
}
#black{
    background-color: black;
}
#Notre_projet{
    padding-top: 60px;
    text-align: center;
    height: 40vh;
}
#Notre_projet p{
    text-align: center;
    width: 50%;
    margin: 0 auto;
}
footer{
    text-align: center
}
.img{
    padding-top: 47px;
}
</style>