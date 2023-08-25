<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <p class="footer__copyrigth">@copyrigth__shop</p>
        <span class="footer__info">footer</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style lang="scss" scoped>
.footer {
  padding: 20px 0;
  background: #323232;
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__copyrigth {
    color: #fff;
  }
  &__info {
    font-size: 22px;
    text-transform: uppercase;
    color: #fff;
  }
}
</style>