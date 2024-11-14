import React, { useState, useContext } from "react";
import "../style/Hero.css";
import axios from "axios";
import { baseUrl } from "./helper/helper";
import { DataContext } from "./context/DataContext";
import
  {
    message,
  } from "antd";

const App = ({ setSearchValue, setSearchData, setSearching, filter, setSearchFuction }) =>
{

  const [search, setSearch] = useState();
  console.log("searhc is", search);
  const { dataNow, setDataNow, loading, setLoading } = useContext(DataContext);
  setSearchValue(search)



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
        // navigate('/vacancies',{state:{category,search}})

      }
    } catch (error)
    {
      console.error('Error occurred while fetching jobs:', error.message);
    }
  }


  // setSearchFuction(handle);
  return (
    <div className="hero-section">
      <div className="hero-content" >
        <h1>BOSS Your Future <br></br>Find, Apply, Succeed</h1>
        <h2>Find a Vacancy</h2>
        <div className="search-bar">
          <input
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value) }}
            placeholder="Search Vacancies by Keyword"
            className="search-input"
          />
          <button className="search-button enlarge-button" onClick={handle}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default App;
