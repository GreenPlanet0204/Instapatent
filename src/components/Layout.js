import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Header />
        <div className='main'>
          {children}
        </div>
    </div>
  )
}

export default Layout