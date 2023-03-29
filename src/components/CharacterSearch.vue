<script>
// importiamo lo store, dobbiamo indicare il path corretto
import {store} from "../store.js";


export default {
  name: "CharacterSearch",

  data() {
    return {
      // lo chiamo nei data
      store,
    }
  },


}
</script>
  
<template>
  <div id="search">

    <input v-model="store.characterName" type="text" placeholder="Scrivi il nome di un personaggio " @keyup.enter="$emit('searchCharacter')">
    
    <select name="status" id="status" v-model="store.characterParameters.status">
      <option value=""></option>
      <option value="alive">Vivo</option>
      <option value="dead">Morto</option>
      <option value="unknown">Sconosciuto</option>
    </select>

    <button   @click="$emit('searchCharacter')"  >Cerca</button>

  </div>
</template>

<style lang="scss" scoped>

#search {
  padding: 20px;

  input {
    width: 300px;
  }
}

</style>