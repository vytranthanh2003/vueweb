<template>
    <v-container>
      <v-form>
        <v-text-field label="Full Name" v-model="name" />
        <v-text-field label="Email" v-model="email" />
        <v-text-field label="Password" v-model="password" type="password" />
        <v-btn @click="register">Register</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
      };
    },
    methods: {
      register() {
        // Giả lập đăng ký thành công và chuyển đến trang đăng nhập
        alert('Đăng ký thành công!');
        this.$router.push({ name: 'Login' });
      },
    },
  };
  </script>
  