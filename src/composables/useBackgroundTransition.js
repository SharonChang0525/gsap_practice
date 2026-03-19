import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useBackgroundTransition(stageRef, options = {}) {
  const {
    sectionSelector = '.page',
    colorVarPrefix = '--theme-day-',
    colorCount = 5,
    targetVar = '--page-bg',
    start = 'top 80%',
    end = 'top 20%'
  } = options

  const bgTweens = []

  onMounted(() => {
    if (!stageRef.value) return

    const sections = stageRef.value.querySelectorAll(sectionSelector)
    const rootStyles = getComputedStyle(document.documentElement)
    const colors = Array.from({ length: colorCount }, (_, idx) => idx + 1)
      .map((n) => rootStyles.getPropertyValue(`${colorVarPrefix}${n}`).trim())
      .filter(Boolean)

    if (!sections.length || colors.length < sections.length) return

    gsap.set(stageRef.value, { [targetVar]: colors[0] })

    for (let i = 1; i < sections.length; i += 1) {
      const tween = gsap.fromTo(
        stageRef.value,
        { [targetVar]: colors[i - 1] },
        {
          [targetVar]: colors[i],
          ease: 'none',
          scrollTrigger: {
            trigger: sections[i],
            start,
            end,
            scrub: true
          }
        }
      )
      bgTweens.push(tween)
    }
  })

  onBeforeUnmount(() => {
    bgTweens.forEach((tween) => {
      tween.scrollTrigger?.kill()
      tween.kill()
    })
    bgTweens.length = 0
  })
}
