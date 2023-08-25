<template>
  <div class="sort">
    <div class="sort__search">
      <input
        v-model="search"
        class="input"
        type="text"
        placeholder="Поиск..."
      />
    </div>
    <my-dropdown v-model="sortActive" :sorts="sorts" class="sort__dropdown" />
  </div>
</template>

<script lang="ts">
import MyDropdown from './UI/MyDropdown.vue';
import { defineComponent } from 'vue';
import { productInterface, sortInterface } from '../interfaces';

export default defineComponent({
  components: { MyDropdown },
  props: {
    products: {
      type: Array as () => productInterface[],
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      sorts: [
        { name: 'По возрастанию цены', value: 'increase' },
        { name: 'По убыванию цены', value: 'decrease' },
      ] as sortInterface[],
      sortActive: '' as string,
      sortedProducts: this.products as productInterface[],
      search: '' as string,
    };
  },
  computed: {
    sortedAndFilteredProducts(): productInterface[] {
      return this.sortedProducts.filter((item) => {
        return item.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  watch: {
    sortActive(newValue): void {
      if (newValue === '') {
        this.sortedProducts = [...this.products];
      } else if (newValue === 'increase') {
        this.sortedProducts = [...this.products].sort((a, b) => {
          return a.price - b.price;
        });
      } else if (newValue === 'decrease') {
        this.sortedProducts = [...this.products].sort((a, b) => {
          return b.price - a.price;
        });
      }
    },
    sortedAndFilteredProducts(newValue): void {
      this.$emit('update:modelValue', newValue);
    },
  },
});
</script>

<style scoped lang="scss">
.sort {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: 575px) {
    flex-wrap: wrap;
  }
  &__search {
    width: 300px;
  }
  &__dropdown {
    width: 300px;
  }
}
</style>