<demo>
基础用法
</demo>

<template>
  <div>
    <Tabs v-model:selected="x">
      <Tab title="Tab1">内容1</Tab>
      <Tab title="Tab2">内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
// ../lib为相对路径,请改为"sakula-ui"
import {ref} from 'vue';
import {Tab} from "../lib";
import {Tabs} from "../lib";

export default {
  components: {Tab,Tabs},
  setup(){
   const x =ref('Tab1')
   return {x}
 }
};
</script>

