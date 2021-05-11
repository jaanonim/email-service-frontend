<template>
  <v-navigation-drawer app v-model="drawer" left>
    <v-spacer></v-spacer>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Email Service </v-list-item-title>
        <v-list-item-subtitle> ##username## </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navigation",
  props: ["drawer"],

  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Tasks", icon: "mdi-clipboard-text" },
      { title: "Emails", icon: "mdi-email" },
      { title: "Groups", icon: "mdi-account-group" },
      { title: "Messages", icon: "mdi-message" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
