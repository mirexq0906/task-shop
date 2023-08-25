<template>
  <my-header />
  <router-view></router-view>
  <my-modal>
    <basket-modal v-if="getCurrentModal === 'basket'" />
    <order-modal v-if="getCurrentModal === 'order'" />
  </my-modal>
  <my-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import BasketModal from './components/BasketModal.vue';
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import OrderModal from './components/OrderModal.vue';
import MyModal from './components/UI/MyModal.vue';
export default defineComponent({
  components: { MyHeader, MyFooter, MyModal, BasketModal, OrderModal },
  computed: {
    ...mapGetters(['getCurrentModal']),
  },
});
</script>

<style lang="scss">
@import './scss/normalize.scss';
@import './scss/style.scss';
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>