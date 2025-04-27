import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import PageSrollStricky1 from './pages/page-scroll-stricky-1/PageSrollStricky1'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/page-scroll-stricky-1' element={<PageSrollStricky1 />} />
    </Routes>
  )
}

export default App
