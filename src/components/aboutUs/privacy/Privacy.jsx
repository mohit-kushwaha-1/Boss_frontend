import React from 'react'
import Navbar1 from '../../home/Navbar1'
import Footer from '../../Footer'
import PrivacyText from './PrivacyText'

const Privacy = () => {
  return (
    <>
        <Navbar1/>
        <div className='container'>

            <PrivacyText/>
            <Footer/>
        </div>
    </>
  )
}

export default Privacy
