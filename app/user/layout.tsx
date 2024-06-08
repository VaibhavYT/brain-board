import React from 'react'

interface LayoutProps{
    children : React.ReactNode;
}


export const Layout = ({children}:LayoutProps) => {
  return (


    <div className='flex flex-col gap-y-4'>
        <nav className='text-white bg-red-600'>Hello I am Navbar without Rerendering</nav>
        {children}
    </div>
  )
}
