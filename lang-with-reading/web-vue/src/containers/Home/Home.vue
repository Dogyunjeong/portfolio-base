<template>
  <v-container>
    <template v-for="category in categories">
      <v-layout :key="category.title" :fluid="true">
        <v-flex
          xs10
          offset-xs1
          v-for="(item, idx) in category.items"
          :key="`${category.title}-items-${idx}`"
        >
          <DialogueCard :dialogue="item" @clickDialogue="handleViewDialogue" />
        </v-flex>
      </v-layout>
    </template>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import DialogueCard from "@/components/Home/DialogueCard";
import { dialogueHandler } from "@/services/dialogueHandler";
import { _ } from "@/utilities/lodash";

export default Vue.extend({
  components: {
    DialogueCard
  },
  data() {
    return {
      categories: []
    };
  },
  methods: {
    loadCategory() {
      console.log("loadCategory is invoked");
      return dialogueHandler
        .loadCategories()
        .then(categories => (this.categories = categories));
    },
    handleViewDialogue(dialogue) {
      this.$router.push(`/dialogue/${dialogue.uuid}`);
    }
  },
  mounted() {
    this.loadCategory();
  }
});
</script>
