import React, { useEffect, useState } from "react";
import '../../styles/header.scss'
import Timer from "../timer";
import Searchbox from "./searchbox";
import { Link, useParams } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <Link to='/inicial' className="timerlink"><Timer /></Link>
            <Searchbox />
        </div>
    )

}
export default Header