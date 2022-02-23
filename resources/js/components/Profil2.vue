<template>
    <div class="flex">
        <SideBar />
        <v-container fluid>
            <v-layout column>
                <v-card>
                    <v-card-text>
                        <v-col class="mb-4">
                            <v-img
                                lazy-src="https://picsum.photos/id/11/10/6"
                                max-height="150"
                                max-width="250"
                                src="https://picsum.photos/id/11/500/300"
                                v-if="!showAvatarPicker"
                            ></v-img>
                            <v-row v-if="showAvatarPicker" no-gutters>
                                <v-col cols="8">
                                    <v-file-input
                                        show-size
                                        label="File input"
                                        @change="selectFile"
                                    ></v-file-input>
                                </v-col>
                            </v-row>
                            <!-- <v-avatar size="96" class="mr-4">
                            <img :src="'/avatars/avatar_' + (form.avatar.toLowerCase()) + '.png'" alt="Avatar">
                        </v-avatar> -->
                            <v-btn
                                class="mt-3"
                                v-if="!showAvatarPicker"
                                @click="openAvatarPicker"
                                >Change Logo</v-btn
                            >
                        </v-col>
                        <v-text-field
                            v-model="form.firstName"
                            label="FirstName"
                        ></v-text-field>
                        <v-text-field
                            v-model="form.lastName"
                            label="Last Name"
                        ></v-text-field>
                        <v-text-field
                            v-model="form.contactEmail"
                            label="Email Address"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            color="primary"
                            :loading="loading"
                            @click.native="update"
                        >
                            <!-- <v-icon left dark>check</v-icon> -->
                            Save Changes
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-layout>
            <!-- <avatar-picker
            v-model="showAvatarPicker"
            :current-avatar="form.avatar"
            @selected="selectAvatar"></avatar-picker> -->
        </v-container>
    </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
// import AvatarPicker from '~/components/AvatarPicker'
export default {
    name: "Profil2",
    pageTitle: "My Profile",
    components: { SideBar },
    mounted() {
        localStorage.setItem("email", this.form.contactEmail);
    },
    data() {
        return {
            formData: new FormData(),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "multipart/form-data",
            },
            currentFile: null,

            loading: false,
            form: {
                firstName: "John",
                lastName: "Doe",
                contactEmail: "userStartup@userstartup.com",
                lastemail: "userStartup@userstartup.com",

                // avatar: 'MALE_CAUCASIAN_BLOND_BEARD'
            },
            showAvatarPicker: false,
        };
    },
    methods: {
        selectFile(file) {
            // this.progress = 0;
            this.currentFile = file;
        },
        openAvatarPicker() {
            this.showAvatarPicker = true;
        },
        selectAvatar(avatar) {
            this.form.avatar = avatar;
        },

        update() {
            this.formData.append("firstname", this.form.firstName);
            this.formData.append("lastname", this.form.lastName);
            this.formData.append("email", this.form.contactEmail);
            this.formData.append("lastemail", this.form.lastemail);
            this.formData.append("file", this.currentFile);
            axios
                .get("http://127.0.0.1:8004/api/v1/login/", this.formData)
                .then((response) => {
                    console.log("login", response.status);

                    if (response.status == 200) {
                        this.$router.push("/dashboard/profil");
                    }
                });
        },
    },
};
</script>
