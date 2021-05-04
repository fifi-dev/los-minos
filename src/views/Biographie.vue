<template>
<div class="biographie">
<div class="testbio">
    <section class="book">

    </section>
<section class="content">
<h1>Biographie de Tasi Hangbè</h1>
<ul>
    <li><img src="@/assets/img/hangbe.jpg" id="img1" alt="hangbè"></li>
    <li>Tasi Hangbè, fille de Houegbadja et sœur jumelle d'Akaba, avait un frère cadet nommé Dosu qui prit ensuite le nom d'Agadja qui est le nom traditionnel du frère cadet de jumeaux. Au 17ème siècle, à la mort de son père, Tasi Hangbè monte sur le trône et partage le pouvoir avec son jumeau, Akaba. Elle est réputée pour être « la reine sans pudeur », une libertine aux mœurs honteuses et dépravées car elle a toujours vécu dans la plus grande liberté. Celle-ci a décidé un jour de transformer le palais en salle d'amusement où toutes les beuveries sont permises.</li>
    <li>Plus tard, alors que le royaume est toujours en guerre contre ses ennemis jurés, « les Ouéménous », le roi Akaba est violemment emporté par la variole. 
Pour ne pas nuire au moral des troupes, un conseiller royal a l'idée de travestir Tasi Hangbè et lui demande de remplacer son jumeau, le roi, sur le champ de bataille. 
La reine accepte et plusieurs personnes font la remarque que dans les vêtements de son frère, elle lui ressemble comme deux gouttes d'eau.
Voulant honorer la mémoire du roi, la reine Tasi décide de continuer la mission et mène ses guerriers jusqu'à la victoire. En tuant le chef des Ouéménous, elle met fin à la rivalité des deux peuples ennemis et acquiert une immense notoriété du jour au lendemain. C’est à partir de ce moment que Tasi devient alors la véritable reine du Dahomey
</li>
    <li><img src="@/assets/img/Amazones_Bénin-2.jpg" alt="lesmino"></li>
    <li>Considérant les femmes tout aussi capables que les hommes, la reine fonde un régiment de combat exclusivement féminin, les Mino. Les Mino (désignée plus tard par les historiens européens sous le nom des Amazones du Dahomey), sont environs 4000 femmes entrainées à tuer sans sourciller. Choisies, dès l’adolescence, parmi les esclaves les plus robustes, elles sont formées à vénérer leur souveraine et à lui donner leur vie. Elles vivent dans les palais royaux pour prendre soin de leur reine et donc résignées à se marier.</li>
    <li>Malgré le fait que l’on n’ait rien à reprocher à la reine niveau stratégie, celle-ci est critiqué pour sa liberté sexuelle. Beaucoup de personnes, indignés d'être gouvernés par une reine débauchée, organisent en secret l'assassinat de son fils unique et le mettent en œuvre.</li>
    <li>Ce jour-là, Tasi Hangbè entre dans la salle des hommages, vêtue de ses pagnes en kita et elle s'installe sur le trône. On évoque sa bravoure au combat, sa grandeur de reine, ses guerrières robustes et sa douleur de mère ayant perdu son fils.
Tasi, dépassée par les évènements et par les décisions prises, dénoue doucement ses pagnes et se retrouve nue devant une assistance bouche-bée. L’une de ses suiveuses, lui présente un vase rempli d'eau. La reine y glisse sa main et se lave les parties intimes pour montrer son mépris envers leurs choix. Elle hurle sa haine, sa douleur et maudit l'assemblée ainsi que tout le peuple du Dahomey, lui souhaitant un malheur sans fin. 
Elle renonce ensuite à son titre de reine et sort de la pièce, à jamais.
</li>
    <li>Le roi Agadja, son successeur, orgueilleux et misogyne, a largement effacé la reine Tasi Hangbè de l'histoire officielle du Dahomey. Malgré le fait que l’armée des femmes soldats ait disparu à la chute du Royaume du Dahomey lors de la conquête coloniale française, au XIXe siècle, quelques personnes se souviennent encore du règne de Tasi Hangbè et de ses guerrières, qui ont fait trembler plusieurs ennemis.</li>

</ul>
</section>
</div>
</div>
</template>

<script>
export default {
  name: 'Component',
  mounted() {
    import('../assets/js/Book.js');
  }
};
</script>

<style scoped>

.testbio{
    min-height: calc(3000px + 100vh);
}
section.book{
    position: fixed;
    top: 0;
    left: 0;
}

section.content{
    width: 50%;
    max-width: 500px;
    padding: 32px;
    position: relative;
    z-index: 1;
}

section.content h1{
    margin-bottom: 32px;
}

section.content p{
    margin-bottom: 256px;
}

section.content li{
    margin-bottom: 32px;
    padding-left: 48px;
    position: relative;
}
</style>