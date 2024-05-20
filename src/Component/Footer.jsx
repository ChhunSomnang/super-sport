import React from 'react'
import facebook_icon from './Assets/facebook_icon.png'
import ig_icon from './Assets/ig_icon.png'
import telegram_icon from './Assets/telegram_icon.png'

const Footer = () => {
  return (
    <div className='bg-blue-500 w-100% h-60 mt-14 '>
        <ul className='flex flex-row justify-center gap-x-14 py-14 '>
            <li>
                <img src={facebook_icon } alt=''/>
            </li>
            <li>
                <img src={ig_icon} alt=''/>
            </li>
            <li>
                <img src={telegram_icon} alt=''/>
            </li>
        </ul>
        <ul className='flex flex-row justify-center gap-x-14 text-xl text-white'>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Contact Us
            </li>
        </ul>
    </div>
  )
}

export default Footer