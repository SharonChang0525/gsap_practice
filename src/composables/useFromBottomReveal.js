import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useFromBottomReveal(sectionRef, options = {}) {
  const {
    text = 'text',
    start = 'top 70%',
    toggleActions = 'play none none reverse',
    y = 40,
    duration = 0.7,
    ease = 'power2.out'
  } = options

  const textValue = ref(text)
  const textRef = ref(null)
  let tl = null

  onMounted(() => {
    if (!sectionRef.value || !textRef.value) return

    gsap.set(textRef.value, { opacity: 0, y })

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start,
        toggleActions
      }
    })

    tl.to(textRef.value, {
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

  return {
    textValue,
    textRef
  }
}
