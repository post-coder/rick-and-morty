<script>
export default {
  name: "CharacterItem",

  data() {
    return {

    }
  },

  props: {

    character: Object,

  },
}
</script>

<template>
  <div class="character" :class="character.status == 'Alive' ? 'alive' : 'dead'" @click="$emit('clickRiquadro')">

    <img :src="character.image" alt="">
    <strong>
      {{ character.name }}
    </strong>
    <em>
      Specie: {{ character.species }}
    </em>
  </div>
</template>

<style lang="scss" scoped>
  .character {
    display: flex;
    flex-direction: column;

    margin-bottom: 2em;

    img {
      width: 200px;
      height: auto;
    }

    &.dead {
      opacity: .5;

      img {
        filter: grayscale(1);
      }
    }
  }
</style>