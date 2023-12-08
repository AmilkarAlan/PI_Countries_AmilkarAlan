import style from "./Filters.module.css"
const Filters = ({ setAlphaFilter, setContinentFilter, setCurrentPage, setIndependetFilter }) => {


  const handleAlphaFilterChange = (e) => {
    const newValue = e.target.value

    setAlphaFilter(newValue);
  };


  const handleContinentFilterChange = (e) => {
    const newValue = e.target.value;
    setContinentFilter(newValue);
    setCurrentPage(1)
  };

  const handleIndependentFilter = (e) => {
    const newValue = e.target.value;

    setIndependetFilter(newValue);
  }

  const alphaFilter = [
    { title: "No-order", value: "none" },
    { title: "A-Z", value: "asc" },
    { title: "Z-A", value: "desc" },
  ]

  const independentFilt = [
    { title: "None", value: "none" },
    { title: "Landlocked", value: true },
    { title: "With coastline", value: false },
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

    <div>

      <div className={ style.filterContainer }>
        <div className={ style.buttonsContainer }>


          { alphaFilter.map((alpha, index) => {
            return (
              <div className={ style.buttonsPad } key={ index }>
                <button key={ index } value={ alpha.value } onClick={ handleAlphaFilterChange }>

                  { alpha.title }

                </button>
              </div>
            )
          }) }


        </div>
      </div>
      <div className={ style.filterContainer + " " + style.scroll }>
        <div className={ style.buttonsContainer }>


          { continentFilter.map((continent, index) => {
            return (
              <div className={ style.buttonsPad } key={ index }>

                <button value={ continent.value } onClick={ handleContinentFilterChange }>

                  { continent.title }

                </button>
              </div>

            )
          }) }

        </div>
      </div>
      <div className={ style.filterContainer }>
        <div className={ style.buttonsContainer }>

          { independentFilt.map((independent, index) => {
            return (
              <div className={ style.buttonsPad } key={ index }>
                <button key={ index } value={ independent.value } onClick={ handleIndependentFilter }>

                  { independent.title }

                </button>
              </div>
            )
          }) }

        </div>
      </div>

    </div>




  );
};

export default Filters