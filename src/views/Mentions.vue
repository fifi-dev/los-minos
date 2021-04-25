<template>
  <div class="mentions">

  <div>
      <header id="header" class="header none">
          <!-- nav-->
         
      </header>
      <h1>Mentions Légales</h1>

      <div class="LADIV">
          <div class="boite">
              <h2>1. Mention Légales</h2>
              <p>Le site Internet Lorem Ipsum est un service de:</p>
              <ul>
                  <li> AG STUDIO</li>
                  <li> Adresse URL du site: https://www.loremipsum.fr/</li>
                  <li> Email: 9412cad0.devinci.onmicrosoft.com@emea.teams.ms
                  </li>
              </ul>
          </div>
          <div class="boite">
              <h2>2. Propriété Intellectuel</h2>
              <p>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.</p>
              <p>Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de la propriété intellectuelle.</p>
              <p>Il est rappelé conformément à l’article L122-5 du Code de propriété intellectuelle que l’Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa source.</p>
          </div>
          <div class="boite">
              <h2>3. L'accès au site</h2>
              <p>Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.</p>
              <p>Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou serveur et sous réserve de toute interruption ou modification en cas de maintenance, n'engage pas la responsabilité de www.revelationschool.fr. Dans ces cas, l’Utilisateur accepte ainsi ne pas tenir rigueur à l’éditeur de toute interruption ou suspension de service, même sans préavis.</p>
          </div>
          <div class="boite">
              <h2>4. Crédits</h2>
              <p>Développement et design: BAZANA NTOMO Fideline, DENKEY DANDJEIN Dona, GAUTHE Eole, OUEDRAOGO Coralie </p>
          </div>

      </div>
      <div class="petitediv">
          <p>@ AG STUDIO - 2020</p>

      </div>
  </div>
  </div>
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

h1{
	text-align: center;
    padding-top: 50px;
}

.LADIV{
	padding: 50px;
}

.LADIV ul{
    /* margin-left: 25px; */
    margin-top: 10px;
    list-style: none;
}


.petitediv{
	margin-top: 20px;
}

.boite{
    margin-top: 15px;
    margin-bottom: 15px;
}

.boite h2{
    
   padding-bottom: 20px;
}
.boite{
    
    margin: 15px;
    padding: 15px auto;
}
.boite p{
    padding: 0px 20px;
}
.mentions{
    color: rgb(240, 236, 236);
}

</style>
