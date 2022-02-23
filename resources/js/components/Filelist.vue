<template>
  <div class="flex">
    <SideBar />
    <v-container fluid style="width: 600px">
      <div class="mb-5">
        <h1>bezkoder.com</h1>
        <h2>Vuetify File Upload</h2>
      </div>
      <upload-files></upload-files>
    </v-container>
  </div>
</template>

<script>
import UploadFiles from "./UploadFiles.vue";
import SideBar from "./SideBar.vue";
export default {
  name: "Filelist",

  components: {
    UploadFiles,
    SideBar,
  },
};
</script>

<style></style>
