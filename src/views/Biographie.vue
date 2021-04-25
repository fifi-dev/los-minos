<template>
  <div class="bio">
    <div id="histoire">
      <h1>Voici son histoire :</h1>
    </div>
    <div id="page-wrap">
      <div class="part">
        <img src="@/assets/img/hangbe.jpg" id="img1" alt="hangbè">
        <p>Tasi Hangbè, fille de Houegbadja et sœur jumelle d'Akaba, avait un frère cadet nommé Dosu qui prit ensuite le nom d'Agadja qui est le nom traditionnel du frère cadet de jumeaux. Au 17ème siècle, à la mort de son père, Tasi Hangbè monte sur le trône et partage le pouvoir avec son jumeau, Akaba. Elle est réputée pour être « la reine sans pudeur », une libertine aux mœurs honteuses et dépravées car elle a toujours vécu dans la plus grande liberté. Celle-ci a décidé un jour de transformer le palais en salle d'amusement où toutes les beuveries sont permises.</p>
      </div>

      <div class="part">
        <p>Plus tard, alors que le royaume est toujours en guerre contre ses ennemis jurés, « les Ouéménous », le roi Akaba est violemment emporté par la variole. 
Pour ne pas nuire au moral des troupes, un conseiller royal a l'idée de travestir Tasi Hangbè et lui demande de remplacer son jumeau, le roi, sur le champ de bataille. 
La reine accepte et plusieurs personnes font la remarque que dans les vêtements de son frère, elle lui ressemble comme deux gouttes d'eau.
Voulant honorer la mémoire du roi, la reine Tasi décide de continuer la mission et mène ses guerriers jusqu'à la victoire. En tuant le chef des Ouéménous, elle met fin à la rivalité des deux peuples ennemis et acquiert une immense notoriété du jour au lendemain. C’est à partir de ce moment que Tasi devient alors la véritable reine du Dahomey
</p>
      </div>

      <div class="part">
        <img src="@/assets/img/Amazones_Bénin-2.jpg" alt="lesmino">
        <p>Considérant les femmes tout aussi capables que les hommes, la reine fonde un régiment de combat exclusivement féminin, les Mino. Les Mino (désignée plus tard par les historiens européens sous le nom des Amazones du Dahomey), sont environs 4000 femmes entrainées à tuer sans sourciller. Choisies, dès l’adolescence, parmi les esclaves les plus robustes, elles sont formées à vénérer leur souveraine et à lui donner leur vie. Elles vivent dans les palais royaux pour prendre soin de leur reine et donc résignées à se marier.</p>
      </div>

      <div class="part">
        <p>Malgré le fait que l’on n’ait rien à reprocher à la reine niveau stratégie, celle-ci est critiqué pour sa liberté sexuelle. Beaucoup de personnes, indignés d'être gouvernés par une reine débauchée, organisent en secret l'assassinat de son fils unique et le mettent en œuvre.</p>
      </div>

      <div class="part">
        <p>Ce jour-là, Tasi Hangbè entre dans la salle des hommages, vêtue de ses pagnes en kita et elle s'installe sur le trône. On évoque sa bravoure au combat, sa grandeur de reine, ses guerrières robustes et sa douleur de mère ayant perdu son fils.
Tasi, dépassée par les évènements et par les décisions prises, dénoue doucement ses pagnes et se retrouve nue devant une assistance bouche-bée. L’une de ses suiveuses, lui présente un vase rempli d'eau. La reine y glisse sa main et se lave les parties intimes pour montrer son mépris envers leurs choix. Elle hurle sa haine, sa douleur et maudit l'assemblée ainsi que tout le peuple du Dahomey, lui souhaitant un malheur sans fin. 
Elle renonce ensuite à son titre de reine et sort de la pièce, à jamais.
</p>
      </div>

      <div class="part">
        <p>Le roi Agadja, son successeur, orgueilleux et misogyne, a largement effacé la reine Tasi Hangbè de l'histoire officielle du Dahomey. Malgré le fait que l’armée des femmes soldats ait disparu à la chute du Royaume du Dahomey lors de la conquête coloniale française, au XIXe siècle, quelques personnes se souviennent encore du règne de Tasi Hangbè et de ses guerrières, qui ont fait trembler plusieurs ennemis.</p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.bio{
    margin: 0;
    padding: 0;
    background-color: black;
    color: #eee;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    display: grid;
    font-style: sans-serif;
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

#page-wrap{
    display: flex;
    margin: 100px 40px 0;
    height: 80vh;
    text-align: justify;
    position: relative;
    
}

.part:nth-child(2n+1) p {
  width: 450px;
  text-align: center;
  position: absolute;
  bottom: 0;
  margin-left: 25px;
}

  .part {
    width: 500px;
    scroll-snap-align: start;
    margin:0 80px 0 10px;
    text-align: center;
  }
  p {
    font-size: 1.2em;
    margin: 0 0 15px 0;
    text-align: center;
  }

  #img1{
    width: 240px;
    height: 280px;
    text-align: center;
}

  .part img{
      width: 370px;
      height: 200px;
      margin-bottom: 40px;
      text-align: center;
  }

  #histoire{
    width: 100%;
    margin-top: 20px;
    text-align: center;
    position: fixed;
  }

  #histoire h1{
    /* text-align: center; */
     /* left:635px ; */
  font-size: 2.2em;
  letter-spacing: -1px;
  }
</style>