<script setup>
import MarqueeText from 'vue-marquee-text-component'

const props = defineProps({
  text: { type: String, required: true },
})
</script>
<template>
  <div class="wrraper-marquee">
    <marquee-text class="marquee_text" :repeat="3" :duration="10"> {{ props.text }} </marquee-text>
    <marquee-text class="marquee_text reverse" :repeat="3" :duration="10">
      {{ props.text }}
    </marquee-text>
  </div>
</template>

<style lang="scss" scoped>
.wrraper-marquee {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  .marquee_text {
    position: absolute;
    width: 150%;
    z-index: 0;
    font-weight: 700;
    color: white;
    font-size: 52px;
    text-align: center;
    text-transform: uppercase;
    transform: rotate(150deg);
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--color-text);
    opacity: 0.1;
    @media screen and (max-width: 1024px) {
      font-size: 42px;
      transform: rotate(143deg);
      width: 200%;
    }
    @media screen and (max-width: 768px) {
      font-size: 42px;
      transform: rotate(137deg);
    }
    @media screen and (max-width: 500px) {
      font-size: 28px;
      transform: rotate(123deg);
    }
    &.reverse {
      margin-top: 150px;
      transform: rotate(-30deg);
      @media screen and (max-width: 1024px) {
        margin-top: 150px;
        transform: rotate(-36deg);
      }
      @media screen and (max-width: 768px) {
        margin-top: 150px;
        transform: rotate(-43deg);
      }
      @media screen and (max-width: 500px) {
        margin-top: 150px;
        transform: rotate(-57deg);
      }
    }
  }
}
</style>
