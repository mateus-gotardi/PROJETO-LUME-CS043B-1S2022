import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Progress from "./progress";

const BackButton = (props) => {
    const [style, setStyle]=useState({background:'#fff'})
    useEffect(()=>{
        if(props.background!==undefined){
            let newStyle={
                background: props.background
            }
            setStyle(newStyle)
        }
    },[setStyle, props.background])

    return (
        <footer className='footer' style={style}>
            <Link to={props.to} className="button">voltar</Link>
            <Progress done={props.done} color={props.color} />
        </footer>
    )
}
export default BackButton