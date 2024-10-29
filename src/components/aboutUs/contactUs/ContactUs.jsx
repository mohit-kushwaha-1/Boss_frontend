import React from 'react'
import Navbar1 from '../../home/Navbar1'
import Footer from '../../Footer'
import ContactUsHero from './ContactUsHero'
import ContactForm from './ContactForm'

const ContactUs = () => {
  return (
    <>
        <Navbar1/>
        <div className='container'>
            <ContactUsHero/>
            <ContactForm/>
             <Footer/>
        </div>
    </>
  )
}

export default ContactUs
