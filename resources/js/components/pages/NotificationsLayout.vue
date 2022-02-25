<template>
    <div class="flex" width="100vw">
        <SideBar />
        <v-simple-table style="width: 80vw">
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Calories</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in desserts"
                        :key="item.name"
                        @click="notificationviewed"
                    >
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import SideBar from "../SideBar.vue";
export default {
    name: "NotifLayout",
    components: { SideBar },

    mounted() {
        this.getNotificaitons();
    },
    data() {
        return {
            desserts: [
                {
                    name: "Frozen Yogurt",
                    calories: 159,
                },
                {
                    name: "Ice cream sandwich",
                    calories: 237,
                },
                {
                    name: "Eclair",
                    calories: 262,
                },
                {
                    name: "Cupcake",
                    calories: 305,
                },
                {
                    name: "Gingerbread",
                    calories: 356,
                },
                {
                    name: "Jelly bean",
                    calories: 375,
                },
                {
                    name: "Lollipop",
                    calories: 392,
                },
                {
                    name: "Honeycomb",
                    calories: 408,
                },
                {
                    name: "Donut",
                    calories: 452,
                },
                {
                    name: "KitKat",
                    calories: 518,
                },
            ],
        };
    },

    methods: {
        getNotificaitons() {
            axios
                .get("/api/v1/notifications", {
                    headers: { Authorization: "Bearer " + this.token },
                })
                .then((response) => {
                    this.notifications = response.data.data;
                    // console.log(this.notifications);
                });
        },

        notificationViewed(id) {
            axios.put(`/api/v1/notification/${id}`, {
                headers: { Authorization: "Bearer " + this.token },
            });
        },
    },

    computed: {
        ...mapFields(["token", "notifications"]),
    },
};
</script>

<style></style>
