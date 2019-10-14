<template>
  <v-layout>
    <v-flex xs3>
      Menu
    </v-flex>
    <v-flex xs6></v-flex>
    <v-flex xs3>
      <v-btn @click="handleClickLogin">Login</v-btn>
      <LoginContainer v-if="showLoginDialog" />
    </v-flex>
  </v-layout>
</template>

<script>
import LoginContainer from '@/container/Login/Login'

export default {
  name: 'Header',
  component: [
    LoginContainer,
  ],
  data() {
    return {
      showLoginDialog: false,
    }
  },
  methods: {
    handleClickLogin() {
      this.showLoginDialog = true
    }
  }
}
</script>
