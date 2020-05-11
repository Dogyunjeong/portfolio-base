<template>
  <v-container>
    <AdminNav v-if="isLoggedIn"></AdminNav>
    <router-view></router-view>
  </v-container>
</template>

<script>
import AdminNav from './containers/AdminNav/AdminNav.vue';
import AuthMixin from './mixins/Auth.mixin.vue'
import AuthService from '../services/auth.service';
export default {
  mixins: [AuthMixin],
  components: { AdminNav },
  data() {
    return {
      isLoggedIn: false,
    }
  },
  async created() {
    this.isLoggedIn = await this.checkAuthentication()
  }
};
</script>
