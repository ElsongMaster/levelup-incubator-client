<template>
  <!-- <v-row justify="center"> -->
  <v-dialog v-model="dialog" persistent max-width="600px" class="mt-5">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mt-5">Demander un document</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Demande de document</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Titre*" v-model="ask.titre" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Description*" v-model="ask.description" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="sendDemand">Save</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- </v-row> -->
</template>

<script>
import axios from "axios";
import { mapFields } from "vuex-map-fields";

export default {
  data: () => ({
    dialog: false,
    ask: {
      titre: null,
      description: null,
    }
  }),
  mounted () {
    this.seeAskedDocs()
  },
  methods: {
    sendDemand () {
      this.dialog = false;
      axios
        .post(
          `/api/v1/asking-docs`,
          this.ask,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("tokenConnexion"),
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.seeAskedDocs()

        })
        .catch((error) => {
          console.log(error.response);

        });
    },

    seeAskedDocs () {
      axios
        .get(
          `/api/v1/asking-docs`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("tokenConnexion"),
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.askedDocs = response.data.data

        })
        .catch((error) => {
          console.log(error.response);

        });
    }
  },
  methods: {
    submit () {
      axios
        .post(
          "http://127.0.0.1:8004/api/v1/files/ask",
          {
            document_title: this.document_title,
            description: this.description,
          },
          { headers: { Authorization: "Bearer " + this.token } }
        )
        .then((response) => {
          console.log("demande de doc", response);
        });
    },
  },
  computed: {
    // ...mapState([
    //   'isLoggin'
    // ]),
    ...mapFields(["token","askedDocs"]),
  },
};
</script>
