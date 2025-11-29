import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const AppLayout = () => {
    
  return (
    <div className=''>
        <main className='min-h-screen w-full'>
            <Header/>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default AppLayout