import React, { useState ,useEffect} from "react";
import { useContext } from "react";
import "../../style/Explor.css";
import { createContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
import { baseUrl } from "../helper/helper";
import { useNavigate } from "react-router-dom";
const Explor = () => {

  const { dataNow, setDataNow, loading, setLoading } = useContext(DataContext);
  const [checkloading,setCheckLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [search, setSearch] = useState(''); // State for search keyword
  const [category, setCategory] = useState(''); // State for category selection
  const navigate = useNavigate()
  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Set the selected value to the state
    setCheckLoading(true)
  };



  


  const handleSearch = async (e) => {
    e.preventDefault();
  
    try {
      // Ensure baseUrl, search, and category are properly defined
      const query = new URLSearchParams();
  
      // Append search and category values if present
      if (search) query.append('search', search);
      if (category) query.append('category', category);
  
      // Perform the API request with query parameters
      const response = await axios.get(`${baseUrl}/api/jobPost/jobfilterHome?${query.toString()}`);
  
      // Check if response is successful and handle the data
      if(response){
        // console.log(response.data.job)
        setDataNow(response.data.job)
        setLoading(true);
        navigate('/vac')

      }
    } catch (error) {
      console.error('Error occurred while fetching jobs:', error.message);
    }
  };
  

 

  console.log(dataNow,"data is now");

  return (
    <>
      <div className="explor-container">
        <div className="explor-container-content">
          <h5 id="vacancy">Explore All Our Vacancies</h5>
          <div className="explor-container-content-input11">
            <div className="explor-container-content-input12">
              <input type="text" placeholder="Search"  value={search}
               onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="explor-container-content-input22">
              <select name="expertise" id="expertise" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select a Field of Experties</option>
                <option value="Retail and Customer Service">Retail and Customer Service</option>
                <option value="Logistics and Warehousing">Logistics and Warehousing</option>
                <option value="Hospitality and Administrative Roles">Hospitality and Administrative Roles</option>
                <option value="Supervisory and Management Positions">Supervisory and Management Positions</option>
                
              </select>
            </div>
            <div className="explor-container-content-input32">
              <button onClick={handleSearch}>Find</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explor;
