<template>
  <section ref="day2Section" class="page day-two">
    <h2 class="day2-title">Day 2 GSAP</h2>
    <p ref="day2SubtitleRef" class="day2-subtitle">{{ day2Subtitle }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useFromBottomReveal } from '../composables/useFromBottomReveal'

const day2Section = ref(null)
const day2Subtitle = ref('Animation triggers when this section enters the viewport.')
const day2SubtitleRef = ref(null)

useFromBottomReveal(day2Section, day2SubtitleRef, {})
</script>
