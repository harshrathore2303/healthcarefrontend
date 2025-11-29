import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

  return (
    <nav className='py-2 px-10 flex justify-between items-center shadow'>
        <Link to={'/'}>
            <img src="../assets/logo.png" alt="logo" className='h-20 w-20'/>
        </Link>

        <div className='flex justify-between' style={{width: "40%"}}>
            <Link to={'/'}>
                Home
            </Link>
            <Link to={'/shop'}>
                Shop
            </Link>
            <Link to={'/about'}>
                About Us
            </Link>
            <Link to={'/faq'}>
                FAQ
            </Link>
            <Link to={'/blog'}>
                Blog
            </Link>
            <Link to={'/contact'}>
                Contact Us
            </Link>
            <Link to={'/cart'}>
                <img src="../assets/cart.png" alt="" />
            </Link>
        </div>
    </nav>
  )
}

export default Header