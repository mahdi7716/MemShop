import React from 'react'
import Link from 'next/link'
import { faFacebook, FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'
import Wrapper from './Wrapper'

const Footer = () => {
  return (

    <footer className='bg-black text-white pt-14 pb-3'>
      <Wrapper className='flex justify-between flex-col md:flex-row gap-[50px] md:gap-0'>
        <div className='flex gap-[50px] md-gap-[75px] lg-gap-[100px] flex-col md:flex-row'>
          <div className='flex flex-col shrink-0 gap-3'>
            <div className='font-oswald font-medium uppercase text-sm cursor-pointer'>
              Find Store
            </div>
            <div className='font-oswald font-medium uppercase text-sm cursor-pointer'>
              Become a Partner
            </div>
            <div className='font-oswald font-medium uppercase text-sm cursor-pointer'>
              SignUp For Email
            </div>
            <div className='font-oswald font-medium uppercase text-sm cursor-pointer'>
              Send a FeedBack
            </div>
            <div className='font-oswald font-medium uppercase text-sm cursor-pointer'>
              Student Discount
            </div>
          </div>
          <div className='flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0'>
            <div className='flex flex-col gap-3'>
              <div className='font-oswald font-medium uppercase text-sm'>
                Get Help
              </div>
              <div className='font-oswald font-medium uppercase text-sm'>
                Order Status
              </div>
              <div className='font-oswald font-medium uppercase text-sm'>
                Delivery
              </div>
              <div className='font-oswald font-medium uppercase text-sm'>
                Returns
              </div>
              <div className='font-oswald font-medium uppercase text-sm'>
                Payment Options
              </div>
              <div className='font-oswald font-medium uppercase text-sm'>
                Contact Us
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='font-oswald font-medium uppercase text-sm'>
                About Link
              </div>
              <div className='font-oswald font-medium uppercase text-sm'>
                News
              </div>
              <div className='font-oswald font-medium uppercase text-sm'>
                Careers
              </div>
              <div className='font-oswald font-medium uppercase text-sm'>
                Investors
              </div>
              <div className='font-oswald font-medium uppercase text-sm'>
                Sustainability
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center md:justify-start">
          <div onClick={() =>
            window.open("https://facebook.com", 'blank')
          }
            className='w-10 h-10 rounded-full bg-white/[0.25] flex  items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
            <FaFacebook size={20} />
          </div>
          <Link
            href="https://facebook.com"
            className='w-10 h-10 rounded-full bg-white/[0.25] flex  items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
            <FaTwitter size={20} />
          </Link>
          <div className='w-10 h-10 rounded-full bg-white/[0.25] flex  items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
            <FaYoutube size={20} />
          </div>
          <div className='w-10 h-10 rounded-full bg-white/[0.25] flex  items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer'>
            <FaInstagram size={20} />
          </div>
        </div>
      </Wrapper>
      <Wrapper className='flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0'>
        <div className='text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left'>
          © 2023 Nike, Inc. All Rights Reserved
        </div>
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Privacy Policy
          </div>


        </div>


      </Wrapper>

    </footer>
  )
}

export default Footer