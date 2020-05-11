<script lang="ts">
import Vue from 'vue'
import AuthService from '../../services/auth.service'
export default Vue.extend({
  methods: {
    async checkAuthentication() {
      if (await AuthService.isLoggedIn()) {
        return true
      }
      this.$router.push('/internal/authentication')
      return false
    }
  }
})
</script>
