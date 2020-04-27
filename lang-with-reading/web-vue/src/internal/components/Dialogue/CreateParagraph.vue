<template>
  <v-layout>
    <v-flex xs2>
      <v-avatar v-if="showSpeaker" color="grey lighten-4">
        <img :src="paragraph.speaker.image" alt="avatar" />
      </v-avatar>
    </v-flex>
    <v-flex xs9>
      <v-text-field
        :label="language"
        :placeholder="'Edit'"
        v-model="paragraph.content"
      ></v-text-field>
    </v-flex>
    <v-flex xs1>
      <v-icon v-if="showSpeaker" @click.stop="handleClickDelete">delete</v-icon>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      required: true,
    },
    paragraph: {
      type: Object,
      required: true,
    },
    showSpeaker: {
      type: Boolean,
      required: true,
    },
  },
  name: 'CreateParagraph',
  methods: {
    handleClickDelete() {
      this.$emit('click-delete')
    },
  },
}
</script>
