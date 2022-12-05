<script setup></script>

<template>
  <div class="footer-menu">
    <ul>
      <li><img src="../assets/icons/arrow-l.svg" alt="left" /></li>
      <li><img src="../assets/icons/arrow-r.svg" alt="right" /></li>
      <li><img src="../assets/icons/up.svg" alt="up" /></li>
      <li><img src="../assets/icons/listing.svg" alt="listing" /></li>
      <li><img src="../assets/icons/copy.svg" alt="copy" /></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.footer-menu {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
  ul {
    list-style: none;
    display: flex;
    width: 100%;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
