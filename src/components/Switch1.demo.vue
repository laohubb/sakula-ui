<demo>
常规用法
</demo>
<template>
  <Switch v-model:value="bool" ></Switch>
</template>

<script lang="ts">
// ../lib为相对路径,请改为"sakula-ui"
import {Switch} from "../lib";
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const bool = ref(false);
    return {bool};
  }
};
</script>


