<template>
  <div class="order-modal">
    <h3 class="order-modal__title">Заказ оформлен</h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.order-modal {
  &__title {
    font-size: 30px;
    margin-bottom: 15px;
    text-align: center;
    @media (max-width: 575px) {
      font-size: 25px;
    }
  }
}
</style>