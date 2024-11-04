import React, { useState, useEffect, useContext } from "react";
import "./A.css";
import img1 from "../../public/images/img1.png";
import axios from "axios";
import { baseUrl } from "./helper/helper";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./context/DataContext";

console.log(img1);
const vacancies = [
  {
    title: "Reservations/Collections Clerk",
    location: "Philipsburg, Sint Maarten",
    type: "Full Time",
    degree: "Bachelor",
    img: { img1 },
  },
  {
    title: "Commercial Data Analyst",
    location: "Philipsburg, Sint Maarten",
    type: "Full Time",
    degree: "Master",
    img: { img1 },
  },
  {
    title: "Fuel Operator",
    location: "Philipsburg, Sint Maarten",
    type: "Full Time",
    degree: "No Degree",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Customer Service Agent (CSA)",
    location: "Philipsburg, Sint Maarten",
    type: "Full Time",
    degree: "Bachelor",
    img: "https://via.placeholder.com/150",
  },
  // More cards can be added here
];

const Card = ({ vacancy }) => (
  <div className="card">
    <div style={{ width: "100%" }}>
      <img src={`${ baseUrl }/${ vacancy?.image }`} alt="" className="card-img" />
    </div>

    <div style={{ width: "90%" }}>
      <h3>{vacancy?.jobType}</h3>
      <p>
        <i className="fas fa-map-marker-alt"></i> {vacancy?.location}
      </p>

      <div className="card-icons">
        <div className="card-icons-space">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
          >
            <g clip-path="url(#clip0_208_518)">
              <path
                d="M13.625 7.5C13.5729 5.91146 13.026 4.58333 11.9844 3.51562C10.9167 2.47396 9.58854 1.92708 8 1.875C6.41146 1.92708 5.08333 2.47396 4.01562 3.51562C2.97396 4.58333 2.42708 5.91146 2.375 7.5C2.375 7.99479 2.57031 8.73698 2.96094 9.72656C3.40365 10.7161 3.96354 11.7578 4.64062 12.8516C5.21354 13.763 5.78646 14.6354 6.35938 15.4688C6.95833 16.3021 7.50521 17.0312 8 17.6562C8.49479 17.0312 9.04167 16.3021 9.64062 15.4688C10.2396 14.6354 10.8125 13.763 11.3594 12.8516C12.0365 11.7578 12.5964 10.7161 13.0391 9.72656C13.4297 8.73698 13.625 7.99479 13.625 7.5ZM15.5 7.5C15.4479 8.67188 15.0312 10.026 14.25 11.5625C13.4427 13.099 12.5312 14.5833 11.5156 16.0156C10.5 17.474 9.64062 18.6328 8.9375 19.4922C8.67708 19.8047 8.36458 19.9609 8 19.9609C7.63542 19.9609 7.32292 19.8047 7.0625 19.4922C6.35938 18.6328 5.5 17.474 4.48438 16.0156C3.46875 14.5833 2.55729 13.099 1.75 11.5625C0.96875 10.026 0.552083 8.67188 0.5 7.5C0.552083 5.36458 1.28125 3.59375 2.6875 2.1875C4.09375 0.78125 5.86458 0.052084 8 0C10.1354 0.052084 11.9062 0.78125 13.3125 2.1875C14.7188 3.59375 15.4479 5.36458 15.5 7.5ZM9.25 7.5C9.25 7.13542 9.13281 6.83594 8.89844 6.60156C8.66406 6.36719 8.36458 6.25 8 6.25C7.63542 6.25 7.33594 6.36719 7.10156 6.60156C6.86719 6.83594 6.75 7.13542 6.75 7.5C6.75 7.86458 6.86719 8.16406 7.10156 8.39844C7.33594 8.63281 7.63542 8.75 8 8.75C8.36458 8.75 8.66406 8.63281 8.89844 8.39844C9.13281 8.16406 9.25 7.86458 9.25 7.5ZM4.875 7.5C4.90104 6.32812 5.42188 5.42969 6.4375 4.80469C7.47917 4.23177 8.52083 4.23177 9.5625 4.80469C10.5781 5.42969 11.099 6.32812 11.125 7.5C11.099 8.67188 10.5781 9.57031 9.5625 10.1953C8.52083 10.7682 7.47917 10.7682 6.4375 10.1953C5.42188 9.57031 4.90104 8.67188 4.875 7.5Z"
                fill="#24303A"
              />
            </g>
            <defs>
              <clipPath id="clip0_208_518">
                <rect
                  width="15"
                  height="20"
                  fill="white"
                  transform="matrix(1 0 0 -1 0.5 20)"
                />
              </clipPath>
            </defs>
          </svg>
          {/* <p> {degree}</p> */}
          <div></div>
        </div>
        <div className="card-icons-space">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 21C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V8C2 7.45 2.19583 6.97917 2.5875 6.5875C2.97917 6.19583 3.45 6 4 6H8V4C8 3.45 8.19583 2.97917 8.5875 2.5875C8.97917 2.19583 9.45 2 10 2H14C14.55 2 15.0208 2.19583 15.4125 2.5875C15.8042 2.97917 16 3.45 16 4V6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V12.275C21.7 12.0583 21.3833 11.8708 21.05 11.7125C20.7167 11.5542 20.3667 11.4167 20 11.3V8H4V19H11.075C11.125 19.35 11.2 19.6917 11.3 20.025C11.4 20.3583 11.525 20.6833 11.675 21H4ZM10 6H14V4H10V6ZM18 23C16.6167 23 15.4375 22.5125 14.4625 21.5375C13.4875 20.5625 13 19.3833 13 18C13 16.6167 13.4875 15.4375 14.4625 14.4625C15.4375 13.4875 16.6167 13 18 13C19.3833 13 20.5625 13.4875 21.5375 14.4625C22.5125 15.4375 23 16.6167 23 18C23 19.3833 22.5125 20.5625 21.5375 21.5375C20.5625 22.5125 19.3833 23 18 23ZM18.5 17.8V15H17.5V18.2L19.65 20.35L20.35 19.65L18.5 17.8Z"
              fill="#232323"
            />
          </svg>
          {/* <p><i className="fas fa-clock"></i> {type}</p> */}
        </div>
      </div>
    </div>
    <button className="view-button" >View Vacancy</button>
  </div>
);

const App = ({ data }) =>
{
  // const [data, setData] = useState();
  const { dataNow, setDataNow, loading, setLoading, id, setId } = useContext(DataContext);
  const Navigate = useNavigate()

  // useEffect(() => {
  //   fetchdata();
  // }, []);
  // const fetchdata = async () => {
  //   try {
  //     const response = await axios.get(baseUrl + "/api/jobPost/getAllJobs");
  //     console.log("response is", response.data.jobs.image);

  //     if (response.data) {
  //       setData(response.data.jobs);
  //     }
  //   } catch (error) {}
  // };

  const handle = (id) =>
  {
    console.log(id)
    setId(id)
    Navigate('/job-details');
  }

  return (
    <div className="main-container">
      <div className="vacancy-container">
        {data?.map((vacancy, index) => (
          <>
            <div className="card">
              <div style={{ width: "100%" }}>
                <img
                  src={`${ baseUrl }${ vacancy?.image }`}
                  alt=""
                  className="card-img"
                />
              </div>

              <div style={{ width: "90%" }}>
                <h3>{vacancy?.jobName}</h3>
                <p>
                  <i className="fas fa-map-marker-alt"></i> {vacancy?.location}
                </p>

                <div className="card-icons">
                  <div className="card-icons-space">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 21C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V8C2 7.45 2.19583 6.97917 2.5875 6.5875C2.97917 6.19583 3.45 6 4 6H8V4C8 3.45 8.19583 2.97917 8.5875 2.5875C8.97917 2.19583 9.45 2 10 2H14C14.55 2 15.0208 2.19583 15.4125 2.5875C15.8042 2.97917 16 3.45 16 4V6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V12.275C21.7 12.0583 21.3833 11.8708 21.05 11.7125C20.7167 11.5542 20.3667 11.4167 20 11.3V8H4V19H11.075C11.125 19.35 11.2 19.6917 11.3 20.025C11.4 20.3583 11.525 20.6833 11.675 21H4ZM10 6H14V4H10V6ZM18 23C16.6167 23 15.4375 22.5125 14.4625 21.5375C13.4875 20.5625 13 19.3833 13 18C13 16.6167 13.4875 15.4375 14.4625 14.4625C15.4375 13.4875 16.6167 13 18 13C19.3833 13 20.5625 13.4875 21.5375 14.4625C22.5125 15.4375 23 16.6167 23 18C23 19.3833 22.5125 20.5625 21.5375 21.5375C20.5625 22.5125 19.3833 23 18 23ZM18.5 17.8V15H17.5V18.2L19.65 20.35L20.35 19.65L18.5 17.8Z"
                        fill="#232323"
                      />
                    </svg>
                    {/* <p><i className="fas fa-clock"></i> {type}</p> */}
                    <p>{vacancy?.jobType}</p>
                  </div>

                  <div className="card-icons-space">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 21L5 17.2V11.2L1 9L12 3L23 9V17H21V10.1L19 11.2V17.2L12 21ZM12 12.7L18.85 9L12 5.3L5.15 9L12 12.7ZM12 18.725L17 16.025V12.25L12 15L7 12.25V16.025L12 18.725Z"
                        fill="#111111"
                      />
                    </svg>
                    <p> {vacancy?.upper_jd[0]}</p>
                    <div></div>
                  </div>

                  <div className="card-icons-space" style={{ marginRight: "15px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 21L5 17.2V11.2L1 9L12 3L23 9V17H21V10.1L19 11.2V17.2L12 21ZM12 12.7L18.85 9L12 5.3L5.15 9L12 12.7ZM12 18.725L17 16.025V12.25L12 15L7 12.25V16.025L12 18.725Z"
                        fill="#111111"
                      />
                    </svg>
                    <p> {vacancy?.upper_jd[1]}</p>
                    <div></div>
                  </div>
                </div>
              </div>
              <button className="view-button" onClick={() => { handle(`${ vacancy?._id }`) }}>View Vacancy</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default App;
