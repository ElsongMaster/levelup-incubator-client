<template>
    <div>
        <div v-if="currentFile">
            <div>
                <v-progress-linear
                    v-model="progress"
                    color="light-blue"
                    height="25"
                    reactive
                >
                    <strong>{{ progress }} %</strong>
                </v-progress-linear>
            </div>
        </div>
        <v-row no-gutters justify="center" align="center">
            <v-col>
                <v-text-field
                    v-model="name"
                    show-size
                    label="Name"
                    @change="selectFile"
                ></v-text-field>
            </v-col>
            <v-col cols="8">
                <v-file-input
                    show-size
                    label="File input"
                    @change="selectFile"
                ></v-file-input>
            </v-col>
            <v-col cols="4" class="pl-2">
                <v-btn color="success" dark small @click="upload">
                    Upload
                    <v-icon right dark>mdi-cloud-upload</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-alert v-if="message" border="left" color="blue-grey" dark>{{
            message
        }}</v-alert>
        <v-card class="mx-auto">
            <v-list class="bg-red">
                <v-subheader>List of Files</v-subheader>
                <v-list-item-group color="primary">
                    <v-list-item
                        v-for="(file, index) in fileInfos"
                        :key="index"
                    >
                        <v-list-item-content
                            @click="download(file.id, file.filepath)"
                        >
                            <p>{{ file.filepath }}</p>
                        </v-list-item-content>
                        <!-- <v-list-item-content>
                            <a :href="file.filepath">{{ file.filepath }}</a>
                        </v-list-item-content> -->
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
        <DocumentDemand class="mt-5" />

    <v-simple-table dark class="mt-4">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Titre
          </th>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Demande
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in askedDocs"
          :key="item.id"
        >
          <td>{{ item.document_title }}</td>
          <td>{{ item.document_description }}</td>
          <td>{{ item.helper_user_id ==null ? "Vous avez demandé" : "L'incubateur vous demande" }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </div>
</template>

<script>
import UploadService from "../services/UploadFilesService";
import DocumentDemand from "./modal/DocumentDemand.vue";
import axios from "axios";
import { mapFields } from "vuex-map-fields";

// import {saveAs} from 'file-saver';

export default {
    name: "upload-files",
    data() {
        return {
            currentFile: null,
            progress: 0,
            message: "",
            fileInfos: [],
            name: null,
        };
    },
    mounted() {
        let tokenReq = localStorage.getItem("tokenConnexion");
        UploadService.getFiles(tokenReq).then((response) => {
            console.log("getFiles", response.data);
            this.fileInfos = response.data.data;
        });
    },
    methods: {
        selectFile(file) {
            this.progress = 0;
            this.currentFile = file;
        },
        upload() {
            if (!this.currentFile) {
                this.message = "Please select a file!";
                return;
            }
            var tokenReq = localStorage.getItem("tokenConnexion");
            this.message = "";
            console.log("token", tokenReq);
            UploadService.upload(
                this.currentFile,
                this.name,
                tokenReq,
                (event) => {
                    this.progress = Math.round(
                        (100 * event.loaded) / event.total
                    );
                }
            )
                .then((response) => {
                    var tokenReq = localStorage.getItem("tokenConnexion");
                    this.message = response.data.message;
                    return UploadService.getFiles(tokenReq).then((response) => {
                        console.log("getFiles", response.data);
                        this.fileInfos = response.data.data;
                    });
                })
                // .then((files) => {
                //     this.fileInfos = files.data;
                // })
                .catch(() => {
                    this.progress = 0;
                    this.message = "Could not upload the file!";
                    this.currentFile = undefined;
                });
        },

        download(docId, fileName) {
            console.log("id de la doc", docId);
            axios
                .get(
                    `/api/v1/files/${docId}/download`,

                    {
                        responseType: "blob",
                        headers: {
                            Authorization:
                                "Bearer " +
                                localStorage.getItem("tokenConnexion"),
                        },
                    }
                )
                .then((response) => {
                    console.log(response.data);

                    let blob = new Blob([response.data], {
                        type: "application/pdf",
                    });
                    var docUrl = document.createElement("a");
                    docUrl.href = window.URL.createObjectURL(blob);
                    docUrl.setAttribute("download", fileName);
                    document.body.appendChild(docUrl);
                    docUrl.click();
                })
                .catch((error) => {
                    console.log(error.response);
                    // this.$toast.error("Tache non ajoutée")
                });
        },
    },
    components: { DocumentDemand },
    computed:{
        ...mapFields(['askedDocs'])

  }
};
</script>
<style></style>
