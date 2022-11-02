<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sakura-flower"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/" v-if="visible()">首页</router-link>
        <router-link to="/doc" v-else>文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible"  aria-hidden="true" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>

  </div>
</template>

<script lang="ts">
// ../lib为相对路径,请改为"sakula-ui"

import {inject, Ref} from 'vue';

export default {
  props:{
    toggleMenuButtonVisible:{
      type:Boolean,
      defaultL:false
    }
  },
  name: 'Topnav',
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    const visible=()=>{
      return location.hash.includes('doc')
    }

    return {toggleMenu,visible};
  }
};
</script>


<style lang="scss" scoped>

.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  color: darken(#f5c4cb, 20);
  > .logo {
    .icon{
      top: 0;
      left: 0;
    }
    max-width: 6em;
    margin-right: auto;
    font-size: 24px;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  @media (max-width: 500px) {
    &{
      box-shadow: 0px 2px 5px #f1b4b4;
      background-color: #fbece7;
      overflow: hidden;
    }
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
