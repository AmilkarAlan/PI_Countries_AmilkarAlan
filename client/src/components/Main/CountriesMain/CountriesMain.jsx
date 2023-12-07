import style from "./CountriesMain.module.css"
import ContinentBox from "../ContinentBox/ContinentBox"

const CountriesMain = ({ countries }) => {
  const continents = [

    { title: "Americas", value: "Americas" },
    { title: "Europe", value: "Europe" },
    { title: "Asia", value: "Asia" },
    { title: "Africa", value: "Africa" },
    { title: "Oceania", value: "Oceania" },
  ]
  return (
    <div className={ style.continentContainer }>
      {
        continents.map((continent, index) => {
          return (
            <ContinentBox
              key={ index } continentInfo={ continent } 
              countries={ countries } />
          )
        })
      }

    </div>
  )
}

export default CountriesMain