import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

export function useFlipText(targetRef, textRef, options = {}) {
  const {
    texts = ['first text', 'second text'],
    startIndex = 0,
    repeatDelay = 2,
    durationOut = 0.45,
    durationIn = 0.55
  } = options

  let tl = null
  const normalizedTexts = Array.isArray(texts) ? texts.filter((text) => typeof text === 'string' && text.length > 0) : []
  let currentIndex = 0

  onMounted(() => {
    if (!targetRef.value || normalizedTexts.length < 2) return

    currentIndex = ((startIndex % normalizedTexts.length) + normalizedTexts.length) % normalizedTexts.length
    textRef.value = normalizedTexts[currentIndex]

    gsap.set(targetRef.value, {
      transformOrigin: '50% 50%',
      transformPerspective: 800
    })

    tl = gsap.timeline({ repeat: -1, repeatDelay })

    tl.to(targetRef.value, {
      rotationX: -90,
      opacity: 0.15,
      duration: durationOut,
      ease: 'power2.in'
    })
      .call(() => {
        currentIndex = (currentIndex + 1) % normalizedTexts.length
        textRef.value = normalizedTexts[currentIndex]
      })
      .set(targetRef.value, { rotationX: 90 })
      .to(targetRef.value, {
        rotationX: 0,
        opacity: 1,
        duration: durationIn,
        ease: 'back.out(1.6)'
      })
  })

  onBeforeUnmount(() => {
    tl?.kill()
  })
}
