import React, { useState, useEffect } from "react";
import { BiSearch } from 'react-icons/bi'
import { SearchContext } from "../../providers/search";

const Searchbox = () => {
    const [search, setSearch] = useState('')
    const {setSearchList, searchList}=React.useContext(SearchContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search.toLowerCase() == 'ronnie' || search.toLowerCase() == 'lessa') {
            setSearchList({...searchList,lessa:'ok'})
        }
    }
    return (
        <div className="searchbox">
            <BiSearch className="icon" />
            <form onSubmit={handleSubmit}>
                <input className="input" type='text' name='search' value={search}
                    onChange={e => { setSearch(e.target.value) }}  />
            </form>

        </div>
    )
}
export default Searchbox