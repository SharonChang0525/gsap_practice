<template>
  <section class="page day-one">
    <h1 ref="headline" class="headline">{{ displayText }}</h1>
    <p class="scroll-hint">Scroll down for Day 2</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useFlipText } from '../composables/useFlipText'

const displayText = ref(null)
const headline = ref(null)

useFlipText(headline, displayText, {
  texts: ['Day 1 Playing GSAP!', '第一天玩 GSAP!']
})
</script>
