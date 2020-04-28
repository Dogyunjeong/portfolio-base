<template>
  <v-container>
    <AdminNav></AdminNav>
    <router-view></router-view>
  </v-container>
</template>

<script>
import AdminNav from './containers/AdminNav/AdminNav.vue';
export default {
  components: { AdminNav },
};
</script>
