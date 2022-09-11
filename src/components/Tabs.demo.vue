<demo>
基础用法
</demo>

<template>
  <div>
    <Tabs v-model:selected="x">
      <Tab title="intro1"></Tab>
      <Tab title="intro2"></Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'

export default {
  components: {Tab,Tabs},
  setup(){
   const x =ref('intro1')
   return {x}
 }
};
</script>

