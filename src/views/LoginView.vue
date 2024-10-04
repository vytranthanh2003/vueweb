<template>
    <v-container>
      <v-form>
        <v-text-field label="Email" v-model="email" />
        <v-text-field label="Password" v-model="password" type="password" />
        <v-btn @click="login">Login</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        if (this.email === 'test@example.com' && this.password === 'password') {
          // Giả lập đăng nhập thành công
          this.$router.push({ name: 'Home' });
        } else {
          alert('Sai thông tin đăng nhập!');
        }
      },
    },
  };
  </script>
  