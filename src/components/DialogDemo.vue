<template>
  <h1>Dialog 对话框</h1>

  <Demo :component="Dialog1"></Demo>

  <Demo :component="Dialog2"></Demo>
</template>

<script lang="ts">
// ../lib为相对路径,请改为"sakula-ui"

import {Dialog} from "../lib";
import {Button} from "../lib";
import Dialog1 from '../components/Dialog1.demo.vue';
import Dialog2 from '../components/Dialog1.demo.vue';
import {ref, h} from 'vue';
import {openDialog} from '../lib/openDialog';
import Demo from './Demo.vue';

export default {
  name: 'DialogDemo',
  components: {Demo, Button, Dialog},
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
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        }
      });
    };
    return {Dialog2,Dialog1, showDialog, x, toggle, fn1, fn2};
  }
};
</script>

<style lang="scss" scoped>

</style>
