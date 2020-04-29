<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img :gradient="`to bottom, ${barColor}`" v-bind="props" />
    </template>

    <v-divider class="mb-1" />

    <v-list dense nav>
      <v-list-item link href="/internal">
        <v-list-item-avatar class="align-self-center" color="white" contain>
          <v-img
            src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"
            max-height="30"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="display-1" v-text="'test'" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    <v-list expand nav>
      <v-list-item v-for="item in items" :key="item.title" link :href="item.to">
        <v-list-item-icon>
          <!-- <v-icon v-text="'$dialogue'">{{ item.icon }}</v-icon> -->
          <v-icon >{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AdminNav',
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },
  data() { return ({
    drawer: true,
    items: [
      {
        // icon: 'dialogue',
        icon: '$addDialogue',
        title: 'Create Dialoge',
        to: '/internal/dialogue/create',
      },
      {
        icon: '$dialogue',
        title: 'Dialogues',
        to: '/internal/dialogue',
      },
    ],
  }) },
}
</script>

<style lang="sass">
</style>
