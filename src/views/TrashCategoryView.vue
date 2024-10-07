<template>
  <v-container>
    <Header />
    <!-- Tiêu đề của loại rác -->
    <v-row class="my-4">
      <v-col cols="12">
        <h1 class="text-center display-1">{{ categoryName }}</h1>
      </v-col>
    </v-row>
    
    <!-- Hình ảnh và mô tả loại rác -->
    <v-row>
      <v-col cols="12" md="6" class="text-center mx-auto">
        <v-img :src="categoryImage" alt="Category Image" height="400" class="rounded-lg"></v-img>
        <p class="mt-4 text-h6">{{ categoryDescription }}</p>
      </v-col>
    </v-row>

    <!-- Footer -->
    <Footer />
  </v-container>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'TrashCategoryView',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      categoryImage: '',
      categoryName: '',
      categoryDescription: '',
    };
  },
  created() {
    const type = this.$route.params.type; // Lấy loại rác từ URL params
    this.setCategoryDetails(type); // Gọi hàm để hiển thị thông tin dựa trên loại rác
  },
  methods: {
    // Thiết lập thông tin chi tiết về loại rác
    setCategoryDetails(type) {
      const categories = {
        organic: {
          image: require('@/assets/organic.png'),
          name: 'Rác Hữu Cơ',
          description:
            'Rác hữu cơ bao gồm thực phẩm thừa, vỏ trái cây, rau củ... Đây là loại rác dễ phân hủy và có thể tái chế thành phân bón.',
        },
        inorganic: {
          image: require('@/assets/inorganic.png'),
          name: 'Rác Vô Cơ',
          description:
            'Rác vô cơ bao gồm nhựa, kim loại, giấy không tái chế... Chúng thường không phân hủy và gây ô nhiễm môi trường.',
        },
        recyclable: {
          image: require('@/assets/recyclable.png'),
          name: 'Rác Tái Sử Dụng',
          description:
            'Rác tái sử dụng bao gồm giấy, bìa, chai nhựa... Đây là loại rác có thể được tái chế và sử dụng lại.',
        },
        hazardous: {
          image: require('@/assets/hazardous.png'),
          name: 'Rác Nguy Hại',
          description:
            'Rác nguy hại bao gồm pin, hóa chất độc hại... Chúng cần được xử lý cẩn thận để bảo vệ môi trường và sức khỏe con người.',
        },
        electronic: {
          image: require('@/assets/electronic.png'),
          name: 'Rác Điện Tử',
          description:
            'Rác điện tử bao gồm thiết bị điện tử hỏng, máy tính... Chúng có thể chứa các chất độc hại cần được xử lý đúng cách.',
        },
      };

      const category = categories[type];
      if (category) {
        this.categoryImage = category.image; // Cập nhật hình ảnh của loại rác
        this.categoryName = category.name; // Cập nhật tên của loại rác
        this.categoryDescription = category.description; // Cập nhật mô tả của loại rác
      } else {
        this.categoryName = 'Loại rác không tồn tại'; // Xử lý nếu loại rác không tồn tại
        this.categoryDescription = 'Chúng tôi không tìm thấy thông tin về loại rác này.';
      }
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.display-1 {
  color: #1976d2;
  font-weight: bold;
}

.text-h6 {
  color: #555;
}

.rounded-lg {
  border-radius: 15px;
}
</style>
