import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
            <div>
                <img className='mb-5 w-40' src={assets.logo}/>
                <p className='w-full md:w-2/3 text-gray-700 leading-6'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I</p>
            </div>




            <div>
                <p className='text-xl font-medium text-gray-600'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-700'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>





            <div>
                <p className='text-xl font-medium text-gray-600'>Developed and Designed By</p>
                <ul className='flex flex-col gap-2 text-gray-700'>
                    <li>Kaushik Borah</li>
                    <li>kaushikborah4080@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>CopyRight 2024@PrescriBe All Rights Reservd</p>
        </div>
    </div>
  )
}

export default Footer
