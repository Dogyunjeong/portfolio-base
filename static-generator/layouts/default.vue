<template>
  <v-app dark>
    <DefaultTitleBar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; \{{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import DefaultTitleBar from '~/components/titleBars/DefaultTitleBar/DefaultTitleBar.vue'

export default {
  components: {
    DefaultTitleBar,
  },
}
</script>
