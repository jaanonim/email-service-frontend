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
        <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
      </v-col>
      <TimePicker></TimePicker>
      <ObjectPicker label="group" :items="groups"></ObjectPicker>
      <ObjectPicker label="message" :items="messages"></ObjectPicker>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "@/components/DataTable";
import TimePicker from "@/components/inputs/TimePicker";
import ObjectPicker from "@/components/inputs/ObjectPicker";
import getData from "@/api/main";

export default {
  name: "Home",
  components: {
    DataTable,
    TimePicker,
    ObjectPicker,
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
      { text: "Group", value: "group.name" },
      { text: "Message", value: "message.name" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    values: [],
    groups: [],
    messages: [],
  }),
  created: async function () {
    this.values = await getData(this.endpoints.tasks);
    this.groups = await getData(this.endpoints.groups);
    this.messages = await getData(this.endpoints.messages);
  },
  methods: {},
};
</script>
