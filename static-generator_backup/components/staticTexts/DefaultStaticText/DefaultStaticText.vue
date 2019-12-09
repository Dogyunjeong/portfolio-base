<template>
  <v-row justify="center">
    <v-col col="12" md="8" lg="6">
      <h1 v-if="header">{{ header }}</h1>
      <v-row>
        <v-col>
          <img :src="img.src" :alt="img.alt" class="static--text-image" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          {{ text }}
        </v-col>
      </v-row>
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
    },
    text: {
      type: String,
      default: `
                Silver tree guesthouse is located in karakorum and has hotel rooms and yurts for travellers.
                Karakorum is 2nd touristic city in Mongolia. It used to be a capital of Mongolia for blar blar
                blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar.
                blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar.
                blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar.
                blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar.
                blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar.
                blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar blar.
                `
    },
    header: {
      type: String,
      default: 'Silver Tree guest house'
    }
  }
}
</script>

<style lang="scss" scoped>
.static--text-image {
  width: 100%;
}
</style>
