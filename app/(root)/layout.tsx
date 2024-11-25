import React from 'react'
import { Nav } from '@/components/nav'

const Layout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <div>
        <Nav/>
        {children}
    </div>
  )
}

export default Layout