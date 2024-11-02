import React, { useState, useEffect } from "react";
import "../../style/DetailsHero.css";
import logo1 from "../../../public/images/logo1.png";
import { baseUrl } from "../helper/helper";
const DetailsHero = ({ data }) => {
  //   const [data,setData] = useState()

  return (
    <div>
      <div className="hero-section2">
        <div className="hero-content2">
          <div className="details-hero">
            <div className="logo">
              <img
                src={logo1}
                alt=""
                // style={{ width: "100px", height: "100px" }}
              />
            </div>

            <div className="details-hero-heading">
              <h1>{data?.jobName}</h1>

              <div  className="details-hero-heading-location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="40"
                  viewBox="0 0 30 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_137_2925)">
                    <path
                      d="M26.25 15C26.1458 11.8229 25.0521 9.16667 22.9688 7.03125C20.8333 4.94792 18.1771 3.85417 15 3.75C11.8229 3.85417 9.16667 4.94792 7.03125 7.03125C4.94792 9.16667 3.85417 11.8229 3.75 15C3.75 15.9896 4.14062 17.474 4.92188 19.4531C5.80729 21.4323 6.92708 23.5156 8.28125 25.7031C9.42708 27.526 10.5729 29.2708 11.7188 30.9375C12.9167 32.6042 14.0104 34.0625 15 35.3125C15.9896 34.0625 17.0833 32.6042 18.2812 30.9375C19.4792 29.2708 20.625 27.526 21.7188 25.7031C23.0729 23.5156 24.1927 21.4323 25.0781 19.4531C25.8594 17.474 26.25 15.9896 26.25 15ZM30 15C29.8958 17.3438 29.0625 20.0521 27.5 23.125C25.8854 26.1979 24.0625 29.1667 22.0312 32.0312C20 34.9479 18.2812 37.2656 16.875 38.9844C16.3542 39.6094 15.7292 39.9219 15 39.9219C14.2708 39.9219 13.6458 39.6094 13.125 38.9844C11.7188 37.2656 10 34.9479 7.96875 32.0312C5.9375 29.1667 4.11458 26.1979 2.5 23.125C0.9375 20.0521 0.104167 17.3438 0 15C0.104167 10.7292 1.5625 7.1875 4.375 4.375C7.1875 1.5625 10.7292 0.104168 15 0C19.2708 0.104168 22.8125 1.5625 25.625 4.375C28.4375 7.1875 29.8958 10.7292 30 15ZM17.5 15C17.5 14.2708 17.2656 13.6719 16.7969 13.2031C16.3281 12.7344 15.7292 12.5 15 12.5C14.2708 12.5 13.6719 12.7344 13.2031 13.2031C12.7344 13.6719 12.5 14.2708 12.5 15C12.5 15.7292 12.7344 16.3281 13.2031 16.7969C13.6719 17.2656 14.2708 17.5 15 17.5C15.7292 17.5 16.3281 17.2656 16.7969 16.7969C17.2656 16.3281 17.5 15.7292 17.5 15ZM8.75 15C8.80208 12.6562 9.84375 10.8594 11.875 9.60938C13.9583 8.46354 16.0417 8.46354 18.125 9.60938C20.1562 10.8594 21.1979 12.6562 21.25 15C21.1979 17.3438 20.1562 19.1406 18.125 20.3906C16.0417 21.5365 13.9583 21.5365 11.875 20.3906C9.84375 19.1406 8.80208 17.3438 8.75 15Z"
                      fill="#F8F8F8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_137_2925">
                      <rect
                        width="30"
                        height="40"
                        fill="white"
                        transform="matrix(1 0 0 -1 0 40)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <h2>{data?.location}</h2>
              </div>

              <div className="search-button1">
                <h4>Apply Now</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M7 17.5L17 7.5"
                    stroke="#7B0801"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 7.5H17V17.5"
                    stroke="#7B0801"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHero;
