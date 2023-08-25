<template>
  <section class="basket">
    <div class="container">
      <h2 class="title">Корзина</h2>
      <div v-if="getBasketProductsValues.length" class="basket__list">
        <transition-group name="list">
          <basket-item
            v-for="item in getBasketProductsValues"
            :key="item.id"
            class="basket__item"
            :product="item"
          />
        </transition-group>
      </div>
      <form-basket v-if="getBasketProductsValues.length" class="basket__form" />
      <h3 v-else class="basket__empty">Добавьте товары в коризну</h3>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import BasketItem from '../components/BasketItem.vue';
import FormBasket from '../components/FormBasket.vue';
export default defineComponent({
  components: { BasketItem, FormBasket },
  computed: {
    ...mapGetters(['getBasketProductsValues']),
  },
});
</script>

<style lang="scss" scoped>
.basket {
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
  &__item:not(:last-child) {
    margin-bottom: 15px;
  }
  &__form {
    margin-top: 20px;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }
}
</style>