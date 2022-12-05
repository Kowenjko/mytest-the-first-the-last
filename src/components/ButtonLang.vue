<script setup>
import IconLang from './icons/IconLang.vue'
</script>

<template>
  <div class="wrraper-lang">
    <IconLang />
    <ul class="list">
      <li>UA</li>
      <li>RU</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.wrraper-lang {
  position: relative;
  cursor: pointer;
  & svg {
    transition: all 0.5s ease-out;
  }
  &:hover svg {
    transform: scale(1.2);
  }
  &:hover .list {
    right: -250%;
    opacity: 1;
  }
  .list {
    position: absolute;
    list-style: none;
    display: flex;
    gap: 10px;
    font-size: 10px;
    top: 50%;
    right: -120%;
    opacity: 0;
    transition: all 0.5s ease-out;
    transform: translate(0, -50%);

    li {
      background: var(--yellow);
      padding: 3px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        opacity: 0.8;
        color: white;
      }
    }
  }
}
</style>
