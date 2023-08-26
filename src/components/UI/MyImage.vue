<template>
  <template v-if="format !== 'svg'">
    <picture>
      <source :srcSet="`./assets/${formatWebp}`" type="image/webp" />
      <img :src="`./assets/${srcImg}`" alt="#" />
    </picture>
  </template>
  <img v-else :src="`./assets/${srcImg}`" alt="" />
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
  data() {
    return {
      format: '' as string | undefined,
      formatWebp: '' as string,
    };
  },
  mounted() {
    this.changeFormat();
  },
  methods: {
    changeFormat(): void {
      let result: string[] = this.srcImg.split('.');
      this.format = result.pop();
      this.formatWebp = result.join('') + '.webp';
    },
  },
});
</script>

<style>
</style>