<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item" v-for="(t,index) in titles"
           :ref="el => { if (el) navItems[index] = el }"
           @click="select(t)" :class="{selected: t=== selected}" :key="index">{{ t }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item"
                 :class="{selected: c.props.title === selected }"
                 v-for="c in defaults"
                 :is="c"/>

    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {ref, onMounted, onUpdated, computed} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {

    const defaults = context.slots.default();
    console.log(defaults);
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tab 标签必须是Tab');
      }
    });
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const divs = navItems.value;
      const result = divs.find(div => div.classList.contains('selected'));
      const {width} = result.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {left: left1} = container.value.getBoundingClientRect();
      const {left: left2} = result.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + 'px';
    };
    onMounted(x);
    onUpdated(x);


    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    const select = (title) => {
      context.emit('update:selected', title);
    };

    return {
      defaults, titles, select, navItems, indicator, container
    };
  }
};
</script>

<style lang="scss">
$pink: #d77480;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $pink;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $pink;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }

}
</style>
