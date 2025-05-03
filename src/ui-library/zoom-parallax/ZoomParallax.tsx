import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

import './index.css'
import { MoveDown } from 'lucide-react'
import { bg1, bg2, bg3, bg4, bg5, bg6, bg7 } from '../../assets/images'

const ZoomParallax = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
      src: bg1,
      scale: scale4
    },
    {
      src: bg2,
      scale: scale5
    },
    {
      src: bg3,
      scale: scale6
    },
    {
      src: bg4,
      scale: scale5
    },
    {
      src: bg5,
      scale: scale6
    },
    {
      src: bg6,
      scale: scale8
    },
    {
      src: bg7,
      scale: scale9
    }
  ]
  return (
    <div className='bg-black'>
      <div className='relative font-calendas h-[20vh] pt-[200px] pb-[200px] w-full z-10 text-2xl md:text-7xl font-bold uppercase flex justify-center items-center text-orange-700 whitespace-pre'>
        Scroll down <MoveDown size={60} />
      </div>
      <div ref={container} className={'container-parallax_image'}>
        <div className={'sticky'}>
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className={'el'}>
                <div className={'imageContainer'}>
                  <img src={src} alt='image' />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className='h-[500px]'></div>
    </div>
  )
}

export default ZoomParallax
