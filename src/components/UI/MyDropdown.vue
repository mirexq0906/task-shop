<template>
  <div class="dropdown">
    <div
      class="dropdown__hero"
      :class="{ active: show }"
      @click="() => (show = !show)"
    >
      {{ activeText }}
      <my-image :srcImg="'caret-down-fill.svg'"/>
    </div>
    <transition name="fade">
      <ul v-show="show" class="dropdown__list">
        <li
          :class="{ disabled: activeText === 'Выберите фильтр' }"
          class="dropdown__item"
          @click="changeDropdown({ name: 'Выберите фильтр', value: '' })"
        >
          Выберите фильтр
        </li>
        <li
          v-for="item in sorts"
          :key="item.value"
          :class="{ disabled: activeText === item.name }"
          class="dropdown__item"
          @click="changeDropdown(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { sortInterface } from '../../interfaces';
export default defineComponent({
  props: {
    sorts: {
      type: Array as () => sortInterface[],
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      show: false as boolean,
      activeText: 'Выберите фильтр' as string,
    };
  },
  methods: {
    changeDropdown(item: sortInterface) {
      this.activeText = item.name;
      this.show = false;
      this.$emit('update:modelValue', item.value);
    },
  },
});
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
  z-index: 10;
  cursor: pointer;
  &__hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    height: 45px;
    border: 2px solid#323232;
    background: #fff;
    border-radius: 5px;
  }
  &__hero img {
    transition: 300ms transform;
  }
  &__hero.active {
    border-radius: 5px 5px 0 0;
  }
  &__hero.active img {
    transform: rotate(180deg);
  }
  &__list {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    border: 2px solid#323232;
    border-top: none;
    border-radius: 0 0 5px 5px;
  }
  &__item {
    position: relative;
    padding: 10px;
    background: #fff;
  }
  &__item.disabled {
    padding-left: 15px;
    pointer-events: none;
    color: #54ad2a;
  }
  &__item.disabled:before {
    content: '';
    display: block;
    height: 60%;
    left: 7px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    background: #54ad2a;
  }
  &__item:not(:last-child) {
    border-bottom: 2px solid#323232;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>