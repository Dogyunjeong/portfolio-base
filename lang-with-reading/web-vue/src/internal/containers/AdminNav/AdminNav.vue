<template>
  <v-card height="400" class="overflow-hidden">
    <v-navigation-drawer
      v-model="drawer"
      :expand-on-hover="true"
      :color="'primary'"
      absolute
      dark
    >
      <v-list dense nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
const testUser = {
  name: 'test internal user',
}
export default {
  data() {
    return {
      user: testUser,
      drawer: true,
      items: [
        { icon: '', title: 'Internal Home', link: '/internal' },
        {
          icon: '',
          title: 'Create Dialogue',
          link: '/internal/dialouge/create',
        },
      ],
      color: 'primary',
      colors: ['primary', 'blue', 'success', 'red', 'teal'],
    }
  },
}
</script>
