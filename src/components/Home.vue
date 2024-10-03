<template>
  <div>
    
    <button @click="goToCategory('organic')">Organic Trash</button>
    <button @click="goToCategory('inorganic')">inorganic</button>
    <button @click="goToCategory('recyclable')">Recyclable Trash</button>
    <button @click="goToCategory('hazardous')">Hazardous Trash</button>
    <button @click="goToCategory('electronic')">electronic</button>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goToCategory(type) {
      this.$router.push({ name: 'TrashCategory', params: { type } });
    }
  }
};
</script>

<style scoped>
/* Thêm style nếu cần */
</style>
