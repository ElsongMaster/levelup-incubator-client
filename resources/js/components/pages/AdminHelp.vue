<template>
  <div>
    <div class="flex">
      <SideBar />
      <!-- ? Content -->
      <v-container>
        <v-row>
          <v-col>
            <h1 class="text-h4">Demander de l'aide a un membre de Molengeek</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <!-- Body -->
            <FormAdminHelp/>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import SideBar from '../SideBar.vue'
import FormAdminHelp from '../FormAdminHelp.vue'
export default {
  name: "AdminHelp",
  data: () => ({
  }),
  components: {
    SideBar,
    FormAdminHelp
},
  methods: {

  },
  mounted () {
  }
};
</script>
<style></style>
