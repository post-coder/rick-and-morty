<script>
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
      // lo chiamo nei data
      store,
    }
  },

  components:  {
    CharacterItem,
  },

  created() {
    // facciamo la chiamata API al caricamento della pagina

    axios.get('https://rickandmortyapi.com/api/character').then((res)=>{

      console.log(res.data.results);
      this.store.characters = res.data.results;

    });

  },  


}
</script>
  
<template>
  <div>

    <div id="characters-list">
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