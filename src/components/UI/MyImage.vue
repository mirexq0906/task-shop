<template>
  <picture v-if="prod">
    <source :srcSet="`./assets/${getSrcWebp}`" type="image/webp" />
    <img :src="`./assets/${getSrc}`" alt="#" />
  </picture>
  <img v-else :src="srcImg" alt="" />
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
      prod: false as boolean,
    };
  },
  computed: {
    getSrc(): string | undefined {
      if (this.srcImg) {
        const result = this.srcImg;
        return result.split('/').pop();
      }
      return undefined;
    },
    getSrcWebp(): string {
      const result: string | undefined = this.getSrc;
      if (result === undefined) {
        return '';
      }
      const format = result.split('/').pop();
      if (format === 'svg') {
        return result + '.svg';
      } else {
        return result + '.webp';
      }
    },
  },
  methods: {},
});
</script>

<style>
</style>