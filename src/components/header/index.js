import React, { Fragment, useState } from "react";
import '../../styles/header.scss'
import Timer from "../timer";
import Searchbox from "./searchbox";
import { Link } from "react-router-dom";
import Help from "./help";
import { BiHelpCircle } from 'react-icons/bi'

const Header = () => {
    const [help, setHelp]= useState(false)
    const handleHelp=()=>{
        if(help){
            setHelp(false)
        }else{
            setHelp(true)
        }
    }
    return (
        <Fragment>
            <div className="header">
                <Link to='/inicial' className="timerlink"><Timer /></Link>
                <div>
                    <Searchbox /><BiHelpCircle className="icon helpIcon" onClick={handleHelp}/>
                </div>

            </div>
            {help?<Help />:<></>}
            
        </Fragment>

    )

}
export default Header