<template>
  <main ref="appStage" class="app-stage">
    <DayOneSection />
    <DayTwoSection />
    <DayThreeSection />
    <DayFourSection />
    <DayFiveSection />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import DayFiveSection from './components/DayFiveSection.vue'
import DayFourSection from './components/DayFourSection.vue'
import DayOneSection from './components/DayOneSection.vue'
import DayThreeSection from './components/DayThreeSection.vue'
import DayTwoSection from './components/DayTwoSection.vue'
import { useBackgroundTransition } from './composables/useBackgroundTransition'

const appStage = ref(null)
useBackgroundTransition(appStage, {
  sectionSelector: '.page',
  colorVarPrefix: '--theme-day-',
  colorCount: 5,
  targetVar: '--page-bg',
  start: 'top 80%',
  end: 'top 20%'
})

</script>
