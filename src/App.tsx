import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import PageSrollStricky1 from './pages/page-scroll-stricky-1/PageSrollStricky1'
import LiquidSideNav from './pages/liquid-side-nav/LiquidSideNav'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/page-scroll-stricky-1' element={<PageSrollStricky1 />} />
      <Route path='/liquid-side-nav' element={<LiquidSideNav />} />
      <Route path='*' element={<div>NOT FOUND</div>} />
    </Routes>
  )
}

export default App
