<template>
  <div>
    <div id="firebaseui-auth-container" />
  </div>
</template>

<script lang="ts">
// import AuthMixinVue from '@/internal/mixins/AuthMixin.vue'
import firebaseui from 'firebaseui'
import firebase from '@/utilities/firebase.util'
import Vue from 'vue'
declare var firebaseui
export default Vue.extend({
  // mixins: [AuthMixinVue],
  created() {
    Vue.nextTick(() => {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', {
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // signInFlow: 'popup',
        // signInSuccessUrl: location.protocol + '//' + location.hostname + '/internal',
        signInSuccessUrl: '/internal',
      });
    })
  }
})
</script>
