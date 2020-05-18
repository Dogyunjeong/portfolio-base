<template>
  <v-layout class="px-2">
    <v-flex v-if="showSpeaker" xs2>
      <v-avatar color="grey lighten-4">
        <img :src="paragraph.speaker.image" alt="avatar" />
      </v-avatar>
    </v-flex>
    <v-flex xs10>
      <v-textarea
        no-resize
        :label="language"
        rows="2"
        v-model="paragraph.content"
      ></v-textarea>
    </v-flex>
    <v-flex v-if="showDelete" xs2>
      <v-icon @click.stop="handleClickDelete">delete</v-icon>
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
    showDelete: {
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
