import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useFromBottomReveal(sectionRef, targetRef, options = {}) {
  const {
    start = 'top 70%',
    toggleActions = 'play none none reverse',
    y = 40,
    duration = 0.7,
    ease = 'power2.out'
  } = options

  let tl = null

  onMounted(() => {
    if (!sectionRef.value || !targetRef.value) return

    gsap.set(targetRef.value, { opacity: 0, y })

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start,
        toggleActions
      }
    })

    tl.to(targetRef.value, {
      opacity: 1,
      y: 0,
      duration,
      ease
    })
  })

  onBeforeUnmount(() => {
    tl?.scrollTrigger?.kill()
    tl?.kill()
  })
}
