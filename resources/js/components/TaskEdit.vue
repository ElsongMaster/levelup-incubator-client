<template>
    <div class="flex">
        <SideBar />
        <div v-if="currentTutorial" class="edit-form py-3">
            <p class="headline">Edit Tutorial</p>
            <v-form ref="form" lazy-validation>
                <v-text-field
                    v-model="currentTutorial.title"
                    :rules="[(v) => !!v || 'Title is required']"
                    label="Title"
                    required
                    disabled
                ></v-text-field>
                <v-text-field
                    v-model="currentTutorial.description"
                    :rules="[(v) => !!v || 'Description is required']"
                    label="Description"
                    required
                    disabled
                ></v-text-field>
                <v-text-field
                    v-model="currentTutorial.status"
                    :rules="[(v) => !!v || 'status is required']"
                    label="status"
                    required
                ></v-text-field>
                <v-divider class="my-5"></v-divider>
                <!-- <v-btn v-if="currentTutorial.status"
        @click="updatePublished(false)"
        color="primary" small class="mr-2"
      >
        UnPublish
      </v-btn>
      <v-btn v-else
        @click="updatePublished(true)"
        color="primary" small class="mr-2"
      >
        Publish
      </v-btn>
      <v-btn color="error" small class="mr-2" @click="deleteTutorial">
        Delete
      </v-btn> -->
                <v-btn
                    class="mx-auto"
                    color="success"
                    small
                    @click="updateTutorial"
                >
                    Update
                </v-btn>
            </v-form>
            <p class="mt-3">{{ message }}</p>
        </div>
    </div>
</template>
<script>
import TutorialDataService from "../services/TutorialDataService";
import { mapFields } from "vuex-map-fields";
import SideBar from "./SideBar.vue";
export default {
    name: "TaskEdit",
    components: { SideBar },
    data() {
        return {
            currentTutorial: null,
            message: "",
        };
    },
    methods: {
        getTutorial(id) {
            TutorialDataService.get(id, this.token)
                .then((response) => {
                    this.currentTutorial = response.data.data;
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        updatePublished(status) {
            var data = {
                id: this.currentTutorial.id,
                title: this.currentTutorial.title,
                description: this.currentTutorial.description,
                status: this.currentTutorial.status,
            };
            TutorialDataService.update(this.currentTutorial.id, data)
                .then((response) => {
                    this.currentTutorial.published = status;
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        updateTutorial() {
            TutorialDataService.update(this.token, this.currentTutorial)
                .then((response) => {
                    console.log(response.data);
                    this.message = "The tutorial was updated successfully!";
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        deleteTutorial() {
            TutorialDataService.delete(this.currentTutorial.id)
                .then((response) => {
                    console.log(response.data);
                    this.$router.push({ name: "tutorials" });
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        this.message = "";
        this.getTutorial(this.$route.params.id);
    },
    computed: {
        ...mapFields(["token"]),
    },
};
</script>
<style>
.edit-form {
    max-width: 400px;
    margin: 0 auto;
}
</style>
