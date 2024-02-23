import React from 'react'
import image from "../assets/Image.png"
import { Link } from 'react-router-dom'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'

const Navbar = () => {
    const nav = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Contact',
            link: '/contact'
        },
        {
            title: 'Books',
            link: '/books-gallery'
        }
    ]
  return (
    <div className='grid grid-cols-12 col-span-12 p-4 justify-center items-center'>
        <div className='col-span-2'>
            <img src={image} alt='logo' className='h-16' />
        </div>
        <div className='col-span-8'>
            {
                nav.map((item, index) => (
                    <Link to={item.link} className='col-span-2 mx-2'>{item.title}</Link>
                ))
            }
        </div>
        <div className='col-span-2'>
            <PrimaryButton location="/login" text='Login' />
            <SecondaryButton location="/signup" text='Sign Up' />
        </div>
    </div>
  )
}

export default Navbar