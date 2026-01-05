import React from 'react'
import NavbarHeader from '../components/navbar/NavbarHeader'
const LayoutPage = () => {
  return (
    <div className='mx-auto w-full'>
      <div className='w-full whitespace-nowrap bg-white fixed z-50'>
        <NavbarHeader/>
      </div>
    </div>
  )
}

export default LayoutPage
