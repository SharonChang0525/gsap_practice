<template>
  <section class="page day-one">
    <h1 ref="headline" class="headline">{{ displayText }}</h1>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useFlipText } from '../composables/useFlipText'

const displayText = ref(null)
const headline = ref(null)

useFlipText(headline, displayText, {
  texts: ['Day 3 Playing GSAP!', '第三天玩 GSAP!']
})
</script>
