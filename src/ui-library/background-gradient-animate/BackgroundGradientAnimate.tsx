import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react'
import { useEffect } from 'react'
import { animate, svg, stagger } from 'animejs'
const BackgroundGradientAnimate = () => {
  useEffect(() => {
    animate(svg.createDrawable('.line'), {
      draw: ['0 0', '0 1', '1 1'],
      ease: 'inOutQuad',
      duration: 2000,
      delay: stagger(100),
      loop: true
    })
  }, [])
  return (
    <div className='realtive h-screen '>
      <ShaderGradientCanvas
        style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}
        className='bg-1'
        lazyLoad={undefined}
        fov={undefined}
        pixelDensity={1}
        pointerEvents='none'
      >
        <ShaderGradient
          animate='on'
          type='waterPlane'
          wireframe={false}
          shader='defaults'
          uTime={8}
          uSpeed={0.3}
          uStrength={1.5}
          uDensity={1.5}
          uFrequency={0}
          uAmplitude={0}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          color1='#242880'
          color2='#8d7dca'
          color3='#212121'
          reflection={0.1}
          // View (camera) props
          cAzimuthAngle={180}
          cPolarAngle={80}
          cDistance={2.8}
          cameraZoom={9.1}
          // Effect props
          lightType='3d'
          brightness={1}
          envPreset='city'
          grain='on'
          // Tool props
          toggleAxis={false}
          zoomOut={false}
          hoverState=''
          // Optional - if using transition features
          enableTransition={false}
        />
      </ShaderGradientCanvas>
      <div className='bg-1 flex items-center justify-center h-full'>
        <svg viewBox='0 0 304 112' className='relative z-10'>
          <g
            stroke='#fcd34d'
            fill='#fef3c7'
            fillRule='evenodd'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
          >
            <path
              className='line'
              d='M59 90V56.136C58.66 46.48 51.225 39 42 39c-9.389 0-17 7.611-17 17s7.611 17 17 17h8.5v17H42C23.222 90 8 74.778 8 56s15.222-34 34-34c18.61 0 33.433 14.994 34 33.875V90H59z'
            />
            <polyline className='line' points='59 22.035 59 90 76 90 76 22 59 22' />
            <path
              className='line'
              d='M59 90V55.74C59.567 36.993 74.39 22 93 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90H59z'
            />
            <polyline className='line' points='127 22.055 127 90 144 90 144 22 127 22' />
            <path
              className='line'
              d='M127 90V55.74C127.567 36.993 142.39 22 161 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90h-17z'
            />
            <path className='line' d='M118.5 22a8.5 8.5 0 1 1-8.477 9.067v-1.134c.283-4.42 3.966-7.933 8.477-7.933z' />
            <path className='line' d='M144 73c-9.389 0-17-7.611-17-17v-8.5h-17V56c0 18.778 15.222 34 34 34V73z' />
            <path
              className='line'
              d='M178 90V55.74C178.567 36.993 193.39 22 212 22c18.778 0 34 15.222 34 34v34h-17V56c0-9.389-7.611-17-17-17-9.225 0-16.66 7.48-17 17.136V90h-17z'
            />
            <path
              className='line'
              d='M263 73c-9.389 0-17-7.611-17-17s7.611-17 17-17c9.18 0 16.58 7.4 17 17h-17v17h34V55.875C296.433 36.994 281.61 22 263 22c-18.778 0-34 15.222-34 34s15.222 34 34 34V73z'
            />
            <path className='line' d='M288.477 73A8.5 8.5 0 1 1 280 82.067v-1.134c.295-4.42 3.967-7.933 8.477-7.933z' />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default BackgroundGradientAnimate
