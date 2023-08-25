<template>
  <div class="product" @click="$router.push(`/${product.id}`)">
    <div class="product__img">
      <my-image :srcImg="product.img" />
    </div>
    <h3 class="product__title">{{ product.title }}</h3>
    <div class="product__prices">
      <span class="product__new-price">
        {{ product.price.toLocaleString() }} ₽
      </span>
      <span class="product__old-price">
        {{ product.oldPrice.toLocaleString() }}</span
      >
    </div>
    <div class="product__row">
      <basket-btn class="product__btn" :product="product" />
      <favorites-btn class="product__favorites" :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { productInterface } from '../interfaces';
import BasketBtn from './UI/BasketBtn.vue';
import FavoritesBtn from './UI/FavoritesBtn.vue';
export default defineComponent({
  components: { FavoritesBtn, BasketBtn },
  props: {
    product: {
      type: Object as () => productInterface,
      default: () => ({}),
    },
  },
});
</script>

<style scoped lang="scss">
.product {
  display: block;
  max-width: 408px;
  border: 2px solid #dbdbdb;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 20px 20px;
  cursor: pointer;
  transition: all 300ms;
  @media (max-width: 575px) {
    padding: 5px 10px 10px;
  }
  &:hover {
    border-color: #fff;
    box-shadow: 6px 6px 15px 0 rgba(90, 90, 90, 0.1);
  }
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    @media (max-width: 575px) {
      margin-bottom: 10px;
    }
  }
  &__title {
    margin-bottom: 15px;
    font-size: 25px;
    line-height: 120%;
    @media (max-width: 575px) {
      margin-bottom: 10px;
      font-size: 20px;
    }
  }
  &__prices {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__new-price {
    font-size: 30px;
    font-weight: 700;
    @media (max-width: 575px) {
      font-size: 20px;
    }
  }
  &__old-price {
    font-size: 22px;
    text-decoration: line-through;
    @media (max-width: 575px) {
      font-size: 15px;
    }
  }
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    gap: 20px;
    @media (max-width: 575px) {
      margin-top: 10px;
    }
  }
}
</style>