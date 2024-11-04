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
      const response = await axios.get(`${ baseUrl }/api/jobPost/jobfilter?keyword=${ search }`);
      console.log("search data is now", response.data.job)
      if (response.data)
      {
        setDataNow(response.data.job);
        setLoading(true);
        navigate('/vacancies');
      }
    } catch (error)
    {
      console.log(error)
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
