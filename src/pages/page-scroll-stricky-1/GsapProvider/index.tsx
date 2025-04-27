import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'
import { ScrollTriggerConfig } from './ScrollTriggerConfig'
import { useGSAP } from '@gsap/react'

export function GsapProvider({ scrollTrigger = false }) {
  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
  }, [])

  return scrollTrigger && <ScrollTriggerConfig />
}
