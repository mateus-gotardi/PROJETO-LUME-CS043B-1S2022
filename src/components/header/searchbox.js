import React, { useState, useEffect } from "react";
import { BiSearch } from 'react-icons/bi'
import { SearchContext } from "../../providers/search";
import { Navigate } from "react-router-dom";

const Searchbox = () => {
    const [search, setSearch] = useState('')
    const [redirect, setRedirect] = useState(false)
    const { searchList } = React.useContext(SearchContext)
    const keys = Object.keys(searchList)

    function remover_acentos_espaco(str) {
        return str.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase();
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let str = remover_acentos_espaco(search)
        if (keys.indexOf(str) !== -1) {
            setRedirect(true)
        }
    }
    useEffect(() => {
        setTimeout(() => {
            if(redirect){
                setRedirect(false)
                setSearch('')
            }
        }, 1);
    },[redirect]);

    if (redirect) {
        let str = remover_acentos_espaco(search)
        return <Navigate to={'/' + str} />
    } else {
        return (
            <div className="searchbox">
                <BiSearch className="icon" />
                <form onSubmit={handleSubmit}>
                    <input className="input" type='text' name='search' value={search}
                        onChange={e => { setSearch(e.target.value) }} />
                </form>

            </div>
        )
    }
}
export default Searchbox