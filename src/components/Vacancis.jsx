import React, { useState, useEffect, useContext, } from "react";
import "../style/Vacancies.css";
import Navbar from "./Navbar";
import Card from "./Card";
import A from "./A";
import Filter from "./Filter";
import Hero from "./Hero";
import Footer from "./Footer";
import Navbar2 from "./home/Navbar2";
import axios from "axios";
import { baseUrl } from "./helper/helper";
import { DataContext } from "./context/DataContext";
import { message } from "antd";
import { useLocation } from "react-router-dom";
const Vacancis = () =>
{
  const location = useLocation()
  console.log(location.state,"location ");
  
  const { dataNow, setDataNow, loading, setLoading } = useContext(DataContext);
  const [data, setData] = useState();
  const [filter, setFilter] = useState();
  const [searchvalue, setSearchValue] = useState();
  const [searchdata, setSearchData] = useState();
  const [searching, setSearching] = useState(false);
  const [searchFunction, setSearchFuction] = useState();
  const updateData = dataNow || [];

  const [nowShowData, setNowShowData] = useState();
  console.log("updateData", updateData);
  console.log("nowShowData", nowShowData);

  // console.log("filer is ", filter);
  useEffect(() =>
  {
    fetchdata();
  }, [filter]);
  const fetchdata = async () =>
  {
    try
    {
      const response = await axios.get(baseUrl + "/api/jobPost/getAllJobs");
      console.log("response is", response.data);

      if (response.data)
      {
        // console.log("data is now");
        // console.log(filter.length);
        if (filter.length > 0)
        {
          console.log("inside filter data");
          const data = response.data.jobs;

          const activeData = data.filter(item => item.status === "Active");
          const filterdata = activeData.filter((item) =>
          {
            return filter.some((filterItem) => item?.category === filterItem);
          });
          // console.log("filterdata",filterdata);

          const rever = filterdata.reverse()
          setData(rever);
          // message.success("job filter successfully");
        } else
        {

          const data = response.data.jobs;

          const activeData = data.filter(item => item.status === "Active");

          const rever = activeData.reverse()
          setData(activeData);
          // message.success("job fetch successfully");
        }
      }
    } catch (error) { }
  };

  useEffect(() =>
  {
    if (updateData)
    {
      if (filter && filter.length > 0)
      {
        const filteredData = updateData.filter((item) =>
          filter.includes(item?.category)
        );
        setNowShowData(filteredData);
      } else
      {
        setNowShowData(updateData);
      }
    }
  }, [filter,updateData]);

  return (
    <>
      <Navbar2 />
      <Hero
        setSearchValue={setSearchValue}
        setSearchData={setSearchData}
        setSearching={setSearching}
        filter={filter}
        setSearchFuction={setSearchFuction}
      />
      <div className="container">
        <div className="vacancies-cantainer">
          {/* <h1>welcome to vacancies container</h1> */}

          <div className="vacancies-filter-container-box">
            <div className="vacancies-filter-container">
              <h1>Filter
                Results

              </h1>
              <Filter
                setFilter={setFilter}
                searchFunction={searchFunction}
                searching={searching}
                selectedState={location?.state}
              />
            </div>

            <div className="vacancies-box-container">
              <h1>
                All Vacancies (
                {/* {searching ? `${searchdata?.length}` : `${data?.length}`} */}
                <span style={{ marginRight: "5px" }}> {loading ? nowShowData?.length : data ? (data?.length) : (<>0</>)} </span>
                Results)
              </h1>
              <div className="vacancies-box-main-container">
                {/* {searching ? (
                  <A data={searchdata} />
                ) : loading ? (
                  <A data={nowShowData} />
                ) : (
                  <A data={data} />
                )} */}

                {
                  loading ? (
                    <A data={nowShowData} />
                  ) : (
                    <A data={data} />
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vacancis;
