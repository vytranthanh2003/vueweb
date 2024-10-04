<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <v-card>
            <v-card-title>Đăng Nhập</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field v-model="email" label="Email" required></v-text-field>
                <v-text-field v-model="password" label="Mật khẩu" type="password" required></v-text-field>
                <v-btn type="submit" color="primary">Đăng nhập</v-btn>
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
        password: ''
      };
    },
    methods: {
      login() {
        // Logic đăng nhập (chưa có backend)
        if (this.email && this.password) {
          this.$router.push('/'); // Chuyển đến trang phân loại rác
        } else {
          alert("Vui lòng nhập đủ thông tin!");
        }
      }
    }
  };
  </script>
  