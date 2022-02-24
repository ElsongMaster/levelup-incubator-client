<template>
    <div class="text-center">
        <v-menu top :close-on-click="closeOnClick">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    <!-- <notification-bell /> -->
                    <v-icon>mdi-bell</v-icon>
                </v-btn>
            </template>


            <v-list>
                <!-- <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item> -->
                <v-list-item v-for="item in tabs" :key="item">
                    <v-list-item-content>
                        <v-list-item-title>{{ item }}</v-list-item-title>
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
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>kjhkjkhkjhkjk</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
import NotificationBell from "vue-notification-bell";
export default {
    name: "Notifications",
    data: () => ({
        items: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me 2" },
        ],

        tabs: ["e", "f", "a", "b"],
        closeOnClick: true,
    }),
    components: {
        NotificationBell,
    },
};
</script>

<script>
export default {};
</script>

<style></style>
