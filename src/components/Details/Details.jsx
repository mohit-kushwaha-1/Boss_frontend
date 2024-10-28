import React ,{useState,useEffect}from 'react'
import Navbar1 from '../home/Navbar1'
import DetailsHero from './DetailsHero'
import { baseUrl } from '../helper/helper'
import DetailsText from './DetailsText'
import DetailsForm from './DetailsForm'
import Footer from '../Footer'
import axios from 'axios'
import ApplicationForm from './ApplicationForm'
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
    <Navbar1/>
    <div className='container'>
             <div className='details-container'>
               <DetailsHero data={data}/>
               <DetailsText  data={data}/>
               {/* <DetailsForm/> */}
               <ApplicationForm/>
               <Footer/>
             </div>
    </div>

    </>
  )
}

export default Details
