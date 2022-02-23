<template>
    <v-row justify="center">
        <v-dialog v-model="dialogLogin" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Login
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Login</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <!-- Email -->
                            <v-col cols="12">
                                <v-text-field
                                    v-model="email"
                                    label="Email*"
                                    :rules="rules.email"
                                    required
                                ></v-text-field>
                            </v-col>
                            <!-- Password -->
                            <v-col cols="12">
                                <v-text-field
                                    :append-icon="
                                        show4 ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    label="Password*"
                                    :type="show4 ? 'text' : 'password'"
                                    :rules="rules.email"
                                    required
                                    v-model="password"
                                    @click:append="show4 = !show4"
                                ></v-text-field>
                                <!-- <v-text-field
                                    :append-icon="
                                        show4 ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    :rules="[rules.email, rules.emailMatch]"
                                    :type="show4 ? 'text' : 'password'"
                                    name="input-10-2"
                                    label="Password*"
                                    @click:append="show4 = !show4"
                                    class="border-none"
                                ></v-text-field> -->
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialogLogin = false"
                    >
                        Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="login">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import { mapFields } from "vuex-map-fields";
// import axios from "axios";
// import {mapState} from 'vuex';

export default {
    name: "LoginModal",
    data() {
        return {
            // email: "",
            // password: "",
            // dialogLogin: "",
            // userInfo: "",
            // token: "",
            // userID: "",
            show4: false,

            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "multipart/form-data",
            },
            rules: {
                email: [
                    (val) => (val || "").length > 0 || "This field is required",
                ],
                emailMatch: () =>
                    `The email and password you entered don't match`,
            },
        };
    },
    mounted() {},
    methods: {
        login() {
            console.log("Save login");
            var formRequest = new FormData();
            formRequest.append("email", this.email);
            formRequest.append("password", this.password);
            axios
                .post("http://127.0.0.1:8004/api/v1/login/", formRequest)
                .then((response) => {
                    console.log("login", response.data.token);

                    if (response.status == 200) {
                        this.$store.dispatch("updateIsLoggin", true);
                        localStorage.setItem("connected", "1");
                        localStorage.setItem(
                            "tokenConnexion",
                            response.data.token
                        );
                        this.token = response.data.token;
                        this.getDataUser(this.token);
                        this.$router.push("/dashboard/profil").catch(() => {});
                    }
                });
        },

        getDataUser(token) {
            axios
                .get("http://127.0.0.1:8004/api/v1/startupuser/user", {
                    headers: { Authorization: "Bearer " + token },
                })
                .then((response) => {
                    console.log("user", response.data);
                    this.$store.dispatch("updateUserData", response.data.data);
                    this.userData = response.data.data;

                    // if (response.status == 200) {
                    //     this.$store.dispatch("updateIsLoggin", true);
                    //     localStorage.setItem("connected", "1");
                    //     localStorage.setItem(
                    //         "tokenConnexion",
                    //         response.data.token
                    //     );
                    //     this.token = response.data.token;
                    //     this.$router.push("/dashboard/profil").catch(() => {});
                    // }
                });
        },
    },
    computed: {
        // ...mapState([
        //   'isLoggin'
        // ]),
        ...mapFields([
            "email",
            "password",
            "dialogLogin",
            "userInfo",
            "token",
            "userData",
        ]),
    },
};
</script>

<style scoped>
.border-none:focus {
    border-color: none !important;
}
</style>
