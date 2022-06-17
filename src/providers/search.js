import React, { useState } from "react";

export const SearchContext = React.createContext({})

export const SearchProvider = (props) => {
    const [progress, setProgress]=useState(2)
    const [searchList, setSearchList] = useState({
        alvo: '', arma: '', arquivo: '', bombeiro: '', cameras: '', carro: '', confundir: '',
        crime: '', delegado: '', erro: '', execucao: '', fragilidade: '', imagens: '', interferencia: '',
        investigacao: '', local: '', lume: '', metodos: '', negro: '', passo: '', placas: '', rastreamento: '',
        seguindo: '', sigilo: '', silenciador: '', tempo: '', testemunho: '', tiros: '',
    })
    return (
        <SearchContext.Provider value={{ searchList, setSearchList, progress, setProgress }}>
            {props.children}
        </SearchContext.Provider>
    )
}
