import React from "react";
import "../../style/home/Explor.css";
const Explor = () => {
  return (
    <>
      <div className="explor-container">
        <div className="explor-container-content">
          <h5>Explore all our vacancies</h5>
          <div className="explor-container-content-input">
            <div className="explor-container-content-input1">
              <input type="text" placeholder="search" />
            </div>
            <div className="explor-container-content-input2">
              <select name="" id="">
                <option value="">Select a field of experties</option>
                <option value="">option 1</option>
                <option value="">option 2</option>
                <option value="">option 3</option>
              </select>
            </div>
            <div className="explor-container-content-input3">
              <button>find</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explor;
