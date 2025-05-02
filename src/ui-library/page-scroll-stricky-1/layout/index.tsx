import React from 'react'
import { LenisProvider } from '../components/LenisProvider'
import Header from '../components/Header'
import { GsapProvider } from '../GsapProvider'

const Layout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <LenisProvider>
        <Header />
        {children}
      </LenisProvider>
      <GsapProvider scrollTrigger />
    </>
  )
}

export default Layout
