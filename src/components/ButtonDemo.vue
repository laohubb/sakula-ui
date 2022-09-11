<template>
  <h1>Button 按钮</h1>
  <Demo :component="Button1"></Demo>
  <Demo :component="Button2"></Demo>
  <Demo :component="Button3"></Demo>
  <Demo :component="Button4"></Demo>
  <Demo :component="Button5"></Demo>

</template>
<script lang="ts">
import Demo from './Demo.vue';
import Button from "../lib/Button.vue";
import Button1 from '../components/Button1.demo.vue'
import Button2 from '../components/Button2.demo.vue'
import Button3 from '../components/Button3.demo.vue'
import Button4 from '../components/Button4.demo.vue'
import Button5 from '../components/Button5.demo.vue'
export default {
  components: {Demo, Button },
  setup() {
    return { Button1,Button2,Button3,Button4,Button5};
  },
};
</script>
