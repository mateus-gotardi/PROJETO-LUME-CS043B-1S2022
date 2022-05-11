import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
    const [minute, setMinute] = useState(4)
    const [second, setSecond] = useState(0)
    const navigate = useNavigate();
    useEffect(()=>{
        sessionStorage.clear()
    },[])
    useEffect(() => {
        setTimeout(() => {
            if (minute >= 0) {
                if (second > 0) {
                    setSecond(second - 1)
                } else {
                    setSecond(59)
                    setMinute(minute - 1)
                }
            }else{
                sessionStorage.clear()
                setMinute(4)
                setSecond(0)
                navigate('/');
            }
        }, 1000);
    });
    return (<h1 className="timer">{minute}:{second<10?<span>0{second}</span>:<span>{second}</span>}</h1>);
}

export default Timer