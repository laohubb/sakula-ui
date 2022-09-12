<template>
<div>
  <h1>Tabs 标签页</h1>
  <Demo :component="TabsDemo"/>
</div>
</template>

<script lang="ts">
// ../lib为相对路径,请改为"sakula-ui"
import TabsDemo from '../components/Tabs.demo.vue'
import Demo from './Demo.vue';
export default {
  name: 'TabsDemo',
  components: {Demo},
  setup(){
    return {TabsDemo}
  }
};
</script>

<style lang="scss" scoped>

</style>
