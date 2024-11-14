import React, { useContext, useState } from "react";
// import "../../style/home/Explor.css";
import '../../../style/CandidateExplor.css'
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../helper/helper";
const CandidateExplore = () =>
{

  const [search, setSearch] = useState();
  const { dataNow, setDataNow, loading, setLoading } = useContext(DataContext);
  const navigate = useNavigate()
  const handle = async () =>
  {
    try
    {
      // Ensure baseUrl, search, and category are properly defined
      const query = new URLSearchParams();

      // Append search and category values if present
      if (search) query.append('search', search);
      // if (category) query.append('category', category);

      // Perform the API request with query parameters
      const response = await axios.get(`${ baseUrl }/api/jobPost/jobfilterHome?${ query.toString() }`);
      const data = response?.data?.job;
      // if(data?.length === 0){
      //   message.error("Result Not Found");
      //   return;
      // }

      // Check if response is successful and handle the data
      if (response)
      {
        // console.log(response.data.job)
        const data = response.data.job;
        const activeData = data.filter(item => item.status === "Active");
        setDataNow(activeData)
        setLoading(true);
        navigate('/vacancies',{state:{search}})

      }
    } catch (error)
    {
      console.error('Error occurred while fetching jobs:', error.message);
    }
  }

  return (
    <>
      <div className="explor-container1">

        <div className="candidate-explor-container1-content">
          <h1>Find a Vacancy</h1>

          <div className="candidate-explor-container1-content-input">
            <input type="text" name="" id="" placeholder="Search Vacancies by Keyword" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <button onClick={handle}>Search</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default CandidateExplore;
