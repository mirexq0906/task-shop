<template>
  <picture v-if="prod">
    <source :srcSet="`${getSrc}.webp`" type="image/webp" />
    <img :src="srcImg" alt="#" />
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
    getSrc(): string {
      const result = this.srcImg;
      const lastIndex = result.lastIndexOf('.');
      return result.substring(0, lastIndex);
    },
  },
  methods: {},
});
</script>

<style>
</style>