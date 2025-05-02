import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import PageSrollStricky1 from './pages/page-scroll-stricky-1/PageSrollStricky1'
import LiquidSideNav from './pages/liquid-side-nav/LiquidSideNav'
import ZoomParallax from './ui-library/zoom-parallax/ZoomParallax'
import TextParallax from './ui-library/text-parallax/TextParallax'
import SplitVignette from './ui-library/split-vignette/SplitVignette'
import SplashCursor from './ui-library/splash-cursor/SplashCursor'
import JellyCursor from './ui-library/jelly-cursor/JellyCursor'
import ImageTrail from './ui-library/image-trail/ImageTrail'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/page-scroll-stricky-1' element={<PageSrollStricky1 />} />
      <Route path='/liquid-side-nav' element={<LiquidSideNav />} />
      <Route path='/zoom-parallax' element={<ZoomParallax />} />
      <Route path='/text-parallax' element={<TextParallax />} />
      <Route path='/split-vignette' element={<SplitVignette />} />
      <Route
        path='/splash-cursor'
        element={
          <div className='min-h-screen bg-black'>
            <SplashCursor />
          </div>
        }
      />
      <Route path='/jelly-cursor' element={<JellyCursor />} />
      <Route path='/image-trail' element={<ImageTrail />} />
      <Route path='*' element={<div>NOT FOUND</div>} />
    </Routes>
  )
}

export default App
