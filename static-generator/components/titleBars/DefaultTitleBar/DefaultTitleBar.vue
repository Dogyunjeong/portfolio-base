<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>{{title}}</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn
            v-for="(linkObj, idx) in links"
            :key="`${linkObj.name}-${idx}`"
            @click="navigateTo(linkObj.path)"
            text
        >
            {{linkObj.name}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Silver Tree Guest House'
        },
        links: {
            type: Array,
            default: () => {
                return [
                    { name: 'About', path: '/' },
                    { name: 'Guest House', path: '/accomodation' },
                    { name: 'Projects', path: '/project' },
                ]
            },
        }
    },
    methods: {
      navigateTo(path) {
        console.log('working: ', path)
        this.$router.push({ path })
      }
    }
}
</script>