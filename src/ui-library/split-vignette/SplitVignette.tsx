import Lenis from 'lenis'
import { useSpring } from 'motion/react'
import { useEffect } from 'react'
import Description from './components/Description'
import './components/index.css'
import Gallery from './components/Gallery'
import { bg1, bg2, bg3, bg4 } from '../../assets/images'

const SplitVignette = () => {
  const projects = [
    {
      name: 'Dyal Thak',
      handle: bg1
    },
    {
      name: 'Leidinger Matthias',
      handle: bg2
    },
    {
      name: 'Mark Rammers',
      handle: bg3
    },
    {
      name: 'Landon Speers',
      handle: bg4
    }
  ]

  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring)
  }

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const mouseMove = (e: any) => {
    const { clientX, clientY } = e
    const targetX = clientX - (window.innerWidth / 2) * 0.25
    const targetY = clientY - (window.innerWidth / 2) * 0.3
    mousePosition.x.set(targetX)
    mousePosition.y.set(targetY)
  }
  return (
    <main onMouseMove={mouseMove} className={'main'}>
      {projects.map(({ handle }, i) => {
        return <Gallery mousePosition={mousePosition} handle={handle} key={i} />
      })}
      <Description mousePosition={mousePosition} projects={projects} />
    </main>
  )
}

export default SplitVignette
