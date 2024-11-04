import React, { useState, useEffect ,useContext} from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import "../../style/home/homeCard.css";
import img1 from "../../../public/images/img1.png";
import { baseUrl } from "../helper/helper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const HomeCard = () => {
  const [data, setData] = useState();
  const { dataNow, setDataNow, loading, setLoading,id,setId } = useContext(DataContext);
  const navigate = useNavigate()
  const handlevac = ()=>{
    navigate('/vac')
  }
  console.log(data, "data is now");
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    try {
      const response = await axios.get(baseUrl + "/api/jobPost/getAllJobs");
      console.log("response is", response.data.jobs);

      if (response.data) {
        // console.log("data is now");
        // console.log(filter.length);
         const a = response.data.jobs
        let slicedArray = a.slice(0, 3); 
        setData(slicedArray);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handle = (id)=>{
    console.log(id)
    setId(id)
     navigate('/details');
  }
  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title" >Ready to Take Your Career to the Next Level?</h1>
        <button className="browse-button" onClick={handlevac}>
          Browse All Opportunities
          <MdArrowOutward className="icon" />
        </button>

        {/* Job Cards Section */}
        <div className="job-cards">
          {/* Job Card 1 */}


        {
          data?.map((item)=>{
             return(
              <>

         <div className="job-card">
           
              <img
                // src={img1}
                src={`${baseUrl}${item?.image}`}
                alt="People working in an office"
                className="job-image"
              />
             

           
              <h2 className="job-title">{item?.jobName}</h2>
            

            
              <p className="location">{item?.location}</p>
            

            <div className="details">
              <ul className="job-details">
                
                  <li className="detail-item">
                    <FaBriefcase className="icon-detail" /> {item?.jobType}
                  </li>
                

                
                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" />
                    {item?.upper_jd[0]}
                  </li>
                


                  <li className="detail-item">
                    <FaGraduationCap className="icon-detail" />
                    {item?.upper_jd[1]}
                  </li>
                
              </ul>
            </div>

            <button className="vacancy-button" onClick={()=>{handle(`${item?._id}`)}}>
              View Vacancy <MdArrowOutward className="icon" />
            </button>
          </div>
              </>
             )
          })
        }

         
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
