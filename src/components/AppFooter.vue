<script>
import {store} from "../store.js";

export default {
  name: "AppFooter",

  data() {
    return {
      store,      
    }
  },
}
</script>
  
<template>
  <footer @click="store.counter+=10">
    <hr>
    Copyright 2023
  </footer>
</template>

<style lang="scss" scoped>
 footer {
  color: #777;
 }
</style>