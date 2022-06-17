import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../providers/search";

const Timer = () => {
    const [minute, setMinute] = useState(10)
    const [second, setSecond] = useState(0)
    const {setSearchList}=React.useContext(SearchContext)
    const navigate = useNavigate();
    useEffect(()=>{
        setSearchList({
            alvo: '', arma: '', arquivo: '', bombeiro: '', cameras: '', carro: '', confundir: '',
            crime: '', delegado: '', erro: '', execucao: '', fragilidade: '', imagens: '', interferencia: '',
            investigacao: '', local: '', lume: '', metodos: '', negro: '', passo: '', placas: '', rastreamento: '',
            seguindo: '', sigilo: '', silenciador: '', tempo: '', testemunho: '', tiros: '',
        })
    },[setSearchList])
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
                setSearchList({
                    alvo: '', arma: '', arquivo: '', bombeiro: '', cameras: '', carro: '', confundir: '',
                    crime: '', delegado: '', erro: '', execucao: '', fragilidade: '', imagens: '', interferencia: '',
                    investigacao: '', local: '', lume: '', metodos: '', negro: '', passo: '', placas: '', rastreamento: '',
                    seguindo: '', sigilo: '', silenciador: '', tempo: '', testemunho: '', tiros: '',
                })
                setMinute(10)
                setSecond(0)
                navigate('/home');
            }
        }, 1000);
    });
    return (<h1 className="timer">{minute}:{second<10?<span>0{second}</span>:<span>{second}</span>}</h1>);
}

export default Timer