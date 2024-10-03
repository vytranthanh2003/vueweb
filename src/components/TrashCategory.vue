<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Loại rác: {{ type }}</h1>
        <p>Thông tin chi tiết về rác loại {{ type }}.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    type() {
      return this.$route.params.type;
    }
  }
};
</script>
