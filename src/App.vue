<template>
  <main>
    <section class="page day-one">
      <h1 ref="headline" class="headline">{{ displayText }}</h1>
      <p class="scroll-hint">Scroll down for Day 2</p>
    </section>

    <section ref="day2Section" class="page day-two">
      <h2 class="day2-title">Day 2 GSAP</h2>
      <p ref="day2SubtitleRef" class="day2-subtitle">{{ day2Subtitle }}</p>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useFlipText } from './composables/useFlipText'
import { useFromBottomReveal } from './composables/useFromBottomReveal'

const displayText = ref('Day 1 Playing GSAP!')
const headline = ref(null)
const day2Section = ref(null)

useFlipText(headline, displayText, {
  texts: ['Day 1 Playing GSAP!', '第一天玩 GSAP!']
})

const {
  textValue: day2Subtitle,
  textRef: day2SubtitleRef
} = useFromBottomReveal(day2Section, {
  text: 'Animation triggers when this section enters the viewport.',
  start: 'top 70%',
  duration: 0.7,
  ease: 'power2.out'
})

</script>
