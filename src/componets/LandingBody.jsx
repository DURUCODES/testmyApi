import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function LandingBody({ data, searchIcon }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const regions = [...new Set(data.map((item) => item.region))];

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);

    // Filter data based on the selected region
    const filtered = data.filter(
      (item) => item.region === region || region === ""
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const foundData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(foundData);
    } else {
      const filtered = data.filter(
        (item) => item.region === selectedRegion || selectedRegion === ""
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, data, selectedRegion]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (data.length > 0) {
        const foundData = data.find(
          (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
        );

        if (foundData) {
          setFilteredData([foundData]);
        } else {
          setFilteredData([]);
        }
      }
    }
  };
  return (
    <div className="landing">
      <div className="filter-container">
        <div className="input-wrapper">
          <input
            placeholder="Search for a country"
            value={searchTerm}
            onKeyDown={handleSearch}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={searchIcon} className="searchicon" />
        </div>
        <div className="select-wrapper">
          <select value={selectedRegion} onChange={handleRegionChange}>
            <option>Filter by Region</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="box">
        <ul>
          {filteredData.slice(0, 20).map((item, index) => {
            return (
              <li key={index}>
                <Link to={`/${item.name}`}>
                  <img src={item.flags.png} className="flagimg" />
                  <div className="country-name">
                    <strong>{item.name}</strong>
                    <div className="coutry-context">
                      <p>
                        Population: <span>{item.population}</span>
                      </p>

                      <p>
                        Region: <span>{item.region}</span>
                      </p>

                      <p>
                        Capital: <span>{item.capital}</span>
                      </p>

                      <p></p>
                      <p></p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LandingBody;
