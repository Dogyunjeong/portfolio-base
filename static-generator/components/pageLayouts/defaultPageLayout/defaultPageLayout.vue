<template>
  <v-app dark>
    <DefaultTitleBar />
    <v-content>
      <v-container>
        <v-row  justify="center" >
          <v-col
              col="12"
              md="8"
              lg="6"
          >
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; \{{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
}
</script>