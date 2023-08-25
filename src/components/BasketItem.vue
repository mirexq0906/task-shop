<template>
  <div class="basket-item">
    <div class="basket-item__img">
      <my-image :srcImg="product.img" />
    </div>
    <div class="basket-item__info">
      <h3 class="basket-item__title">{{ product.title }}</h3>
      <div class="basket-item__prices">
        <span class="basket-item__new-price"
          >{{ (product.price * product.count).toLocaleString() }} ₽</span
        >
        <span class="basket-item__old-price">{{
          (product.oldPrice * product.count).toLocaleString()
        }}</span>
      </div>
    </div>
    <div class="basket-item__add">
      <button class="basket-item__minus" @click="decreaseCount(product.id)">
        <my-image :srcImg="'../assets/minus.svg'" />
      </button>
      <span class="basket-item__count">{{ product.count }}</span>
      <button class="basket-item__plus" @click="increaseCount(product.id)">
        <my-image :srcImg="'../assets/plus.svg'" />
      </button>
    </div>
    <div class="basket-item__controls">
      <button
        class="basket-item__delete btn"
        @click="addAndRemovebasket(product)"
      >
        Удалить
      </button>
      <button
        :class="{
          disabled: getFavoritesProductsKeys.includes(String(product.id)),
        }"
        class="basket-item__favorites btn"
        @click="addAndRemoveFavorites(product)"
      >
        <span
          v-text="
            getFavoritesProductsKeys.includes(String(product.id))
              ? 'Добавлен в избранное'
              : 'Добавить в избранное'
          "
        ></span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import { productInterface } from '../interfaces';
export default defineComponent({
  props: {
    product: {
      type: Object as () => productInterface,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters(['getFavoritesProductsKeys']),
  },
  methods: {
    ...mapMutations([
      'addAndRemovebasket',
      'addAndRemoveFavorites',
      'increaseCount',
      'decreaseCount',
    ]),
  },
});
</script>

<style scoped lang="scss">
.basket-item {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  gap: 15px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  @media (max-width: 575px) {
    grid-template-columns: 0.7fr 1fr;
  }
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 1/2;
    grid-column: 1/2;
    @media (max-width: 991px) {
      grid-row: 1/3;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-row: 1/2;
    grid-column: 2/3;
    @media (max-width: 991px) {
      grid-row: 1/2;
      align-self: flex-end;
    }
  }
  &__add {
    display: flex;
    gap: 15px;
    align-items: center;
    grid-row: 1/2;
    grid-column: 3/4;
    @media (max-width: 991px) {
      grid-column: 2/3;
      grid-row: 2/3;
      align-self: flex-start;
    }
  }
  &__controls {
    grid-row: 1/2;
    grid-column: 4/5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media (max-width: 991px) {
      grid-row: 1/3;
      grid-column: 3/4;
    }
    @media (max-width: 767px) {
      grid-row: 3/4;
      grid-column: 1/3;
    }
  }
  &__title {
    font-size: 25px;
    line-height: 120%;
    @media (max-width: 575px) {
      font-size: 20px;
    }
  }
  &__prices {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
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
    @media (max-width: 575px) {
      font-size: 15px;
    }
    text-decoration: line-through;
  }

  &__plus,
  &__minus {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f5f5f5;
    @media (max-width: 575px) {
      width: 30px;
      height: 30px;
    }
  }
  &__count {
    font-size: 30px;
    @media (max-width: 575px) {
      font-size: 25px;
    }
  }
  &__favorites {
    max-width: 300px;
    width: 100%;
    &.disabled {
      background: #323232;
    }
  }
  &__delete {
    max-width: 300px;
    width: 100%;
    background: #dc3545;
  }
}
</style>