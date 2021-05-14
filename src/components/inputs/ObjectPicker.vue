<template>
  <v-col class="d-flex" cols="12" sm="6">
    <v-select :items="items" label="Standard" dense></v-select>
  </v-col>
</template>

<script>
export default {
  name: "ObjectPicker",
  props: ["items"],
};
</script>
