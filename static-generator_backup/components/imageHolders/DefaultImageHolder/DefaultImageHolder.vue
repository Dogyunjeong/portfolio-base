<template>
  <v-row>
    <v-col>
      <img :src="img.src" :alt="img.alt" class="static--text-image" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    img: {
      type: Object,
      default() {
        return {
          src: require('~/assets/silver-tree-painting.webp'),
          alt: 'Sivler tree that khan drinked fountain in karakorum'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.static--text-image {
  width: 100%;
}
</style>
