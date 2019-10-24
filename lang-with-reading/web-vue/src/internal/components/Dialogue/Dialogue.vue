<template>
   <v-list two-line>
    <template v-for="(paragraph, index) in processedDialouge">
      <v-divider
        v-if="item.divider"
        :key="index"
        :inset="item.inset"
      ></v-divider>

      <v-list-tile
        :key="`paragraph-${index}`"
        avatar
        @click=""
      >
        <v-list-tile-avatar>
          <img :src="paragraph.speaker.image">
          hello
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="paragraph.content"></v-list-tile-title>
          <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
import { _ } from '@/utilities/lodash'
export default {
  name: 'Dialogue',
  props: {
    sourceDialogue: {
      type: Array,
      required: true,
    }
  },
  computed: {
    processedDialouge() {
      const processedDialouge = _.map(this.sourceDialogue.paragraphs, (paragraph, idx) => {
        const speaker = _.find(this.sourceDialogue.speakers, (speaker) => {
          return _.includes(speaker.paragraphs, idx)
        })
        return {
          content: paragraph,
          speaker,
        }
      })
    }
  },
}
</script>
