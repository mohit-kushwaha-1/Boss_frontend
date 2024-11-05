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
      const response = await axios.get(`${ baseUrl }/api/jobPost/jobfilter?keyword=${ search }`);
      console.log("search data is now", response.data.job)

      if (response.data)
      {
        setDataNow(response.data.job)
        setLoading(true);
      }


      //  if(response.data){
      //   // setSearchData(response.data.job)
      //   setSearching(true);

      //   if (filter.length > 0) {

      //     console.log("inside filter data")
      //     const data = response.data.job;
      //     const filterdata = data.filter((item) => {
      //       return filter.some((filterItem) => item?.category === filterItem);
      //     });
      //     console.log("filterdata",filterdata);
      //     setSearchData(filterdata)
      //     // handle();
      //   }
      //   else{
      //     setSearchData(response.data.job)
      //     message.success("search data succesfully")
      //   }
      //  }
    } catch (error)
    {
      console.log(error)
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
