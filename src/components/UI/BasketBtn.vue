<template>
  <button
    :class="{
      disabled: getBasketProductsKeys.includes(String(product.id)),
    }"
    class="basket-btn btn"
    @click.stop="addBasket(product)"
  >
    <span
      class="basket-btn__btn-text"
      v-text="
        getBasketProductsKeys.includes(String(product.id))
          ? 'Добавлен'
          : 'Добавить в корзину'
      "
    ></span>
    <span class="basket-btn__btn-icon">
      <my-image :srcImg="'basket.svg'" />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import { productInterface } from '../../interfaces';
export default defineComponent({
  props: {
    product: {
      type: Object as () => productInterface,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters(['getBasketProductsKeys']),
  },
  methods: {
    ...mapMutations(['addAndRemovebasket', 'openModal']),
    addBasket(product: productInterface) {
      if (!this.getBasketProductsKeys.includes(String(product.id))) {
        this.addAndRemovebasket(product);
        this.openModal({ active: true, name: 'basket' });
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.basket-btn {
  @media (max-width: 575px) {
    display: flex;
    justify-content: center;
    width: 55px;
  }
  &.disabled {
    background: #323232;
    cursor: auto;
  }
  &.disabled:hover {
    opacity: 1;
  }
  &__btn-text {
    @media (max-width: 575px) {
      display: none;
    }
  }
  &__btn-icon {
    display: none;
    @media (max-width: 575px) {
      display: block;
    }
  }
}
</style>