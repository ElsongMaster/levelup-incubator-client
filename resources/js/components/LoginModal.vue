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
                                    required
                                ></v-text-field>
                            </v-col>
                            <!-- Password -->
                            <v-col cols="12">
                                <v-text-field
                                    label="Password*"
                                    type="password"
                                    required
                                    v-model="password"
                                ></v-text-field>
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
// import { mapFields } from "vuex-map-fields";
// import axios from "axios";

export default {
    name: "LoginModal",
    data() {
        return {
            email: "",
            password: "",
            dialogLogin: "",
            userInfo: "",
            token: "",
            userID: "",

            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "multipart/form-data",
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
                        this.$router.push("/dashboard/profil");
                        localStorage.setItem("connected", "1");
                        localStorage.setItem(
                            "tokenConnexion",
                            response.data.token
                        );
                    }
                });
            // this.formData.append("email", this.email);
            // this.formData.append("password", this.password);

            // axios
            //   .post("http://127.0.0.1:8000/api/v1/login", this.formData, this.headers)
            //   .then((response) => {
            //     console.log(response.data);
            //     this.userInfo = response.data.user;
            //     this.token = response.data.token;
            //     this.userID = response.data.user.id;
            //   })
            //   .catch((error) => {
            //     console.log(error.response);
            //   });
        },
    },
    computed: {
        // ...mapFields([
        //     "email",
        //     "password",
        //     "dialogLogin",
        //     "userInfo",
        //     "token",
        //     "userID",
        // ]),
    },
};
</script>
