<template>
  <picture>
    <source :srcSet="`./assets/${srcImg}`" type="image/webp" />
    <img :src="`./assets/${srcImg}`" alt="#" />
  </picture>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    srcImg: {
      type: String,
      default: '',
    },
  },
});
</script>

<style>
</style>