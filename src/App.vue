<template>
  <main ref="appStage" class="app-stage">
    <DayOneSection />
    <DayTwoSection />
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DayOneSection from './components/DayOneSection.vue'
import DayTwoSection from './components/DayTwoSection.vue'

gsap.registerPlugin(ScrollTrigger)

const appStage = ref(null)
let bgTween = null

onMounted(() => {
  const dayTwoEl = appStage.value?.querySelector('.day-two')
  if (!appStage.value || !dayTwoEl) return

  const rootStyles = getComputedStyle(document.documentElement)
  const day3 = rootStyles.getPropertyValue('--theme-day-3').trim()
  const day4 = rootStyles.getPropertyValue('--theme-day-4').trim()
  const day5 = rootStyles.getPropertyValue('--theme-day-5').trim()
  if (!day3 || !day4 || !day5) return

  bgTween = gsap.to(appStage.value, {
    '--bg-start': day3,
    '--bg-mid': day4,
    '--bg-end': day5,
    ease: 'none',
    scrollTrigger: {
      trigger: dayTwoEl,
      start: 'top bottom',
      end: 'top top',
      scrub: true
    }
  })
})

onBeforeUnmount(() => {
  bgTween?.scrollTrigger?.kill()
  bgTween?.kill()
})

</script>
