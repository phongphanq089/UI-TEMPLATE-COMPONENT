import { useState } from 'react'
import { motion, MotionValue } from 'framer-motion'

interface propsType {
  mousePosition: {
    x: MotionValue<number>
    y: MotionValue<number>
  }
  projects: {
    name: string
    handle: string
  }[]
}

export default function Description({ mousePosition, projects }: propsType) {
  const [index, setIndex] = useState(0)
  const { x, y } = mousePosition

  return (
    <div className={'description'}>
      <div className={'descriptionContainer'}>
        {projects.map(({ name }, i) => {
          return (
            <p
              onMouseOver={() => {
                setIndex(i)
              }}
              key={`p${i}`}
            >
              {name}
            </p>
          )
        })}
      </div>
      <motion.div className={'vignette'} style={{ x, y }}>
        <img src={projects[index].handle} alt='image' className='fill' />
      </motion.div>
    </div>
  )
}
