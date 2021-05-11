<template>
  <v-app>
    <v-app-bar app
      ><v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon
      ><v-toolbar-title> Email Service</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        label="Theme"
        persistent-hint
        class="mt-5"
      ></v-switch>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>jaanonim</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "compontents/Navigation.vue";
export default {
  name: "App",

  components: {
    Navigation,
  },

  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
