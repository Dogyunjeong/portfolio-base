<template>
  <v-layout>
    <v-flex xs-12>
      <v-text-field label="Title" v-model="dialogue.title" />
        <template
          v-for="(paragraph, paragraphIdx) in dialogue.paragraphs"
        >
          <v-text-field
            :key="
              `create-paragraph-${paragraphIdx}-dialogue=${dialogueIdx}`
            "
            :label="dialogue.lang"
            v-model="paragraph.content"
          ></v-text-field>
        </template>
      </template>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    dialogue: {
      type: Object,
    }
  }
})
</script>
