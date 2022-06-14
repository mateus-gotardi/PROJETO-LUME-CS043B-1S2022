import React from "react";
import { Link } from "react-router-dom";

const BackButton= (props)=>{
    return(
        <div className='footer'>
            <Link to={props.to} className="button">voltar</Link>
        </div>
    )
}
export default BackButton