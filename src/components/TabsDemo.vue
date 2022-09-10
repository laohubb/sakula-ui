<template>
<div>
  <h1>标题</h1>
  <Tabs v-model:selected="x">
    <Tab title="intro1"></Tab>
    <Tab title="intro2"></Tab>
  </Tabs>


</div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'
import {ref} from 'vue';
export default {
  name: 'TabsDemo',
  components: {Tab,Tabs},
  setup(){
    const x =ref('intro1')
    return {x}
  }
};
</script>

<style lang="scss" scoped>

</style>
