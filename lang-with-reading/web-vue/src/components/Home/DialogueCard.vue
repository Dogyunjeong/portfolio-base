<template>
  <v-card>
    <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ dialogue.title }}</h3>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange" @click.stop="handleViewDialogue">View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    dialogue: {}
  },
  methods: {
    handleViewDialogue() {
      this.$emit("clickDialogue", this.dialogue);
    }
  }
});
</script>

sty
