<script setup>
import Navigations from './components/Navigations.vue'
</script>

<template>
  <div class="container">
    <Navigations />
    <router-view v-slot="{ Component, route }">
      <transition :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
<style lang="scss">
.container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}
</style>
