import React, { useState } from "react";

export const SearchContext = React.createContext({})

export const SearchProvider = (props) => {
    const [searchList, setSearchList] = useState({
        alvo: '', arma: '', arquivo: '', bombeiro: '', cameras: '', carro: '', confundir: '',
        crime: '', delegado: '', erro: '', execucao: '', fragilidade: '', imagens: '', interferencia: '',
        investigacao: '', local: '', lume: '', metodos: '', negro: '', passo: '', placas: '', rastreamento: '',
        seguindo: '', sigilo: '', silenciador: '', tempo: '', testemunho: '', tiros: '', quem: '', milicia: '',
        escitorio: '', apoio: '', familia: '', poder: '', planalto:'', constituido:'', envolvimento:'', politicos:'',
        rumo:'', ela:''
    })
    return (
        <SearchContext.Provider value={{ searchList, setSearchList }}>
            {props.children}
        </SearchContext.Provider>
    )
}
