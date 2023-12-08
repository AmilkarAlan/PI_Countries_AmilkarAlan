
import style from "./CountriesGrid.module.css"
import MiniCard from "../MiniCard/MiniCard"
import Pagination from "../Pagination/Pagination"
import { Link } from "react-router-dom";


const CountriesGrid = ({ filteredCountries, setCurrentPage, currentPage }) => {

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
            <div className={ style.cardsContainer }>
                <div>
                    <ul>
                        {
                            toShow.map((item, index) => {
                                return (
                                    <li key={ index }>
                                        <Link to={ `detail/${item.id}` }>
                                            < MiniCard image={ item.image } officialName={ item.name.official } commonName={ item.name.common } />
                                        </Link>
                                    </li>


                                )
                            })
                        }
                    </ul>
                </div>

                <Pagination
                    handlePageChange={ handlePageChange }
                    totalPages={ totalPages }
                    currentPage={ currentPage } />
            </div>


        </div>
    )
}

export default CountriesGrid