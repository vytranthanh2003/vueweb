<template>
  <v-container>
    <Header />
    <v-row class="my-4">
      <v-col cols="12">
        <v-text-field
          v-model="searchQuery"
          label="Tìm kiếm loại rác..."
          clearable
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="category in filteredCategories"
        :key="category.id"
      >
        <v-card @click="goToCategory(category.type)" class="mx-auto">
          <v-img
            :src="require(`@/assets/${category.image}`)"
            alt="Category Image"
            height="200"
          ></v-img>
          <v-card-title class="text-center">{{ category.name }}</v-card-title>
          <v-card-subtitle class="text-center">
            {{ category.description }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      searchQuery: '',
      categories: [
        {
          id: 1,
          name: 'Rác Hữu Cơ',
          type: 'organic',
          image: 'organic.png',
          description: 'Rác có thể phân hủy như thực phẩm.',
        },
        {
          id: 2,
          name: 'Rác Vô Cơ',
          type: 'inorganic',
          image: 'inorganic.png',
          description: 'Rác không thể phân hủy như nhựa.',
        },
        {
          id: 3,
          name: 'Rác Tái Sử Dụng',
          type: 'recyclable',
          image: 'recyclable.png',
          description: 'Rác có thể tái chế.',
        },
        {
          id: 4,
          name: 'Rác Nguy Hại',
          type: 'hazardous',
          image: 'hazardous.png',
          description: 'Rác có thể gây hại cho sức khỏe.',
        },
        {
          id: 5,
          name: 'Rác Điện Tử',
          type: 'electronic',
          image: 'electronic.png',
          description: 'Rác từ thiết bị điện tử.',
        },
      ],
    };
  },
  computed: {
    filteredCategories() {
      return this.categories.filter((category) =>
        category.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    goToCategory(type) {
      this.$router.push({ name: 'TrashCategory', params: { type } });
    },
  },
};
</script>

<style scoped>
.v-card {
  background-color: #e3f2fd;
  color: #0d47a1;
  cursor: pointer;
}

.v-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
