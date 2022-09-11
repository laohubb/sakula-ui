<demo>
基础用法
</demo>

<template>
  <Button @click="toggle">示例</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="fn1" :cancel="fn2">
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      return true;
    };
    const fn2 = () => {
      console.log('执行2');
    };

    return {x, toggle, fn1, fn2};
  }
};
</script>
