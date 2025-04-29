import { useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '../../lib/utils'
import ListMenuNav from './components/ListMenuNav.tsx'

const LiquidSideNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const [size] = useState(15)

  const gap = 5

  const gridVariants = {
    closed: (i: number) => ({
      x: (i % 2) * (size + gap) - (size + gap) / 2,
      y: Math.floor(i / 2) * (size + gap) - (size + gap) / 2,
      borderRadius: '10%',
      width: size,
      height: size
    }),
    open: {
      x: 0,
      y: 0,
      borderRadius: '50%',
      width: size * 2,
      height: size * 2
    }
  }
  return (
    <div>
      <div className='fixed right-5 top-5 z-100'>
        <div
          className='relative  w-[50px] h-[50px] flex justify-center items-center cursor-pointer'
          onClick={toggleMenu}
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              custom={i}
              initial='closed'
              animate={isOpen ? 'open' : 'closed'}
              variants={gridVariants}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              className={cn('absolute w-[20px] h-[20px] ', isOpen ? 'bg-white' : 'bg-[#ff3c00]')}
            />
          ))}
        </div>
      </div>
      <ListMenuNav isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  )
}

export default LiquidSideNav
