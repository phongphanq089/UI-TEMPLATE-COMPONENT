'use client'

import React, { useCallback, useRef, useState } from 'react'

// import type {Config} from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";
// import typonographyPlugin from "@tailwindcss/typography";

// Tailwind Config for trail-effect keyframe
// theme: {
//     extend: {
//         keyframes: {
//             "trail-effect": {
//                 "0%": {transform: "scale(0)"},
//                 "30%": {transform: "scale(1)"},
//                 "80%, 100%": {
//                     transform: "scale(1) translateY(800px)",
//                 },
//             },
//         },
//         animation: {
//             "trail-effect": "trail-effect 2s ease-out forwards",
//         },
//     },
// }

interface DivPosition {
  id: number
  x: number
  y: number
  rotate: number
  imageIndex: number
}

const images = [
  'https://ik.imagekit.io/khoaphan/playground/Image%20Trail/Studio%20Ghibli%20style%20illustration.webp?updatedAt=1727515247238',
  'https://ik.imagekit.io/khoaphan/playground/Image%20Trail/Uma%20garota%20com%20cabelos%20longos%20e%20lisos%20no%20estilo%20vi.webp?updatedAt=1727515221917',
  'https://ik.imagekit.io/khoaphan/playground/Image%20Trail/Une%20fille%20long%20cheveux%20lisse%20dans%20le%20style%2090_s%20an.webp?updatedAt=1727515221839',
  'https://ik.imagekit.io/khoaphan/playground/Image%20Trail/Une%20fille%20avec%20un%20s%C3%A8che-cheveux%20dans%20le%20style%2090_s%20(1).webp?updatedAt=1727515221821',
  'https://ik.imagekit.io/khoaphan/playground/Image%20Trail/A%20logo%20for%20a%20female%20grunge%20hip%20hop%20artist%20named%20Sa%20(1).webp?updatedAt=1727515221821',
  'https://ik.imagekit.io/khoaphan/playground/Image%20Trail/A%20FULLY%20COLORED%20picture%20for%20coloring%20of%20an%20anime%20g.webp?updatedAt=1727515221756',
  'https://ik.imagekit.io/khoaphan/playground/Image%20Trail/A%20logo%20for%20a%20female%20grunge%20hip%20hop%20artist%20named%20Sa.webp?updatedAt=1727515221580',
  'https://ik.imagekit.io/khoaphan/playground/Image%20Trail/beautiful%20girl%20(1).webp?updatedAt=1727515221535',
  'https://ik.imagekit.io/khoaphan/playground/Image%20Trail/beautiful%20girl.webp?updatedAt=1727515221501',
  'https://ik.imagekit.io/khoaphan/playground/Image%20Trail/Une%20fille%20avec%20un%20s%C3%A8che-cheveux%20dans%20le%20style%2090_s.webp?updatedAt=1727515220837'
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
