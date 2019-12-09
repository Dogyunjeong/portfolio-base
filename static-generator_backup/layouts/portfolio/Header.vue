<template>
<header>
  <v-navigation-drawer
    v-model="openNav"
    :mini-variant="miniVariant"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in navItems"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.label" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar :clipped-left="clipped" fixed app>
    <v-app-bar-nav-icon @click.stop="openNav = !openNav" />
    <v-toolbar-title v-text="title" />
  </v-app-bar>
</header>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export namespace NPortfolioHeader {
  export type NavItem = { icon: string, label: string, to: string }
  export type props = {
    title: string
    navItems: NavItem[]
  }
}
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    navItems: {
      type: Array as PropType<NPortfolioHeader.NavItem[]>,
      required: true,
    },
  },
  data() {
    return {
      openNav: false,
    }
  }
})
</script>