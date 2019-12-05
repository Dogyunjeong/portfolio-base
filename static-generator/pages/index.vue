<template>
  <v-row>
    This is home
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import template from '~/template'

export default {
  layout: template.layout,
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
