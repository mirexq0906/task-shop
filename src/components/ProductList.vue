<template>
  <div class="list">
    <transition-group name="list">
      <product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
        class="list__item"
      />
    </transition-group>
  </div>
</template>

<script lang="ts">
import ProductItem from './ProductItem.vue';
import { defineComponent } from 'vue';
import { productInterface } from '../interfaces';
export default defineComponent({
  components: { ProductItem },
  props: {
    products: {
      type: Array as () => productInterface[],
      default: () => [],
    },
  },
});
</script>

<style scoped lang="scss">
.list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 575px) {
    gap: 10px;
  }
  &__item {
    width: calc(100% / 4 - 60px / 4);
    @media (max-width: 1199px) {
      width: calc(100% / 3 - 40px / 3);
    }
    @media (max-width: 767px) {
      width: calc(100% / 2 - 20px / 2);
    }
    @media (max-width: 575px) {
      width: calc(100% / 2 - 10px / 2);
    }
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 0.8s ease;
}
</style>