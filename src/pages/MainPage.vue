<template>
  <section class="main">
    <div class="container">
      <sort-products
        v-model="sortedProducts"
        :products="getProducts"
        class="main__sort"
      />
      <product-list :products="sortedProducts" class="main__list" />
    </div>
  </section>
</template>

<script lang="ts">
import ProductList from '../components/ProductList.vue';
import SortProducts from '../components/SortProducts.vue';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
export default defineComponent({
  components: { SortProducts, ProductList },
  data() {
    return {
      sortedProducts: [],
    };
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  mounted() {
    this.sortedProducts = this.getProducts;
  },
});
</script>

<style scoped lang="scss">
.main {
  padding: 50px 0;
  flex-grow: 1;
  @media (max-width: 575px) {
    padding: 20px 0;
  }
  &__list {
    margin-top: 30px;
  }
}
</style>