import style from "./Filters.module.css"
const Filters = ({ setAlphaFilter, setContinentFilter, setCurrentPage }) => {


  const handleAlphaFilterChange = (event) => {
    const newAlphaFilter = event.target.value;
    setAlphaFilter(newAlphaFilter);
  };


  const handleContinentFilterChange = (event) => {
    const newContinentFilter = event.target.value;
    setContinentFilter(newContinentFilter);
    setCurrentPage(1)
  };

  const alphaFilter = [
    { title: "No-order", value: "none" },
    { title: "A-Z", value: "asc" },
    { title: "Z-A", value: "desc" },
  ]
  
  
  const continentFilter = [
    { title: "All", value: "all" },
    { title: "Americas", value: "Americas" },
    { title: "Europe", value: "Europe" },
    { title: "Asia", value: "Asia" },
    { title: "Africa", value: "Africa" },
    { title: "Oceania", value: "Oceania" },
  ]


  return (

    <div className={ style.filterContainer }>
      <div className={ style.filterGrid }>
        <div className={ style.filters }>
          <div className={ style.alphaFilter }>
            <p>Alphabetical order: </p>
            { alphaFilter.map((label, index) => {
              return (
                <button key={ index } value={ label.value } onClick={ handleAlphaFilterChange }>{ label.title }</button>

              )
            }) }
          </div>
          <div className={ style.continentFilter }>
            <p>Continent Order</p>
          { continentFilter.map((label, index) => {
              return (
                <button key={ index } value={ label.value } onClick={ handleContinentFilterChange }>{ label.title }</button>

              )
            }) }
          </div>

        </div>

      </div>

    </div>
  );
};

export default Filters