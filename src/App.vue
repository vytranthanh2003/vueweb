<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Hệ Thống Phân Loại Rác Thông Minh</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app>
      <span>Smart Trash System</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

main {
  padding-top: 60px; /* Khoảng cách để không bị navbar che */
}

.v-footer {
  background-color: #0d47a1;
  color: white;
  text-align: center;
  padding: 20px;
}
</style>
