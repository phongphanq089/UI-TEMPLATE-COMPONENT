import { motion, MotionValue } from 'framer-motion'

interface propsType {
  mousePosition: {
    x: MotionValue<number>
    y: MotionValue<number>
  }
  handle: string
}

export default function Gallery({ mousePosition, handle }: propsType) {
  const { x, y } = mousePosition

  return (
    <div className={'gallery'}>
      <div className={'imageContainer'}>
        <img src={handle} alt='image' className='fill' />
      </div>
      <motion.div className={'vignette'} style={{ x, y }}>
        <img src={handle} alt='image' className='fill' />
      </motion.div>
    </div>
  )
}
