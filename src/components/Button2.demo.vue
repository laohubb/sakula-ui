<demo>
尺寸
</demo>

<template>
  <div>
    <div>
      <Button size="big">大号</Button>
      <Button>普通</Button>
      <Button size="small">小号</Button>
    </div>
    <div>
      <Button theme="link" size="big">大号</Button>
      <Button theme="link">普通</Button>
      <Button size="small" theme="link">小号</Button>
    </div>
    <div>
      <Button size="big" theme="text">大号</Button>
      <Button theme="text">普通</Button>
      <Button size="small" theme="text">小号</Button>
    </div>
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
