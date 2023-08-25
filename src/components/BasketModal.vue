<template>
  <div class="basket-modal">
    <h3 class="basket-modal__title">Товар добавлен в корзину</h3>
    <div class="basket-modal__btns">
      <button class="basket-modal__btn btn" @click="redirect">
        Перейти в корзину
      </button>
      <button class="basket-modal__btn btn" @click="closeModal">
        Продолжить покупки
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';
export default defineComponent({
  methods: {
    ...mapMutations(['closeModal']),
    redirect() {
      this.closeModal();
      this.$router.push({ path: '/basket' });
    },
  },
});
</script>

<style lang="scss" scoped>
.basket-modal {
  &__title {
    font-size: 30px;
    margin-bottom: 15px;
    text-align: center;
    @media (max-width: 575px) {
      font-size: 25px;
    }
  }
  &__btns {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
  &__btn:last-child {
    background: #f5f5f5;
    color: #323232;
  }
}
</style>