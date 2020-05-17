<script lang="ts">
import Vue from 'vue'
import AuthService from '../../services/auth.service'
export default Vue.extend({
  methods: {
    async checkAuthentication() {
      if (await AuthService.isLoggedIn()) {
        this.$store.commit('auth/signIn')
        return true
      }
      this.$router.push('/internal/authentication')
      return false
    },
    async signOut() {
      this.$store.commit('auth/signOut')
    }
  }
})
</script>
