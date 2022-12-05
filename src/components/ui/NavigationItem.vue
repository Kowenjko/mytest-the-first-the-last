<script setup>
const props = defineProps({
  name: { type: String, required: true },
  url: { type: String, required: true },
  position: { type: String, required: true, default: 'bottom' },
})
</script>

<template>
  <div :class="`wrapper-link wrapper-link__${props.position}`">
    <router-link :to="props.url">{{ props.name }}</router-link>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-link {
  position: absolute;
  display: block;
  @media screen and (max-width: 500px) {
    display: none;
  }

  &__left {
    left: -25px;
    top: 50%;
    transform: rotate(270deg);
  }
  &__right {
    right: -15px;
    top: 50%;
    transform: rotate(90deg);
  }
  &__bottom {
    bottom: 10px;
    left: 50%;
  }

  a {
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    &:hover,
    &.router-link-exact-active,
    &.router-link-active {
      color: var(--color-hover);
    }

    &:after {
      background-color: var(--color-hover);
      display: block;
      position: absolute;
      left: 0;
      content: '';
      height: 2px;
      width: 0%;
      -webkit-transition: width 0.3s ease-in-out;
      -moz--transition: width 0.3s ease-in-out;
      transition: width 0.3s ease-in-out;
    }
    &:hover:after {
      opacity: 0.6;
      width: 100%;
    }
    &.router-link-exact-active:after,
    &.router-link-active:after {
      width: 100%;
    }
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
  }
}
</style>
