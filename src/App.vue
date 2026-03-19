<template>
  <main class="page">
    <h1 ref="headline" class="headline">{{ displayText }}</h1>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const displayText = ref('Day 1 Playing GSAP!')
const headline = ref(null)

onMounted(() => {
  gsap.set(headline.value, {
    transformOrigin: '50% 50%',
    transformPerspective: 800
  })

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })

  tl.to(headline.value, {
    rotationX: -90,
    opacity: 0.15,
    duration: 0.45,
    ease: 'power2.in'
  })
    .call(() => {
      displayText.value =
        displayText.value === 'Day 1 Playing GSAP!'
          ? '第一天玩 GSAP!'
          : 'Day 1 Playing GSAP!'
    })
    .set(headline.value, { rotationX: 90 })
    .to(headline.value, {
      rotationX: 0,
      opacity: 1,
      duration: 0.55,
      ease: 'back.out(1.6)'
    })
})

</script>
