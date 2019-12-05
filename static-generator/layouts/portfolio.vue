<template>
  <v-app cyan>
    <PortfolioHeader
      :title="header.title"
      :navItems="header.navItems"
    />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="true" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import PortfolioHeader from './portfolio/Header.vue'
import template from '@/template'

export default Vue.extend({
  components: {
    PortfolioHeader,
  },
  data() {
    return {
      header: template.header
    }
  }
})
</script>