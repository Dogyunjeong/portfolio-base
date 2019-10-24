<template>
  <v-layout>
    <v-flex xs3 md2>
      <div class="text-xs-center" v-if="showSpeaker">
        <v-chip close>
          <v-avatar>
            <img :src="paragraph.speaker.image" :alt="paragraph.speaker.name + '-avatar'" />
          </v-avatar>
          {{paragraph.speaker.name}}
        </v-chip>
      </div>
    </v-flex>
    <v-flex xs9 md10>
      <p class="paragraph-content">{{paragraph.content}}</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    showSpeaker: {
      type: Boolean,
      required: true
    },
    paragraph: {
      type: Object,
      required: true
    }
  },
  name: "Paragraph"
};
</script>

<style lang="postcss" scoped>
.paragraph-content {
  font-size: 1.3rem;
}
</style>
