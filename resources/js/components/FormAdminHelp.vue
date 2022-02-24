
<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-textarea v-model="message" :rules="messageRules" label="Message d'aide"></v-textarea>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
  </v-form>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    message: null,
    valid: true,
    messageRules: [
      v => !!v || 'Message requis.',
    ],
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
      let formData = new FormData();
      formData.append('message', this.message);
      axios.post('/api/v1/user-help', formData, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('tokenConnexion')
        }
      }).then(res => {
        res.status == 200 && this.$refs.form.reset()
      })
    },
  },
}
</script>