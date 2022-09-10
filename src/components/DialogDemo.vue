<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">示例</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="fn1" :cancel="fn2"></Dialog>
</template>

<script lang="ts">

import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  name: 'DialogDemo',
  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      return true
    };
    const fn2 = () => {
      console.log('执行2');
    };
    return {x, toggle, fn1, fn2};
  }
};
</script>

<style lang="scss" scoped>

</style>
