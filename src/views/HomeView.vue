<template>
  <v-container>
    <Header />
    
    <!-- Thanh tìm kiếm -->
    <v-row class="my-4">
      <v-col cols="12">
        <v-text-field
          v-model="searchQuery"
          label="Tìm kiếm loại rác..."
          clearable
        />
        <v-alert v-if="filteredCategories.length === 0" type="info" class="mt-2">
          Không tìm thấy kết quả nào phù hợp.
        </v-alert>
        <p v-else class="text-right">{{ filteredCategories.length }} kết quả tìm thấy</p>
      </v-col>
    </v-row>

    <!-- Chọn sắp xếp -->
    <v-row>
      <v-col cols="12">
        <v-select
          v-model="sortOption"
          :items="['Tên A-Z', 'Tên Z-A']"
          label="Sắp xếp"
        />
      </v-col>
    </v-row>

    <!-- Danh mục rác -->
    <v-row>
      <v-col
        cols="12"
        md="6"
        lg="4"
        v-for="category in sortedCategories"
        :key="category.id"
      >
        <v-card @click="goToCategory(category)" class="mx-auto">
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

    <!-- Dialog chi tiết loại rác -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">{{ selectedCategory.name }}</v-card-title>
        <v-card-subtitle>{{ selectedCategory.description }}</v-card-subtitle>
        <v-card-text>
          <v-img :src="require(`@/assets/${selectedCategory.image}`)" height="200"></v-img>
          <p><strong>Hướng dẫn:</strong> {{ selectedCategory.instructions }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="dialog = false">Đóng</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
      sortOption: 'Tên A-Z',
      dialog: false,
      selectedCategory: {},
      categories: [
        {
          id: 1,
          name: 'Rác Hữu Cơ',
          type: 'organic',
          image: 'organic.png',
          description: 'Rác có thể phân hủy như thực phẩm.',
          instructions: 'Bạn có thể bỏ các thức ăn thừa, vỏ trái cây, và lá cây vào thùng rác hữu cơ.'
        },
        {
          id: 2,
          name: 'Rác Vô Cơ',
          type: 'inorganic',
          image: 'inorganic.png',
          description: 'Rác không thể phân hủy như nhựa.',
          instructions: 'Các loại rác như túi nilon, vỏ chai nhựa, hộp nhựa không tái sử dụng được.'
        },
        {
          id: 3,
          name: 'Rác Tái Sử Dụng',
          type: 'recyclable',
          image: 'recyclable.png',
          description: 'Rác có thể tái chế.',
          instructions: 'Những loại rác như giấy, chai nhựa, lon nhôm có thể tái chế được.'
        },
        {
          id: 4,
          name: 'Rác Nguy Hại',
          type: 'hazardous',
          image: 'hazardous.png',
          description: 'Rác có thể gây hại cho sức khỏe.',
          instructions: 'Rác nguy hại bao gồm pin, hóa chất, thuốc trừ sâu, thuốc không sử dụng.'
        },
        {
          id: 5,
          name: 'Rác Điện Tử',
          type: 'electronic',
          image: 'electronic.png',
          description: 'Rác từ thiết bị điện tử.',
          instructions: 'Bao gồm các thiết bị điện tử hỏng như điện thoại, máy tính, và pin.'
        },
      ],
    };
  },
  computed: {
    filteredCategories() {
      return this.categories.filter((category) =>
        category.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        category.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    sortedCategories() {
      const sorted = [...this.filteredCategories];
      if (this.sortOption === 'Tên A-Z') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortOption === 'Tên Z-A') {
        sorted.sort((a, b) => b.name.localeCompare(a.name));
      }
      return sorted;
    },
  },
  methods: {
    goToCategory(category) {
      this.selectedCategory = category;
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
.v-card {
  background-color: #e3f2fd;
  color: #0d47a1;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.v-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.v-card-title {
  font-weight: bold;
  font-size: 1.2em;
}

.v-img {
  transition: opacity 0.3s ease;
}

.v-img:hover {
  opacity: 0.8;
}
</style>
