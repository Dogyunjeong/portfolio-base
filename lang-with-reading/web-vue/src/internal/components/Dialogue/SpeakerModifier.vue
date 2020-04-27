<template>
  <v-layout>
    <v-dialog v-model="isOpenDialog" persistent max-width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Choose speakers</v-btn>
      </template>
      <template>
        <v-list>
          <template v-for="(speaker, index) in speakers">
            <v-divider
              v-if="index !== speakers.length - 1 && index % 2 === 1"
              :key="`divider-before-${index}`"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              :key="`speaker-${index}`"
              avatar
              :ripple="true"
              @click="handleClickSpeaker(speaker)"
            >
              <v-list-tile-avatar>
                <img :src="speaker.image" />
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="speaker.name"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
        <v-btn color="red lighten-2" flat @click="isOpenDialog = false">Cancel</v-btn>
      </template>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'SpeakerModifier',
  props: {
    speakers: {
      type: Array,
      required: true,
      default: () => [
        {
          uuid: 'tony-speaker',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DraIw5I3K2b3OfQ8W1dGfhn6ZPyA3NFJDagYTTDDc6x59fS8cg',
          name: 'Tony',
        },
        {
          uuid: 'maya-speaker',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIoV0Ge1vz7k5V3Oj4UXM315tnCEmOXzvRl8cZ4riischjk5a',
          name: 'Maya',
        },
      ],
    },
  },
  data() {
    return {
      isOpenDialog: false,
    }
  },
  methods: {
    handleAddSpeaker() {
      this.isOpenDialog = true
    },
    handleClickSpeaker(speaker) {
      this.isOpenDialog = false
      this.$emit('select-speaker', speaker)
    },
  },
}
</script>

