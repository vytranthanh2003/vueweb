<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <v-card>
            <v-card-title>Đăng Ký</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="register">
                <v-text-field v-model="email" label="Email" required></v-text-field>
                <v-text-field v-model="password" label="Mật khẩu" type="password" required></v-text-field>
                <v-text-field v-model="confirmPassword" label="Xác nhận mật khẩu" type="password" required></v-text-field>
                <v-btn type="submit" color="primary">Đăng ký</v-btn>
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
        confirmPassword: ''
      };
    },
    methods: {
      register() {
        // Logic đăng ký
        if (this.password === this.confirmPassword) {
          this.$router.push('/login');
        } else {
          alert("Mật khẩu không khớp!");
        }
      }
    }
  };
  </script>
  