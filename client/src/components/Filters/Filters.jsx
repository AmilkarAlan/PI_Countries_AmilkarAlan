import React from 'react'

const Filters = ({ setAlphaFilter, setContinentFilter, setCurrentPage}) => {

      
    const handleAlphaFilterChange = (event) => {

      const newAlphaFilter = event.target.value;
  
      setAlphaFilter(newAlphaFilter);
    };
  

    const handleContinentFilterChange = (event) => {

      const newContinentFilter = event.target.value;
  
      setContinentFilter(newContinentFilter);
      setCurrentPage(1)
    };
  
    return (
      <div className="filters">
        <label htmlFor="alpha-filter">Orden alfabético:</label>
        <select id="alpha-filter" onChange={handleAlphaFilterChange}>
          <option value="none">Ninguno</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <label htmlFor="continent-filter">Continente:</label>
        <select id="continent-filter" onChange={handleContinentFilterChange}>
          <option value="all">Todos</option>
          <option value="Americas">América</option>
          <option value="Europe">Europa</option>
          <option value="Asia">Asia</option>
          <option value="Africa">África</option>
          <option value="Oceania">Oceanía</option>
        </select>
      </div>
    );
  };

export default Filters