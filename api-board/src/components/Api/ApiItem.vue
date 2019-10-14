<template>
  <v-expansion-panel-content v-model="panel">
    <div slot="header">{{api.name}}</div>
      <v-container v-if="panel">
        <v-layout>
          <v-flex xs12>
            <plain-editor ref="editorCompo">

            </plain-editor>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs4>
            <v-btn @click="handleGetValue">Get Value</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
  </v-expansion-panel-content>
</template>

<script>
import { apiValidator } from '../../validators/api';
import PlainEditor from '../Editor/PlainEditor';

export default {
  name: 'ApiItem',
  props: {
    api: {
      type: Object,
      required: true,
      validator: apiValidator,
    },
  },
  components: {
    PlainEditor,
  },
  data() {
    return {
      code: JSON.stringify({ a: 'hello' }),
      panel: false,
    };
  },
  methods: {
    handleGetValue() {
      const value = this.$refs.editorCompo.editor.getValue();
      console.log('value: ', value);
    },
  },
};
</script>

<style>
</style>
