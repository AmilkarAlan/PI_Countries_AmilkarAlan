import React, { useState } from 'react'

const Pagination = ({currentPage, handlePageChange, totalPages}) => {

    return (
        <div>
            <div className="pagination">
                <label htmlFor="page-select">Página:</label>
                <select id="page-select" value={ currentPage } onChange={ handlePageChange }>
                    { Array.from({ length: totalPages }, (_, i) => (
                        <option key={ i + 1 } value={ i + 1 }>
                            { i + 1 }
                        </option>
                    )) }
                </select>
            </div>
        </div>
    )
}

export default Pagination