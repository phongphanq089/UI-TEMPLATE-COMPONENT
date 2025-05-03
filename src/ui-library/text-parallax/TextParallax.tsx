import Lenis from 'lenis'
import { useScroll, useTransform, motion } from 'motion/react'
import React, { useEffect, useRef } from 'react'

import { MoveDown } from 'lucide-react'
import { bg1, bg2, bg3 } from '../../assets/images'

const TextParallax = () => {
  const container = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number): void {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className='overflow-hidden'>
      <div className='relative font-calendas h-[70vh] pt-[200px] pb-[200px] w-full z-10 text-2xl md:text-7xl font-bold uppercase flex justify-center items-center text-orange-700 whitespace-pre'>
        Scroll down <MoveDown size={60} />
      </div>
      <div ref={container}>
        <Slide src={bg1} direction={'left'} left={'-40%'} progress={scrollYProgress} />
        <Slide src={bg2} direction={'right'} left={'-25%'} progress={scrollYProgress} />
        <Slide src={bg3} direction={'left'} left={'-75%'} progress={scrollYProgress} />
      </div>
      <div className='h-[100vh]' />
    </main>
  )
}

export default TextParallax

interface SlideProps {
  direction: 'left' | 'right'
  left: string
  progress: any
  src: string
}

const Slide: React.FC<SlideProps> = (props) => {
  const direction = props.direction == 'left' ? -1 : 1
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{ x: translateX, left: props.left }} className='relative flex whitespace-nowrap'>
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  )
}

const Phrase = ({ src }: { src: string }) => {
  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className='text-[7.5vw]'>Front End Developer</p>
      <span className='relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden'>
        <img style={{ objectFit: 'cover' }} src={src} alt='image' className='fill' />
      </span>
    </div>
  )
}
