<template>
  <v-container>
    <template v-if="dialogues && dialogues.length > 0">
      <v-layout justify-center>
        <v-flex xs-12 md-6>
          <template v-for="(paragraph, paragraphIdx) in dialogues[0].paragraphs">
            <template v-for="(dialogue, dialogueIdx) in dialogues">
              <Paragraph
                :showSpeaker="dialogueIdx === 0"
                :key="`paragraph-${paragraphIdx}:dialogue-${dialogue.lang}`"
                :paragraph="dialogue.paragraphs[paragraphIdx]"
              />
            </template>
          </template>
        </v-flex>
      </v-layout>
    </template>
  </v-container>
</template>

<script>
import Vue from "vue";
import Paragraph from "@/components/Dialogue/Paragraph";
import { dialogueHandler } from "@/services/dialogueHandler";

export default Vue.extend({
  name: "Dialogue",
  components: {
    Paragraph
  },
  data() {
    return {
      dialogues: []
    };
  },
  computed: {},
  methods: {
    getDialogue() {
      const langs = ["kr", "en"];
      const uuid = this.$route.params.uuid;
      const component = this;
      langs.forEach((lang, idx) => {
        try {
          dialogueHandler.loadDialogue(uuid, lang).then(dialogue => {
            component.dialogues.push(dialogue);
          });
        } catch (e) {
          console.log("error-fetching dialogue: ", e);
        }
      });
    }
  },
  created() {
    this.getDialogue();
  },
  mounted() {
    console.log("Dialogue is mounted");
  }
});
</script>
