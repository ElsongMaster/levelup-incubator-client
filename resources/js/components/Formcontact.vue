<template>
  <div class="flex">
    <SideBar />
    <div class="container">
      <h2 class="text-center title">Contact US</h2>
      <hr />
      <v-card flat>
        <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Registration successful!</span>
          <v-icon dark> mdi-checkbox-marked-circle </v-icon>
        </v-snackbar>
        <v-form ref="form" @submit.prevent="submit">
          <v-container fluid>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.first"
                  :rules="rules.name"
                  color="purple darken-2"
                  label="Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.last"
                  :rules="rules.name"
                  color="blue darken-2"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" >
                <v-text-field
                  v-model="form.object"
                  :rules="rules.name"
                  color="blue darken-2"
                  label="Object"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="form.bio" color="teal">
                  <template v-slot:label>
                    <div>Message</div>
                  </template>
                </v-textarea>
              </v-col>
              <!-- <v-col
            cols="12"
            sm="6"
          >
            <v-select
              v-model="form.favoriteAnimal"
              :items="animals"
              :rules="rules.animal"
              color="pink"
              label="Favorite animal"
              required
            ></v-select>
          </v-col> -->

              <v-col cols="12">
                <v-checkbox v-model="form.terms" color="green">
                  <template v-slot:label>
                    <div @click.stop="">
                      Do you accept the
                      <a href="#" @click.prevent="terms = true">terms</a>
                      and
                      <a href="#" @click.prevent="conditions = true"
                        >conditions?</a
                      >
                    </div>
                  </template>
                </v-checkbox>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-btn text @click="resetForm"> Reset </v-btn>
            <v-spacer></v-spacer>
            <v-btn :disabled="!formIsValid" text color="primary" type="submit">
              Submit
            </v-btn>
          </v-card-actions>
        </v-form>
        <v-dialog v-model="terms" width="70%">
          <v-card>
            <v-card-title class="text-h6"> Terms </v-card-title>
            <v-card-text v-for="n in 5" :key="n">
              {{ content }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="purple" @click="terms = false"> Ok </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="conditions" width="70%">
          <v-card>
            <v-card-title class="text-h6"> Conditions </v-card-title>
            <v-card-text v-for="n in 5" :key="n">
              {{ content }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="purple" @click="conditions = false">
                Ok
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
  name: "Formcontact",
  components: {
    SideBar,
  },

  data() {
    const defaultForm = Object.freeze({
      first: "",
      last: "",
      object: "",
      bio: "",
      favoriteAnimal: "",
      age: null,
      terms: false,
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {

        name: [(val) => (val || "").length > 0 || "This field is required"],
      },

      conditions: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      snackbar: false,
      terms: false,
      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return this.form.first && this.form.last && this.form.object && this.form.terms;
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
      this.resetForm();
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
}
</style>
