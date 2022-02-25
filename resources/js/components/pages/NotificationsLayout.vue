<template>
    <div class="flex" width="100vw">
        <SideBar />
        <v-simple-table style="width: 80vw">
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Type de Notificaiton</th>
                        <th class="text-left">Vue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in results" :key="item.id">
                        <td v-if="item.startupNotifiable_type">
                            {{
                                (item.startupNotifiable_type.includes("Task") &&
                                    "Nouvelle Tache") ||
                                (item.startupNotifiable_type.includes(
                                    "AskingDocs"
                                ) &&
                                    "Demande de Document")
                            }}
                        </td>
                        <td>
                            <button @click="notificationViewed(item.id)">
                                {{ item.viewed == 0 ? "Non vu" : "vu" }}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import SideBar from "../SideBar.vue";
import axios from "axios";
export default {
    name: "NotifLayout",
    components: { SideBar },

    mounted() {
        this.getNotificaitons();
    },
    data() {
        return {
            results: [],
        };
    },

    methods: {
        getNotificaitons() {
            axios
                .get("/api/v1/notifications", {
                    headers: { Authorization: "Bearer " + this.token },
                })
                .then((response) => {
                    console.log(response.data);
                    this.results = response.data.data;
                })
                .catch((error) => {
                    console.log(error.response);
                });
        },

        notificationViewed(id) {
            axios
                .put(`/api/v1/notification/${id}`,{}, {
                    headers: { Authorization: "Bearer " + this.token },
                })
                .then((response) => {
                    console.log(response.data);
                    //   this.results= response.data.data
                    this.getNotificaitons();
                })
                .catch((error) => {
                    console.log(error.response);
                });
        },
    },

    computed: {
        ...mapFields(["token", "notifications"]),
    },
};
</script>

<style></style>
