<template>
<div>
  <div v-for="(t,index) in titles" :key="index">{{t}}</div>
  <component v-for="(c,index) in defaults" :is="c" :key="index"></component>
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
export default {
  components: {Tab},
  setup(props,context){
    const defaults=context.slots.default()
    defaults.forEach((tag)=>{
      if(tag.type!==Tab){
        throw new Error('Tab 标签必须是Tab')
      }
    })

    const titles=defaults.map((tag)=>{
      return tag.props.title
    })
   return{
      titles,defaults
   }
  }
};
</script>

<style lang="scss" scoped>

</style>
