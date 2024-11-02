import React from 'react'
import Navbar5 from '../../home/Navbar5'
import Footer from '../../Footer'
import ContactUsHero from './ContactUsHero'
import ContactForm from './ContactForm'

const ContactUs = () => {
  return (
    <>
        <Navbar5/>
        <ContactUsHero/>
        <div className='container'>
            <ContactForm/>
        </div>
        <Footer/>
    </>
  )
}

export default ContactUs
