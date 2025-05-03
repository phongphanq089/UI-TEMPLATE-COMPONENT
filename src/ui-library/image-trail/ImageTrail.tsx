'use client'

import React, { useCallback, useRef, useState } from 'react'
import { cartImageDemo } from '../../assets/images'

interface DivPosition {
  id: number
  x: number
  y: number
  rotate: number
  imageIndex: number
}

const images = [
  cartImageDemo.card1,
  cartImageDemo.card2,
  cartImageDemo.card3,
  cartImageDemo.card4,
  cartImageDemo.card5,
  cartImageDemo.card6,
  cartImageDemo.card7,
  cartImageDemo.card8,
  cartImageDemo.card9,
  cartImageDemo.card10
]

const ImageTrail = () => {
  const [divs, setDivs] = useState<DivPosition[]>([])
  const lastCreationTime = useRef(0)
  const imageIndex = useRef(0)
  const creationInterval = 200 // Create a new div every 100ms
  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const currentTime = Date.now()
    if (currentTime - lastCreationTime.current < creationInterval) {
      return // Exit if not enough time has passed since last creation
    }
    const container = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - container.left
    const y = event.clientY - container.top

    const centerOfContainer = container.width / 2
    const rotate = ((centerOfContainer - x) / (container.width / 2)) * -7

    const id = Date.now() + x + y

    const newDiv = { id, x, y, rotate, imageIndex: imageIndex.current }
    imageIndex.current = imageIndex.current + 1
    if (imageIndex.current >= images.length) imageIndex.current = 0
    setDivs((prevDivs) => [...prevDivs, newDiv])
    lastCreationTime.current = currentTime

    // Schedule removal of the div after 2000ms
    setTimeout(() => {
      setDivs((prevDivs) => prevDivs.filter((div) => div.id !== newDiv.id))
    }, 2000)
  }, [])
  return (
    <article
      className='aspect-3/2 relative grid place-items-center overflow-hidden bg-white/5'
      onMouseMove={handleMouseMove}
    >
      {divs.map((div) => (
        <div
          key={div.id}
          className='absolute aspect-3/4 w-1/5 -translate-x-1/2 -translate-y-1/2'
          style={{
            left: `${div.x}px`,
            top: `${div.y}px`
          }}
        >
          <div
            className='h-full w-full'
            style={{
              rotate: `${div.rotate}deg`
            }}
          >
            <div className='animate-trail-effect h-full w-full'>
              <img src={images[div.imageIndex]} alt='image trail' className='h-full w-full object-cover' />
            </div>
          </div>
        </div>
      ))}

      <h1 className='pointer-events-none select-none font-poppins text-[2vw] text-white'>on your trail</h1>
    </article>
  )
}

export default ImageTrail
