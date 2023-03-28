<script>
// importare il file dello store
import {store} from "../store.js";

export default {
  name: "AppNav",

  data() {
    return {

      // dobbiamo dirgli di utilizzare le variabili registrate nello store
      // l'unica cosa che dobbiamo fare è scrivere questa proprietà
      store,
      // finito *
    }
  },

  methods: {
    conta() {
      store.counter++;
    }
  },  
}
</script>
  
<template>
  <div>
    Ciao {{ store.userName }}, qui sotto hai la visualizzazione di {{ store.characters.length }} personaggi di Rick e Morty

    <hr>
  </div>
</template>

<style lang="scss" scoped>

</style>