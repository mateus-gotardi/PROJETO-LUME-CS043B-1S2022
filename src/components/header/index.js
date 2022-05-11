import React, { useState } from "react";
import { BiSearch } from 'react-icons/bi'
import '../../styles/header.scss'
import Timer from "../timer";

const Header = () => {

    const [search, setSearch] = useState('')
    return (
        <div className="header">
            <Timer/>
            <div className="searchbox">
                <BiSearch className="icon" />
                <input className="input" type='text' name='search' value={search} onChange={e => { setSearch(e.target.value) }} />
            </div>
        </div>
    )
}
export default Header