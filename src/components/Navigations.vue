<script setup>
import NavigationItem from '../components/ui/NavigationItem.vue'
import LogoTest from './LogoTest.vue'
import ButtonLang from './ButtonLang.vue'
import FooterMobileMenu from './FooterMobileMenu.vue'

const links = [
  { name: 'what?', position: 'right', url: '/what' },
  { name: 'who?', position: 'bottom', url: '/who' },
  { name: 'where?', position: 'left', url: '/where' },
]
</script>

<template>
  <header class="header">
    <nav class="header__navigation">
      <ButtonLang />
      <LogoTest />
      <div class="burger-menu">
        <img src="../assets/icons/menu.svg" alt="menu" />
      </div>
    </nav>
    <NavigationItem
      v-for="(link, index) in links"
      :key="index"
      :name="link.name"
      :position="link.position"
      :url="link.url"
    />
  </header>
  <FooterMobileMenu />
</template>

<style lang="scss">
.header {
  position: absolute;
  z-index: 10;
  width: 100%;
  min-height: 100%;
  padding: 16px;
  &__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .burger-menu {
      img {
        display: none;
        @media screen and (max-width: 500px) {
          display: block;
        }
      }
    }
  }
}
</style>
