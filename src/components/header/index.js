import React from "react";
import '../../styles/header.scss'
import Timer from "../timer";
import Searchbox from "./searchbox";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <Link to='/inicial' className="timerlink"><Timer /></Link>
            <Searchbox />
        </div>
    )

}
export default Header