import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

export function useFlipText(targetRef, textRef, options = {}) {
  const {
    firstText = 'first text',
    secondText = 'second text',
    repeatDelay = 2,
    durationOut = 0.45,
    durationIn = 0.55
  } = options

  let tl = null

  onMounted(() => {
    if (!targetRef.value) return

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
        textRef.value = textRef.value === firstText ? secondText : firstText
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
