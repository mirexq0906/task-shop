<template>
  <section class="product-page">
    <div class="container">
      <h2 class="title">Карточка товара</h2>
      <div class="product-page__row">
        <div class="product-page__img">
          <my-image :srcImg="'1x4.png'" />
        </div>
        <div class="product-page__content">
          <div class="product-page__block-text">
            <h3 class="product-page__content-title">{{ product.title }}</h3>
            <p class="product-page__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptatibus hic facilis? Accusamus, impedit deleniti blanditiis
              aperiam est vero magnam possimus porro, laboriosam numquam
              accusantium illo iure architecto neque adipisci!
            </p>
            <p class="product-page__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptatibus hic facilis? Accusamus, impedit deleniti blanditiis
              aperiam est vero magnam possimus porro, laboriosam numquam
              accusantium illo iure architecto neque adipisci!
            </p>
          </div>
          <div class="product-page__prices">
            <span class="product-page__new-price">{{ product.price }} ₽</span>
            <span class="product-page__old-price">{{ product.oldPrice }}</span>
          </div>
          <div class="product-page__controls">
            <basket-btn class="product-page__btn-basket" :product="product" />
            <favorites-btn
              class="product-page__btn-favorites"
              :product="product"
              :text="true"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import BasketBtn from '../components/UI/BasketBtn.vue';
import FavoritesBtn from '../components/UI/FavoritesBtn.vue';
import { productInterface } from '../interfaces';
export default defineComponent({
  components: { FavoritesBtn, BasketBtn },
  data() {
    return {
      product: {} as productInterface,
    };
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  mounted() {
    for (let i = 0; i < this.getProducts.length; i++) {
      if (this.getProducts[i].id === Number(this.$route.params.id)) {
        this.product = this.getProducts[i];
      }
    }
  },
});
</script>

<style scoped lang="scss">
.product-page {
  padding: 50px 0;
  flex-grow: 1;
  @media (max-width: 575px) {
    padding: 20px 0;
  }
  &__row {
    display: flex;
    align-items: center;
    gap: 30px;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
  &__img {
    width: calc(50% - 15px);
    max-width: 584px;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  &__content {
    width: calc(50% - 15px);
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  &__block-text {
    margin-bottom: 20px;
  }
  &__content-title {
    margin-bottom: 20px;
    font-size: 25px;
  }
  &__desc {
    margin-top: 15px;
    line-height: 120%;
  }
  &__prices {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  &__new-price {
    font-size: 30px;
    font-weight: 700;
  }
  &__old-price {
    font-size: 22px;
    text-decoration: line-through;
  }
  &__controls {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
    @media (max-width: 767px) {
      justify-content: center;
    }
  }
  &__btn-basket {
    span {
      display: block !important;
    }
  }
}
</style>