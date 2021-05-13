<template>
  <div>
    <DataTable
      title="LOl"
      :headers="headers"
      :values="values"
      :defaultItem="defaultItem"
      :editedItem="editedItem"
    >
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          v-model="editedItem.name"
          label="Dessert name"
        ></v-text-field>
      </v-col>
      <TimePicker></TimePicker>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          v-model="editedItem.calories"
          label="Calories"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          v-model="editedItem.carbs"
          label="Carbs (g)"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-text-field
          v-model="editedItem.protein"
          label="Protein (g)"
        ></v-text-field>
      </v-col>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "@/components/DataTable";
import TimePicker from "@/components/inputs/TimePicker";

export default {
  name: "Home",
  components: {
    DataTable,
    TimePicker,
  },
  data: () => ({
    editedItem: {},
    defaultItem: {
      name: "",
      status: 1,
      term: "2020-12-04",
      group: "",
      message: "",
    },
    headers: [
      { text: "Name", value: "name" },
      { text: "Status", value: "status" },
      { text: "Term", value: "term" },
      { text: "Group", value: "group" },
      { text: "Message", value: "message" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    values: [],
  }),
  created: function () {
    this.$axios
      .get(this.endpoints.tasks)
      .then(function (response) {
        console.log(response);
        if (response.status == 200) {
          console.log(response.data.results);
          this.values = response.data.results;
        } else {
          console.log("error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
