<demo>
直接打开
</demo>

<template>
  <Button @click="showDialog">示例</Button>
</template>

<script lang="ts">
// ../lib为相对路径,请改为"sakula-ui"
import {Dialog} from "../lib";
import {Button} from "../lib";
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  components: {Button, Dialog},
  setup() {
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
    return {showDialog};
  }
};
</script>
