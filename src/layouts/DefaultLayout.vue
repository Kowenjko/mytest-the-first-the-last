<template>
  <main class="wrraper">
    <slot />
  </main>
</template>
<style lang="scss" scoped>
.wrraper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
