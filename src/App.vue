<template>
  <main>
    <section class="page day-one">
      <h1 ref="headline" class="headline">{{ displayText }}</h1>
      <p class="scroll-hint">Scroll down for Day 2</p>
    </section>

    <section ref="day2Section" class="page day-two">
      <h2 class="day2-title">Day 2 GSAP</h2>
      <p class="day2-subtitle">Animation triggers when this section enters the viewport.</p>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useFlipText } from './composables/useFlipText'

gsap.registerPlugin(ScrollTrigger)
const displayText = ref('Day 1 Playing GSAP!')
const headline = ref(null)
const day2Section = ref(null)

useFlipText(headline, displayText, {
  texts: ['Day 1 Playing GSAP!', '第一天玩 GSAP!']
})

onMounted(() => {
  const day2Title = day2Section.value?.querySelector('.day2-title')
  const day2Subtitle = day2Section.value?.querySelector('.day2-subtitle')

  if (!day2Section.value || !day2Title || !day2Subtitle) return

  gsap.set([day2Title, day2Subtitle], { opacity: 0, y: 40 })

  gsap.timeline({
    scrollTrigger: {
      trigger: day2Section.value,
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  })
    .to(day2Title, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .to(day2Subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.2')
})

</script>
