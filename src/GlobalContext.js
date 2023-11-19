import { createContext, useState } from "react";

export const GlobalContext = createContext({
    searchParam: '',
    handleOnChange : () => {},
    handleSubmit : () => {},
    movieList: [],
    loading:false

})


const GlobalState = ({children}) =>  {

    const [searchParam,setSearchParam] = useState ("");

    const handleOnChange = () => {

    }

    const handleSubmit = () => {

    }

    const contextValue ={
        searchParam,
        handleOnChange : (event) => {
            console.log(event.target.value)
            setSearchParam(event.target.value)
        },
        handleSubmit : () => {},
        movieList: [],
        loading:false
    }; 

    return(
        <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
    )
}

export default GlobalState;