<template>
  <section class="page day-five">
    <h1 ref="headline" class="headline">{{ displayText }}</h1>
    <p class="scroll-hint">Day 5 complete</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useFlipText } from '../composables/useFlipText'

const displayText = ref(null)
const headline = ref(null)

useFlipText(headline, displayText, {
  texts: ['Day 5 Playing GSAP!', '第五天玩 GSAP!']
})
</script>
