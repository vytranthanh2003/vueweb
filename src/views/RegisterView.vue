<template>
  <v-container class="register-container" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="green--text text-h5">Register</v-card-title>

          <v-card-text>
            <v-form v-model="valid" ref="form">
              <v-text-field
                v-model="email"
                label="Email"
                required
                :rules="emailRules"
                prepend-icon="mdi-email"
              ></v-text-field>

              <v-text-field
                v-model="password"
                label="Password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                prepend-icon="mdi-lock"
                required
                :rules="passwordRules"
              ></v-text-field>

              <v-btn color="success" @click="register">Register</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      valid: false,
      showPassword: false,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
      passwordRules: [v => !!v || 'Password is required'],
    };
  },
  methods: {
    register() {
      if (this.$refs.form.validate()) {
        // Handle successful registration logic here
        this.$router.push({ name: 'login' }); // Navigate to login after registration
      }
    },
  },
};
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
}
.v-card {
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.v-btn {
  width: 100%;
  margin-top: 20px;
}
</style>
