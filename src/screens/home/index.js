import React from "react";
import { Link } from "react-router-dom";
import '../../styles/home.scss'

const Home =()=>{
    return(
        <div className="homeContainer">
            <div className="title">
                <h1>um crime aconteceu.</h1>
                <h2>2018</h2>
            </div>
            
            <Link to='p1' className="buttonHome">investigar</Link>
        </div>
    )
}

export default Home