<script>
import CharacterSearch from "./CharacterSearch.vue";

// importiamo lo store, dobbiamo indicare il path corretto
import {store} from "../store.js";

// RICORDIAMOCI che dobbiamo prima installare la dipendenza "axios" con npm install
// sintassi per importare axios, uguale per tutti
import axios from "axios";

// importiamo i componenti
import CharacterItem from "./CharacterItem.vue";

export default {
  name: "AppMain",

  data() {
    return {
      classColor: 'gray',

      // lo chiamo nei data
      store,
    }
  },

  components:  {
    CharacterItem,
    CharacterSearch
  },

  created() {
    // facciamo la chiamata API al caricamento della pagina

    axios.get(this.store.APIcall).then((res)=>{

      console.log(res.data.results);
      this.store.characters = res.data.results;

    });

  },  

  methods: {
    search() {
      let apiNewString = this.store.APIcall


      // https://rickandmortyapi.com/api/character?name=morty&status=alive

      // controlliamo se almeno un parametro di ricerca è stato settato
      if(this.store.characterName != "" || this.store.characterStatus != "") {
        
        // iniziamo a dirgli di preparare la query dei parametri
        apiNewString += "?";

        // se il nome è stato indicato
        if(this.store.characterName != "") {

          // inserisco la ricerca del nome
          apiNewString += `name=${this.store.characterName}`;

          // se ho inserito il nome E c'è anche la ricerca per stato
          if(this.store.characterStatus != "") {
            apiNewString += "&";
          }
        }

        // se è settato il valore del campo characterStatus
        if(this.store.characterStatus != "") {
          apiNewString += `status=${this.store.characterStatus}`;
        }
      }

      


      console.log(apiNewString);

      axios.get(apiNewString).then((res) => {
        
        console.log(res.data.results);
        this.store.characters = res.data.results;

      });
    },
  },


}
</script>
  
<template>
  <div >

    <CharacterSearch @searchCharacter="search()"></CharacterSearch>

    <hr>



    <div id="characters-list" :class="classColor">
      <!-- ci visualizzerò le schede dei personaggi -->
      <CharacterItem v-for="character in store.characters" :character="character"></CharacterItem>
    </div>

  </div>
</template>

<style lang="scss" scoped>

  #characters-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;

  }

</style>