<script setup>
import BackgroundMarqueeText from '../components/ui/BackgroundMarqueeText.vue'
import BackgroundCircle from '../components/ui/BackgroundCircle.vue'
import MainText from '../components/ui/MainText.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <BackgroundCircle />
    <BackgroundMarqueeText text="Full-cycle event agency" />
    <MainText text="What?" />
  </DefaultLayout>
</template>
