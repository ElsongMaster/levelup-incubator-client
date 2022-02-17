<template>
  <div>
    <div class="flex">
      <SideBar />
      <div class="flex justify-center">
        <!-- <v-card v-for="(value,name,i) in entInfo" :key="i">
                <v-card-title>{{value}}</v-card-title>
                    <v-card-text>bon </v-card-text>
        </v-card> -->
        <v-card elevation="24" height="50%" class="mt-10">
          <v-card-title>Nom de la Startup: </v-card-title>
          <v-card-text>Votre nom: </v-card-text>
          <v-card-text>Votre prénom:  </v-card-text>
          <v-card-text>email:  </v-card-text>
        </v-card>
      </div>
      <div class="mt-5">
      <!-- <EditProfileModal /> -->
      </div>
    </div>
  </div>
</template>
<script>
// import { mapFields } from "vuex-map-fields";
import SideBar from "../components/SideBar.vue";

// import EditProfileModal from '../components/EditProfileModal.vue'
export default {
  name: "Profile",
  components: {
    SideBar,
    //EditEntrepriseModal
  },
  mounted() {
    // this.$store.dispatch("getEntrepriseInfos");
    console.log(this.entInfo);
  },
  computed: {
    // ...mapFields(["entInfo"]),
  },
};
</script>
<style></style>