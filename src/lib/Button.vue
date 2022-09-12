<template>
  <button class="gulu-button" :class="classes" :disabled="disabled">
    <div v-if="loading" class="gulu-loadingIndicator">
      <div class="rect1">&nbsp;</div>
      <div class="rect2">&nbsp;</div>
      <div class="rect3">&nbsp;</div>
    </div>
    <slot/>
  </button>
</template>
<script lang="ts">
import {computed} from 'vue';

export default {
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
    level: {
      type: String,
      default: 'normal',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const {theme, size, level} = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
        [`gulu-level-${level}`]: level,
      };
    });
    return {classes};
  },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$pink: #d77480;
$radius: 4px;
$red: darken(#ec5b56, 10);
$grey: grey;
.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $pink;
    border-color: $pink;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $pink;

    &:hover,
    &:focus {
      color: lighten($pink, 10%);
    }
  }

  &.gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.gulu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.gulu-theme-button {
    &.gulu-level-main {
      background: $pink;
      color: white;
      border-color: $pink;

      &:hover,
      &:focus {
        background: darken($pink, 10%);
        border-color: darken($pink, 10%);
      }
    }

    &.gulu-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }

  &.gulu-theme-link {
    &.gulu-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.gulu-theme-text {
    &.gulu-level-main {
      color: $pink;

      &:hover,
      &:focus {
        color: darken($pink, 10%);
      }
    }

    &.gulu-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.gulu-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }

  &.gulu-theme-link, &.gulu-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .gulu-loadingIndicator {
    .rect1{
      animation-delay:-1.1s
    }
    .rect2{
      animation-delay:-1s
    }
    .rect3{
      animation-delay:-0.9s
    }
    >div{
      margin-right: 2px;
      background-color: $pink;
      height: 100%;
      width: 2px;
      display: inline-block;
      -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
      animation: 1.2s ease-in-out infinite stretchdelay;

    }
  }
}

@keyframes gulu-spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>
