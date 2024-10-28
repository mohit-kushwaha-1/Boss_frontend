import React,{useState,useEffect} from 'react'
import '../style/Vacancies.css'
import Navbar from './Navbar'
import Card from './Card'
import A from './A'
import Filter from './Filter'
import Hero from './Hero'
import Footer from './Footer'
import Navbar1 from './home/Navbar1'
import axios from 'axios'
import { baseUrl } from './helper/helper'
import {
  message,
} from "antd";
const Vacancis = () => {


  const [data, setData] = useState();
  const[filter,setFilter] = useState();
  const[searchvalue,setSearchValue] = useState();
  const[searchdata,setSearchData] = useState();
  const[searching,setSearching] = useState(false);
  const[searchFunction,setSearchFuction] = useState();

  console.log("filer is ",filter);
  useEffect(() => {
    fetchdata();
  }, [filter]);
  const fetchdata = async () => {
    try {
      const response = await axios.get(baseUrl + "/api/jobPost/getAllJobs");
      console.log("response is", response.data);

      if (response.data) {
        
        console.log("data is now")
        console.log(filter.length);
        if (filter.length > 0) {

          console.log("inside filter data")
          const data = response.data.jobs;
          const filterdata = data.filter((item) => {
            return filter.some((filterItem) => item?.category === filterItem);
          });
          // console.log("filterdata",filterdata);
          setData(filterdata)
          message.success("job filter successfully")
        }
        else{
          setData(response.data.jobs);
          message.success("job fetch successfully")
        }

        
      }
    } catch (error) {}
  };


  return (

    <>
    <Navbar1/>
    <div className='container'>
         <Hero setSearchValue={setSearchValue} setSearchData={setSearchData} setSearching ={setSearching}  filter={filter} setSearchFuction={setSearchFuction}/>
        <div className='vacancies-cantainer'>
              
            {/* <h1>welcome to vacancies container</h1> */}

            <div className='vacancies-filter-container-box'>

            <div className='vacancies-filter-container'>
                <h1>Filter Results
                </h1>
                <Filter setFilter={setFilter} searchFunction={searchFunction}  searching={searching}/>
            </div>


            <div className='vacancies-box-container'>
                 <h1>All Vacancies ({searching?(`${searchdata?.length}`):(`${data?.length}`)}Results)</h1>
                 <div className='vacancies-box-main-container'>

                  {
                    searching?(<A  data = {searchdata}/> ):(<A  data = {data}/> )
                  }
                     
                 </div>
            </div>
            
            </div>
            
            <Footer/>
        </div>

       

    
    </div>

    </>
  )
}

export default Vacancis
