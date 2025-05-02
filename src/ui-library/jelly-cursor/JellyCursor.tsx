'use client'

import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/utils'

export default function JellyCursor() {
  const isTouchDevice = useIsTouchDevice()
  return (
    <>
      <article
        data-cursor='hover'
        className='relative grid min-h-96 place-items-center rounded-xl border border-white/10 bg-white/5 p-3 md:aspect-[4/3] md:min-h-0'
      >
        {!isTouchDevice ? (
          <div className='grid h-full w-full gap-y-5 px-5 py-10'>
            <div
              className='grid place-items-center rounded-lg border border-white/10 bg-black/40 p-5 text-lg tracking-widest uppercase'
              data-cursor='scale'
            >
              Scale
            </div>
            <div
              className='grid place-items-center rounded-lg border border-white/10 bg-black/40 p-5 text-lg tracking-widest uppercase'
              data-cursor='drag'
            >
              Drag
            </div>
          </div>
        ) : (
          'Your device does not support this effect'
        )}
      </article>
      <Cursor />
    </>
  )
}

const Cursor = () => {
  const isTouchDevice = useIsTouchDevice()
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const cursorTextRef = useRef<HTMLDivElement | null>(null)
  const [cursorName, setCursorName] = useState<'hover' | 'scale' | 'drag' | ''>('')
  const pos = useRef({ x: 0, y: 0 })
  const vel = useRef({ x: 0, y: 0 })
  const targetPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const allCursorHoverElements = document.querySelectorAll('a, button, [data-cursor="hover"], .cursor-pointer')
    const allCursorScaleElements = document.querySelectorAll('[data-cursor="scale"]')
    const allCursorDragElements = document.querySelectorAll('[data-cursor="drag"]')

    allCursorScaleElements.forEach((el) => {
      el.addEventListener('mouseover', () => {
        setCursorName('scale')
      })
      el.addEventListener('mouseleave', () => {
        setCursorName('hover')
      })
    })
    allCursorDragElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        setCursorName('drag')
      })
      el.addEventListener('mouseleave', () => {
        setCursorName('hover')
      })
    })

    allCursorHoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        setCursorName('hover')
      })
      el.addEventListener('mouseleave', () => {
        setCursorName('')
      })
    })
    return () => {
      allCursorHoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => {
          setCursorName('hover')
        })
        el.removeEventListener('mouseleave', () => {
          setCursorName('')
        })
      })
      allCursorScaleElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => {
          setCursorName('scale')
        })
        el.removeEventListener('mouseleave', () => {
          setCursorName('')
        })
      })
      allCursorDragElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => {
          setCursorName('drag')
        })
        el.removeEventListener('mouseleave', () => {
          setCursorName('')
        })
      })
    }
  }, [])

  useEffect(() => {
    if (isTouchDevice || !cursorRef.current) return
    const elasticCursor = cursorRef.current

    const defaultTransition = {
      duration: 0.2,
      ease: 'power2.out'
    }
    // GSAP setters
    const setX = gsap.quickTo(elasticCursor, 'x', defaultTransition)
    const setY = gsap.quickTo(elasticCursor, 'y', defaultTransition)
    const setRotation = gsap.quickSetter(elasticCursor, 'rotate', 'deg')
    const setScaleX = gsap.quickSetter(elasticCursor, 'scaleX')
    const setScaleY = gsap.quickSetter(elasticCursor, 'scaleY')
    const setTextRotation = gsap.quickSetter(cursorTextRef.current, 'rotate', 'deg')
    const update = () => {
      const rotation = getAngle(vel.current.x, vel.current.y)
      const scale = getScale(vel.current.x, vel.current.y)
      setX(pos.current.x)
      setY(pos.current.y)
      setRotation(rotation)
      setTextRotation(-rotation)
      setScaleX(1 + scale)
      setScaleY(1 - scale)
    }
    const animate = () => {
      const speed = 0.5
      pos.current.x += (targetPos.current.x - pos.current.x) * speed
      pos.current.y += (targetPos.current.y - pos.current.y) * speed
      vel.current.x = targetPos.current.x - pos.current.x
      vel.current.y = targetPos.current.y - pos.current.y
      update()
      requestAnimationFrame(animate)
    }
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX
      targetPos.current.y = e.clientY
      update()
    }

    const hideCursor = () => {
      gsap.to(elasticCursor, {
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      })
    }
    const showCursor = () => {
      gsap.to(elasticCursor, {
        opacity: 1,
        duration: 0.7,
        ease: 'power2.out'
      })
    }
    animate()

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', hideCursor)
    document.addEventListener('mouseenter', showCursor)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', hideCursor)
      document.removeEventListener('mouseenter', showCursor)
    }
  }, [isTouchDevice])

  if (isTouchDevice) return null

  return (
    <div ref={cursorRef} className='pointer-events-none fixed top-0 left-0 z-30'>
      <div
        className={cn(
          'absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-white transition-[scale,background-color] duration-300',
          cursorName === 'hover' && 'scale-100',
          cursorName === 'scale' && 'scale-200',
          cursorName === 'drag' && 'scale-400'
        )}
      />
      <div ref={cursorTextRef}>
        <div
          className={cn(
            'pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-25 text-black opacity-0 transition-[opacity,scale] duration-300',
            cursorName === 'drag' && 'scale-100 opacity-100'
          )}
        >
          <span className='inline-block'>Drag</span>
        </div>
      </div>
    </div>
  )
}

function getScale(diffX: number, diffY: number) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2))
  return Math.min(distance / 100, 0.25)
}
function getAngle(diffX: number, diffY: number) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI
}
function useIsTouchDevice(): boolean {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false)

  useEffect(() => {
    const checkTouchDevice = () => {
      const hasTouch: boolean =
        'ontouchstart' in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0
      setIsTouchDevice(hasTouch)
    }

    checkTouchDevice()

    window.addEventListener('resize', checkTouchDevice)

    return () => {
      window.removeEventListener('resize', checkTouchDevice)
    }
  }, [])

  return isTouchDevice
}
