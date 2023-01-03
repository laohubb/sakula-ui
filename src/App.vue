<template>
  <router-view></router-view>
</template>

<script>
import {onMounted, provide, ref} from 'vue'
import {router} from "./router";

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 300 ? false : true)
    provide("menuVisible", menuVisible)
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false
      }
    })

    onMounted(()=>{

      // 禁止页面缩放
      window.onload = function () {
        document.addEventListener("touchstart", function (event) {
          if (event.touches.length > 1) {
            event.preventDefault();
          }
        });
        document.addEventListener("gesturestart", function (event) {
          event.preventDefault();
        });
      };
      document.documentElement.addEventListener(
          "touchmove",
          function (event) {
            if (event.touches.length > 1) {
              event.preventDefault();
            }
          },
          false
      );
    })

  }
}
</script>
