import React, { useState } from "react";

export const SearchContext = React.createContext({})

export const SearchProvider = (props) => {
    const [searchList, setSearchList] = useState({
        dificuldades: '', complexidade: '',
        resposta: '', delegados: '', silencio: '', sigilo: '', tempo: '', arquivo: '',
        profissional: '', milicias: '', culpados: '', marielle: '', prova: '', lume: '',
        câmeras: '', assassinato: '', quem: '', arma: ''
    })
    return (
        <SearchContext.Provider value={{ searchList, setSearchList }}>
            {props.children}
        </SearchContext.Provider>
    )
}
