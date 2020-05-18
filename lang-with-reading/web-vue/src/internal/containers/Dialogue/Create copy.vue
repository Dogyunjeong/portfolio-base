<template>
  <v-container>
    <template v-if="dialogues && dialogues.length > 0">
      <v-layout justify-center>
        <v-flex xs-2 md1>File Path Name</v-flex>
        <v-flex xs-8 md-4>
          <v-text-field
            label="Name"
            v-model="dialogues[0].name"
            @change="handleChangeUuid"
          />
        </v-flex>
      </v-layout>
      <template v-for="(dialogue, dialogueIdx) in dialogues">
        <v-layout justify-center :key="`title-dialogue-${dialogueIdx}`">
          <v-flex xs-2 md1>{{ dialogue.lang }}</v-flex>
          <v-flex xs-8 md-4>
            <v-text-field label="Title" v-model="dialogue.title" />
          </v-flex>
        </v-layout>
      </template>

      <v-layout justify-center>
        <v-flex xs-12 md-6>
          <template
            v-for="(paragraph, paragraphIdx) in dialogues[0].paragraphs"
          >
            <template v-for="(dialogue, dialogueIdx) in dialogues">
              <CreateParagraph
                :key="
                  `create-paragraph-${paragraphIdx}-dialogue=${dialogueIdx}`
                "
                :language="dialogue.lang"
                :showSpeaker="dialogueIdx === 0"
                :paragraph="dialogue.paragraphs[paragraphIdx]"
                @click-delete="handleClickDeleteParagraph(paragraphIdx)"
              ></CreateParagraph>
            </template>
          </template>
        </v-flex>
      </v-layout>
    </template>

    <v-layout justify-center>
      <v-flex xs3>
        <SpeakerModifier
          :speakers="speakers"
          @select-speaker="handleSelectSpeaker"
        />
      </v-flex>
    </v-layout>

    <v-layout justify-center>
      <v-flex xs3>
        <v-btn @click="handleSaveDialogue">SAVE</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CreateParagraph from '@/internal/components/Dialogue/CreateParagraph.vue'
import SpeakerModifier from '@/internal/components/Dialogue/SpeakerModifier.vue'
import { _ } from '@/utilities/lodash'
import { dialogueHandler } from '@/services/dialogueHandler'
import axios from 'axios'

export default {
  name: 'CreateDialogue',
  components: {
    CreateParagraph,
    SpeakerModifier,
  },
  data() {
    //  dailogues: [ eachDialogue, ..., ..., ...]
    return {
      speakers: [
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
      dialogues: [
        {
          uuid: '',
          title: '',
          lang: 'kr',
          paragraphs: [],
        },
        {
          uuid: '',
          title: '',
          lang: 'en',
          paragraphs: [],
        },
      ],
    }
  },
  methods: {
    handleChangeUuid(uuid) {
      this.dialogues.forEach(dialogue => {
        dialogue.uuid = uuid
      })
    },
    handleClickDeleteParagraph(idx) {
      _.forEach(this.dialogues, dialouge => {
        dialouge.paragraphs.splice(idx, 1)
      })
    },
    handleSelectSpeaker(speaker) {
      _.forEach(this.dialogues, dialogue => {
        dialogue.paragraphs.push({ speaker, content: null })
      })
    },
    handleSaveDialogue() {
      this.dialogues.forEach(dialogue => {
        dialogueHandler.saveDialogue(dialogue)
      })
    },
  },
  mounted() {
    console.log('create mounted')
    axios.get('http://localhost:8020/health').then(response => {
      console.log('axios respoonse', response)
    })
  },
}
</script>
