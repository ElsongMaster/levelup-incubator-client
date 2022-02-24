<template>
    <v-card height="900" width="256">
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        <router-link to="/">Home</router-link>
                    </v-list-item-title>
                    <!-- <v-list-item-subtitle>
            
          </v-list-item-subtitle>-->
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <!-- Profile -->
                <v-list-item to="/dashboard/profil">
                    <v-list-item-icon>
                        <v-icon>mdi-information-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item-content>
                    <!-- Message -->
                </v-list-item>

                <v-list-item to="/dashboard/formcontact">
                    <v-list-item-icon>
                        <!-- <v-icon>mdi-android-messages</v-icon> -->
                        <v-icon>mdi-face-agent</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Service client</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!--  -->
                <!-- Goals-->
                <v-list-item to="/dashboard/goals">
                    <v-list-item-icon>
                        <v-icon>mdi-clipboard-list-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Goals</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!--  -->
                <!-- Taches-->
                <v-list-item to="/dashboard/tasks2">
                    <v-list-item-icon>
                        <v-icon>mdi-clipboard-edit-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Tâches</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!--  -->
                <!-- Files-->
                <v-list-item to="/dashboard/filelist">
                    <v-list-item-icon>
                        <v-icon>mdi-file-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Documents</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!--  -->
                <!-- Admin Help-->
                <v-list-item to="/dashboard/help">
                    <v-list-item-icon>
                        <v-icon>mdi-account-question-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Help</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!--  -->
                <!-- Notificaitons -->
                <v-list-item to="/dashboard/notifications">
                    <v-list-item-icon>
                        <v-icon>mdi-bell-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Notifications</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!--  -->
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    name: "SideBar",
    data() {
        return {
            right: null,
        };
    },
};
</script>
