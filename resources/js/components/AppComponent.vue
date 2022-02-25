<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="40"
                />

                <v-img
                    alt="Vuetify Name"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="100"
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                    width="100"
                />
            </div>
            <v-spacer></v-spacer>
            <Notifications  />
            <v-btn
                v-if="this.$store.state.isLoggin"
                succes
                class="mx-3"
                @click="logout"
                >LOGOUT</v-btn
            >

            <v-switch
                color="indigo"
                v-model="$vuetify.theme.dark"
                hide-details
            ></v-switch>

            <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
            </v-btn>-->
        </v-app-bar>

        <v-main :style="$route.fullPath == '/' && 'background-color:#F3F4F6;' ">
            <router-view :key="$route.fullPath" />
        </v-main>
    </v-app>
</template>

<script>
// import {mapState} from 'vuex';
import Notifications from "./Notifications.vue";
export default {
    name: "AppComponent",
    components: {
        Notifications,
    },
    data() {
        return {
            items: ["Foo", "Bar", "Fizz", "Buzz"],
        };
    },
    computed: {
        // ...mapState([
        //   'isLoggin'
        // ]),
    },

    methods: {
        logout () {
            let tokenReq = localStorage.getItem("tokenConnexion");
            console.log(tokenReq);
            axios
                .get("http://127.0.0.1:8004/api/v1/logout", {
                    headers: { Authorization: "Bearer " + tokenReq },
                })
                .then((response) => {
                    console.log("logout", response.status);

                    if (response.status == 200) {
                        localStorage.removeItem("tokenConnexion");
                        localStorage.setItem("connected", "0");
                        this.$store.dispatch("updateIsLoggin", false);
                        this.$router.push("/");
                    }
                });
        },
    },
};
</script>

<style>
.theme--dark input {
    background-color: #1e1e1e !important;
}

.width {
    width: 20px !important;
}
</style>
