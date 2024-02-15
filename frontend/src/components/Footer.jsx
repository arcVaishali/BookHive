import React from 'react'
import { dummyimage } from '../constants/bookcard'
import { Link } from 'react-router-dom'
const Footer = () => {
    const contact = [
        "567829-272938",
        "email@gmail.com"
    ]
    const sitemap = [
        "Home",
        "About",
        "Contact"
    ]
    const socials = [
        {
            link : "https://twitter.com/",
            icon : dummyimage
        },
        {
            link : "https://twitter.com/",
            icon : dummyimage
        },
    ]
  return (
    <div className='grid grid-cols-12 col-span-12 justify-center items-center bg-black text-white p-16'>
        <div className='col-span-6'>
            <img src={dummyimage} className='w-fill h-fill'/>
        </div>
        <div className='col-span-6'>
            {
                contact.map((element, key)=>(
                    <span>{element}</span>
                ))
            }
        </div>
        <div className='col-span-12 grid grid-cols-12'>
            <div className='col-span-2'>
                <img src={dummyimage} className='w-fill h-fill'/>
            </div>
            {
                sitemap.map((element,key)=>(
                    <span className='col-span-2'>{element}</span>
                ))
            }
            {
                socials.map((element,key)=>(
                    <Link to={element.link}>
                        {/* <Icon /> */}
                    </Link>
                ))   
            }
        </div>
    </div>
  )
}

export default Footer