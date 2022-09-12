<demo>
基础用法
</demo>

<template>
  <div>
    <Button>普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文字按钮</Button>
  </div>
</template>

<script lang="ts">
// ../lib为相对路径,请改为"sakula-ui"
import {Button} from "../lib";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>
