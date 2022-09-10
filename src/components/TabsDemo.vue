<template>
<div>
  <h1>标题</h1>
  <Tabs>
    <Tab title="intro1"></Tab>
    <Tab title="intro2"></Tab>
  </Tabs>


</div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'
export default {
  name: 'TabsDemo',
  components: {Tab,Tabs}

};
</script>

<style lang="scss" scoped>

</style>
