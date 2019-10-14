<template>
  <v-container>
    <v-layout row wrap>
      <v-expansion-panel>
        <api-item :api="{name: 'hello'}"></api-item>
      </v-expansion-panel>
    </v-layout>
  </v-container>
</template>

<script>
import ApiItem from '@/components/Api/ApiItem';

export default {
  name: 'ApiList',
  components: {
    ApiItem,
  },
};
</script>

<style>

</style>
