import React ,{useState,useEffect}from 'react'
import Navbar2 from '../home/Navbar2'
import DetailsHero from './DetailsHero'
import { baseUrl } from '../helper/helper'
import DetailsText from './DetailsText'
import DetailsForm from './DetailsForm'
import Footer from '../Footer'
import axios from 'axios'
import WhatNext from './WhatNext'
import ApplicationForm from './ApplicationForm';
import ReumeForm from './ReumeForm'
const Details = () => {

 const [data,setData] = useState();
  // const data = localStorage.getItem("auth");
  // if (data) {
  //   const parseData = JSON.parse(data);

  const id1 = localStorage.getItem("id");
  const id = JSON.parse(id1)
  console.log("id is",id);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/jobPost/getJobById/${id}`);
      console.log(`${baseUrl}/api/jobPost/getJobById/${id}`)
      console.log("response is", response.data.job);

      if (response.data) {
        setData(response.data.job);
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (

    <>
    <Navbar2/>
    <DetailsHero data={data}/>
    <div className='container'>
             <div className='details-container'>
              
               <DetailsText  data={data}/>
               <WhatNext/>
               {/* <DetailsForm/> */}
               <ApplicationForm/>
               
             </div>
    </div>

   
    <Footer/>

    </>
  )
}

export default Details
