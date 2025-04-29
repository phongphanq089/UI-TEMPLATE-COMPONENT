import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center'>
        <h1 className='text-4xl font-bold text-purple-600 mb-4'>Yo! Chào mừng bạn! 🎉</h1>
        <p className='text-gray-700 mb-6'>
          Đây là dự án React siêu xịn với Vite, TypeScript, Tailwind, ESLint và Shadcn/UI.
        </p>
        <Link to={'/liquid-side-nav'}>
          <Button className='bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition'>
            Let's Code!
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
