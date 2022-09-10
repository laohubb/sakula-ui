<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
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
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">

import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref,h} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  name: 'DialogDemo',
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
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {showDialog,x, toggle, fn1, fn2};
  }
};
</script>

<style lang="scss" scoped>

</style>
