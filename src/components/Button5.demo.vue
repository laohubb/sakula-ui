<demo>
加载中
</demo>

<template>
  <div>
    <Button loading>加载中</Button>
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
