import React, { useState } from "react";

export const SearchContext = React.createContext({})

export const SearchProvider = (props)=>{
    const [searchList, setSearchList] = useState({}) 
    return(
        <SearchContext.Provider value={{searchList, setSearchList}}>
            {props.children}
        </SearchContext.Provider>
    )
}
