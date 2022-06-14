import React, { useState } from "react";
import { BiSearch } from 'react-icons/bi'
import { SearchContext } from "../../providers/search";

const Searchbox = () => {
    const [search, setSearch] = useState('')
    const {searchList, setSearchList}=React.useContext(SearchContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search.toLowerCase() === 'ronnie' || search.toLowerCase() === 'lessa') {
            setSearchList({...searchList,lessa:'ok'})
            setSearch('')
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