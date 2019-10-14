<template>
  <v-container>
    <v-layout>
      <div id="firbase-pre-built-in-ui"></div>
    </v-layout>
  </v-container>
</template>

<script>
import { FirebaseAuth } from '@/utilities/oauth';

export default {
  name: 'LoginHome',
  props: {
    onClose: {
      type: Function,
      requried: true,
    }
  },
  methods: {

  },
  mounted () {
    FirebaseAuth.start(this.$el, {
      signInSuccessWithAuthResult: () => {
        console.log('signInSuccessWithAuthResult');
        debugger
        this.props.onClose()
      },
      uiShown: () => {
        console.log('uiShown');
        debugger
      }
    })
  }
}
</script>

