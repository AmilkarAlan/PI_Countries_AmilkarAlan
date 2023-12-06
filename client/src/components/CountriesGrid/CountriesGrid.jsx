
import style from "./CountriesGrid.module.css"
import MiniCard from "../MiniCard/MiniCard"
import { useState } from "react"
import Pagination from "../Pagination/Pagination"


const CountriesGrid = ({ filteredCountries, setCurrentPage, currentPage}) => {

    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const toShow = filteredCountries.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);

    const handlePageChange = (e) => {
        const newPage = Number(e.target.value);
        setCurrentPage(newPage)
    }
    return (
        <div className={ style.main_countriesGrid }>
            {
                toShow.map((item, index) => {
                    return (
                        < MiniCard key={ index } image={ item.image } officialName={ item.name.official } commonName={ item.name.common } />

                    )
                })
            }

            <Pagination 
            handlePageChange={handlePageChange} 
            totalPages={totalPages}
            currentPage={currentPage}/>
        </div>
    )
}

export default CountriesGrid