import React,{useEffect} from "react";
import "../style/filter.css";

const Filter = ({setFilter,searching,searchFunction,selectedState}) => {
  const [selectedFilters, setSelectedFilters] = React.useState([]);


  const [options, setOptions] = React.useState([
    { label: "Retail and Customer Service", checked: false },
    { label: "Logistics and Warehousing", checked: false },
    { label: "Hospitality and Administrative Roles", checked: false },
    { label: "Supervisory and Management Positions", checked: false },
  ]);


  useEffect(() => {
    if (selectedState) {
      setOptions((prevOptions) =>
        prevOptions.map((option) =>
          option.label === selectedState ? { ...option, checked: true } : option
        )
      );

      setSelectedFilters([selectedState]);
    }
  }, [selectedState]);


  setFilter(selectedFilters);

  const handleClearAll = () => {
    
    setSelectedFilters([]);
    setOptions(options.map((option) => ({ ...option, checked: false })));
  };

  const handleCheckboxChange = (index) => {
    const newOptions = [...options];
    newOptions[index].checked = !newOptions[index].checked;
    setOptions(newOptions);

    const newSelectedFilters = newOptions
      .filter((option) => option.checked)
      .map((option) => option.label);
    setSelectedFilters(newSelectedFilters);

  };

  return (
    <div>
      <div className="filter-container">
        <div className="selected-filters">
          <span className="selected-filters-">Selected Filters:</span>
          {selectedFilters.map((filter, index) => (
            <span key={index} className="filter-tag">
              {filter}{" "}
              <button
                className="remove-btn"
                onClick={() => handleCheckboxChange(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.00022 8.9775L5.33072 11.6472C5.18983 11.7879 5.02966 11.8556 4.85022 11.85C4.67077 11.8444 4.51061 11.7713 4.36972 11.6305C4.22894 11.4896 4.15855 11.3267 4.15855 11.1417C4.15855 10.9567 4.22894 10.7937 4.36972 10.6528L7.02272 8L4.35305 5.3305C4.21227 5.18961 4.14466 5.02666 4.15022 4.84166C4.15577 4.65666 4.22894 4.49372 4.36972 4.35283C4.51061 4.21205 4.67355 4.14166 4.85855 4.14166C5.04355 4.14166 5.2065 4.21205 5.34739 4.35283L8.00022 7.0225L10.6697 4.35283C10.8106 4.21205 10.9736 4.14166 11.1586 4.14166C11.3436 4.14166 11.5065 4.21205 11.6474 4.35283C11.7882 4.49372 11.8586 4.65666 11.8586 4.84166C11.8586 5.02666 11.7882 5.18961 11.6474 5.3305L8.97772 8L11.6474 10.6695C11.7882 10.8104 11.8586 10.9706 11.8586 11.15C11.8586 11.3294 11.7882 11.4896 11.6474 11.6305C11.5065 11.7713 11.3436 11.8417 11.1586 11.8417C10.9736 11.8417 10.8106 11.7713 10.6697 11.6305L8.00022 8.9775Z"
                    fill="#191919"
                  />
                </svg>
              </button>
            </span>
          ))}
          <button className="clear-btn" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
        {options.map((option, index) => (
          <div key={index} className="checkbox-container">
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={option.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              <span className="checkbox-text">{option.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
