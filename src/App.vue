<script>
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';
import AppNav from './components/AppNav.vue';


export default {
    data() {
        return {};
    },
    components: { AppNav, AppMain, AppFooter }
}
</script>

<template>
  <!-- dashboard per le informazioni dell'utente -->
  
  <AppNav></AppNav>

  <AppMain></AppMain>


  <AppFooter></AppFooter>

</template>

<style scoped>

</style>
