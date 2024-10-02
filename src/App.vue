<template>
  <v-app>
    <Header /> <!-- Đảm bảo chỉ có một Header -->
    <router-view />
    <Footer /> <!-- Đảm bảo chỉ có một Footer -->
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
