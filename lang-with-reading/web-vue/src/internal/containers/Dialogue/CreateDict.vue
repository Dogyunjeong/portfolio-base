<template>
<div>
  <div
    v-for="(word) in words"
    :key="word"
  >
    <v-row>
      <v-col xs-12>
        {{word}}
      </v-col>
    </v-row>
    <v-template
      v-for="(dict, wordIdx) in dictMap[word]"
      :key="`${word}-dic-${wordIdx}`"
    >
      <v-row>
        <v-col xs-12 md-4>
          <v-text-field
            :label="sourceLang.toUpperCase()"
            v-model="dictMap[word].source"
          />
        </v-col>
        <v-col xs-12 md-8>
          <v-row>
            <v-col
              xs-12 md-4
              v-for="(meaning, meaningIdx) in dict.means"
              :key="`word-meaning-${meaningIdx}`"
            >
              <v-text-field
                :label="targetLang.toUpperCase()"
                v-model="dictMap[word][wordIdx].means[meaningIdx]"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row
        justify="flex-end"
      >
        <v-col
          xs-6
          md-4
        >
          <v-btn @click="handleAddSource(word)">Add source</v-btn>
        </v-col>
        <v-col
          xs-6
          md-4
        >
          <v-btn @click="handleAddMeaning(word, wordIdx)">Add meaning</v-btn>
        </v-col>
      </v-row>
    </v-template>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    paragraph: {
      type: String,
      required: true,
      default: ''
    },
    sourceLang: {
      type: String,
      required: true,
      default: 'kr'
    },
    targetLang: {
      type: String,
      required: true,
      default: 'en'
    }
  },
  data() {
    return {
      dictMap: {},
    }
  },
  computed: {
    words() {
      const sourceWords = this.props.paragraph.split(' ')
      const dictMap = {}
      sourceWords.forEach((word) => {
        dictMap[word] = [{ source: word, means: [] }]
      })
      this.dictMap = Vue.observable(dictMap)
      return sourceWords
    }
  },
  methods: {
    handleAddSource(word) {
      this.dictMap[word].push({ source: '', means: []})
    },
    handleAddMeaning(word, wordIdx) {
      this.dictMap[word][wordIdx].means.push('')
    },
  }
})
</script>