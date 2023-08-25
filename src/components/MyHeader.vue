<template>
  <header class="header">
    <div class="container">
      <ul class="header__list">
        <li class="header__item">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="header__item">
          <router-link to="/basket"
            >Корзина
            <span
              v-text="
                getBasketProductsKeys.length
                  ? `(${getBasketProductsKeys.length})`
                  : '(0)'
              "
            ></span
          ></router-link>
        </li>
        <li class="header__item">
          <router-link to="/favorites"
            >Избранные товары
            <span
              v-text="
                getFavoritesProductsKeys.length
                  ? `(${getFavoritesProductsKeys.length})`
                  : '(0)'
              "
            ></span>
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  computed: {
    ...mapGetters(['getBasketProductsKeys', 'getFavoritesProductsKeys']),
  },
});
</script>

<style lang="scss" scoped>
.header {
  padding: 20px 0;
  background: #323232;
  &__list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  &__item {
    a {
      color: #fff;
    }
  }
}
</style>