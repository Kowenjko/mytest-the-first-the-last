<script setup>
import { onMounted, ref, watch } from 'vue'
import { useMouse } from '../../composables/useMouse'

const props = defineProps({
  text: { type: String, default: 'Full-cycle<br />event agency' },
  isMove: { type: Boolean, default: false },
})

const movingText = ref(null)
const { x, y } = useMouse()

const moveText = () => {
  if (!movingText || !props.isMove) return
  movingText.value.style.left = x.value + 'px'
  movingText.value.style.top = y.value + 'px'
}

watch([x, y], () => moveText())
</script>
<template>
  <div class="main-text" ref="movingText" v-html="props.text"></div>
</template>

<style lang="scss" scoped>
.main-text {
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  z-index: 12;
  font-weight: 700;
  font-size: 82px;
  line-height: 1.1;
  transition: all 4s linear;
  @media screen and (max-width: 1024px) {
    font-size: 54px;
  }
  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
}
</style>
