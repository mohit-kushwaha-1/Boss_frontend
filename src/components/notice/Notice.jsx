import React from 'react'
import Navbar1 from '../home/Navbar1'
import Footer from '../Footer'
import NoticeHero from './NoticeHero'
import NoticeText from './NoticeText'
const Notice = () => {
  return (
    <>
      <Navbar1/>
      <NoticeHero/>
      <div className='container'>
      <NoticeText/>
      </div>
      <Footer/>
    </>
  )
}

export default Notice
