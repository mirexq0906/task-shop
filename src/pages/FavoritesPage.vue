<template>
  <section class="favorites">
    <div class="container">
      <h2 class="title">Избранные товары</h2>
      <product-list
        v-if="getFavoritesProductsValues.length"
        :products="getFavoritesProductsValues"
        class="favorites__list"
      />
      <h3 v-else class="favorites__empty">Добавьте товары в избранные</h3>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import ProductList from '../components/ProductList.vue';
export default defineComponent({
  components: { ProductList },
  computed: {
    ...mapGetters(['getFavoritesProductsValues']),
  },
});
</script>

<style scoped lang="scss">
.favorites {
  padding: 50px 0;
  flex-grow: 1;
  @media (max-width: 575px) {
    padding: 20px 0;
  }
  &__empty {
    text-align: center;
    font-size: 40px;
    @media (max-width: 575px) {
      font-size: 25px;
    }
  }
}
</style>