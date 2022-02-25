<template>
    <div class="text-center" v-if="notificationsUnviewed && notificationsUnviewed.length > 0">
        <v-menu top :close-on-click="closeOnClick">
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    @click="notificationsViewed"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >
                    <!-- <notification-bell /> -->

                    <v-badge
                        color="green"
                        :content="notificationsUnviewed.length"
                        ><v-icon>mdi-bell</v-icon></v-badge
                    >
                </v-btn>
            </template>

            <v-list>
                <!-- <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item> -->
                <v-list-item
                    v-for="(item, index) in notificationsUnviewed"
                    :key="index"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{
                                (item.startupNotifiable_type.includes("Task") &&
                                    "Nouvelle Tache") ||
                                (item.startupNotifiable_type.includes(
                                    "AskingDocs"
                                ) &&
                                    "Demande de Document")
                            }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <!-- <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>kjhkjkhkjhkjk</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>kjhkjkhkjhkjk</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>kjhkjkhkjhkjk</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>kjhkjkhkjhkjk</v-list-item-title>
                    </v-list-item-content>
                </v-list-item> -->
            </v-list>
        </v-menu>
    </div>
</template>

<script>
import NotificationBell from "vue-notification-bell";
import { mapFields } from "vuex-map-fields";
import axios from "axios";
export default {
    name: "Notifications",
    data: () => ({
        closeOnClick: true,
    }),
    components: {
        NotificationBell,
    },

    methods: {
        getNotificaitons() {
            axios
                .get("/api/v1/notifications", {
                    headers: { Authorization: "Bearer " + this.token },
                })
                .then((response) => {
                    this.notifications = response.data.data;
                });
        },

        notificationsViewed() {
            axios.get(`/api/v1/notifications/read`,  {
                headers: { Authorization: "Bearer " + this.token },
            })
            // .then( res =>{
            //     if ( res == 200) {

            //         this.notifications = res.data.data.notifications
            //     } 
            // } )
        },
    },

    mounted() {
        this.getNotificaitons();
    },
    computed: {
        ...mapFields(["token", "notifications"]),

        notificationsUnviewed() {
            return this.notifications.filter((elt) => elt.viewed != "1");
        },
    },
};
</script>

<style></style>
