import { AnimatePresence } from 'motion/react'
import { motion } from 'motion/react'
import NavLinkAnimated from './NavLinkAnimated'
import { cn } from '../../../lib/utils'

interface PropsType {
  isOpen: boolean
  toggleMenu: () => void
}

const sidebarVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  },
  exit: { x: '100%' }
}

const ListMenuNav = ({ isOpen, toggleMenu }: PropsType) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className={cn('fixed top-0 left-0 w-full h-screen bg-[#ff3c00] z-90')}
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={sidebarVariants}
        >
          <div className='md:grid grid-cols-2 p-6 h-full'>
            <div className='flex flex-col gap-2 mt-8'>
              <h3 className='text-[14px] ms:text-sm md:text-md font-bold'>PORTFOLIO 2024</h3>
              <div className='w-[150px] lg:w-[300px]'>
                <div className='wrapImgResize img3And4'>
                  <img
                    src={
                      'https://images.unsplash.com/photo-1677338354108-223e807fb1bd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                    alt='phong phan'
                  />
                </div>
              </div>
            </div>
            <div className='h-full flex items-end justify-end '>
              <div className='h-fit max-md:absolute right-3 top-[50%]'>
                {MENU_SETTINGS.map((item, index) => {
                  return (
                    <NavLinkAnimated
                      heading={item.title}
                      href={item.link}
                      isActive={false}
                      key={index}
                      toggleMenu={toggleMenu}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default ListMenuNav

const MENU_SETTINGS = [
  {
    title: 'HOME',
    link: '#'
  },
  {
    title: 'ABOUT',
    link: '#'
  },
  {
    title: 'BLOG',
    link: '#'
  },
  {
    title: 'CONTACT',
    link: '#'
  }
]
