<template>
    <!-- <v-row justify="center"> -->
    <v-dialog v-model="dialog" persistent max-width="600px" class="mt-5">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mt-5"
                >Demander un document</v-btn
            >
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Formulaire demande de document</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="document_title"
                                label="Titre du document*"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea
                                v-model="description"
                                class="p-2"
                                autocomplete="Description(optionnel)"
                                label="Description"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false"
                    >Close</v-btn
                >
                <v-btn
                    color="blue darken-1"
                    text
                    @click="
                        () => {
                            submit();
                            dialog = false;
                        }
                    "
                    >Submit</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
    <!-- </v-row> -->
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
    data: () => ({
        dialog: false,
        document_title: null,
        description: null,
    }),

    methods: {
        submit() {
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
        ...mapFields(["token"]),
    },
};
</script>
